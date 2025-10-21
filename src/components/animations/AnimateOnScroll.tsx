'use client';

import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimationVariant = 'fadeInUp' | 'fadeInUpWithRotate';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animationType?: AnimationVariant;
}

export default function AnimateOnScroll({ children, delay = 0, className, animationType = 'fadeInUp' }: AnimateOnScrollProps) {
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
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay },
      },
    },
    fadeInUpWithRotate: {
      hidden: { opacity: 0, y: 50, rotate: -5 },
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay },
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
