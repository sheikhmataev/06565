'use client';

import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimationVariant = 
  | 'fadeInUp' 
  | 'fadeInUpWithRotate'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'fadeInDown'
  | 'scaleIn'
  | 'slideInLeft'
  | 'slideInRight'
  | 'zoomIn'
  | 'flipIn'
  | 'blurIn'
  | 'sweepIn'
  | 'bounceIn'
  | 'staggerIn';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animationType?: AnimationVariant;
  duration?: number;
  distance?: number;
}

export default function AnimateOnScroll({ 
  children, 
  delay = 0, 
  className, 
  animationType = 'fadeInUp',
  duration = 0.6,
  distance = 50
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const animationVariants: Record<AnimationVariant, Variants> = {
    fadeInUp: {
      hidden: { opacity: 0, y: distance },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    fadeInUpWithRotate: {
      hidden: { opacity: 0, y: distance, rotate: -3 },
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -distance },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: distance },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -distance },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, ease: [0.34, 1.56, 0.64, 1], delay },
      },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -distance * 1.5, skewX: -10 },
      visible: {
        opacity: 1,
        x: 0,
        skewX: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    slideInRight: {
      hidden: { opacity: 0, x: distance * 1.5, skewX: 10 },
      visible: {
        opacity: 1,
        x: 0,
        skewX: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: duration * 1.2, ease: [0.34, 1.56, 0.64, 1], delay },
      },
    },
    flipIn: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    blurIn: {
      hidden: { opacity: 0, filter: 'blur(10px)', scale: 0.95 },
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1,
        transition: { duration: duration * 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    sweepIn: {
      hidden: { opacity: 0, x: -distance, rotateY: -15 },
      visible: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: { duration, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
    bounceIn: {
      hidden: { opacity: 0, scale: 0.3, y: distance },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { 
          duration: duration * 1.3, 
          ease: [0.34, 1.56, 0.64, 1],
          type: 'spring',
          stiffness: 100,
          delay 
        },
      },
    },
    staggerIn: {
      hidden: { opacity: 0, y: distance * 0.5 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration * 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={animationVariants[animationType]}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}