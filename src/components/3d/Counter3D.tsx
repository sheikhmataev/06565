'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface Counter3DProps {
  value: string | number;
  suffix?: string;
  duration?: number;
}

export default function Counter3D({ value, suffix = '', duration = 2000 }: Counter3DProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousDigits, setPreviousDigits] = useState<string[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = typeof value === 'number' ? value : parseInt(value.toString().replace(/[^0-9]/g, ''));
    const startValue = 0;
    const endValue = numericValue;
    const startTime = Date.now();

    setIsAnimating(true);
    setDisplayValue(0);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setDisplayValue(currentValue);

      // Update previous digits for flip animation
      const currentDigits = currentValue.toString().split('');
      setPreviousDigits(currentDigits);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        setDisplayValue(numericValue);
      }
    };

    animate();
  }, [isInView, value, duration]);

  // Split the display value into individual digits
  const valueStr = displayValue.toString();
  const digits = valueStr.split('');

  return (
    <div ref={ref} className="flex items-center justify-center gap-0.5">
      {digits.map((digit, index) => (
        <Digit3D 
          key={`${index}-${digit}-${displayValue}`} 
          digit={digit}
          previousDigit={previousDigits[index] || '0'}
          isAnimating={isAnimating && isInView}
        />
      ))}
      {suffix && (
        <span className="text-3xl md:text-4xl font-bold text-accent-2 ml-1">{suffix}</span>
      )}
    </div>
  );
}

function Digit3D({ digit, previousDigit, isAnimating }: { digit: string; previousDigit: string; isAnimating: boolean }) {
  const [flipRotation, setFlipRotation] = useState(0);
  const [currentDigit, setCurrentDigit] = useState(previousDigit);
  const isNumeric = /[0-9]/.test(digit);

  useEffect(() => {
    if (digit !== previousDigit && isNumeric) {
      // Start flip animation when digit changes
      let rotation = 0;
      const flipSpeed = 10; // degrees per frame
      
      const animateFlip = () => {
        rotation += flipSpeed;
        setFlipRotation(rotation);
        
        // Switch digit at halfway point (90 degrees)
        if (rotation >= 90 && currentDigit === previousDigit) {
          setCurrentDigit(digit);
        }
        
        if (rotation < 180) {
          requestAnimationFrame(animateFlip);
        } else {
          setFlipRotation(0);
        }
      };
      
      animateFlip();
    }
  }, [digit, previousDigit, isNumeric, currentDigit]);

  if (!isNumeric) {
    return <span className="text-3xl md:text-4xl font-bold text-accent-2">{digit}</span>;
  }

  return (
    <div
      className="relative inline-block"
      style={{
        perspective: '600px',
        width: '1.2em',
        height: '1.2em',
        display: 'inline-block',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${flipRotation}deg)`,
          transition: flipRotation > 0 && flipRotation < 180 ? 'none' : 'transform 0s',
        }}
      >
        {/* Front face - current digit */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translateZ(15px)',
          }}
        >
          <span className="text-3xl md:text-4xl font-bold text-accent-2">{currentDigit}</span>
        </div>
        
        {/* Back face - new digit */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotateX(180deg) translateZ(15px)',
          }}
        >
          <span className="text-3xl md:text-4xl font-bold text-accent-2">{digit}</span>
        </div>
      </div>
    </div>
  );
}