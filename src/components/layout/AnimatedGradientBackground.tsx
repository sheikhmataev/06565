'use client';

import { motion } from 'framer-motion';

export default function AnimatedGradientBackground() {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        background: [
          "linear-gradient(120deg, #ef875e, #c95b66, #923d67)",
          "linear-gradient(120deg, #ffbd5b, #ef875e, #c95b66)",
          "linear-gradient(120deg, #f9f871, #ffbd5b, #ef875e)",
          "linear-gradient(120deg, #c95b66, #923d67, #522a5b)",
          "linear-gradient(120deg, #ef875e, #c95b66, #923d67)",
        ],
      }}
      transition={{
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
  );
}
