import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import loadingBg from '@/assets/loading-bg.jpg';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      style={{
        backgroundImage: `url(${loadingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Animated logo/icon */}
        <motion.div
          className="mb-8 flex items-center justify-center"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              JS
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 animate-ping" />
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.h1 
          className="text-3xl font-bold mb-4 text-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          DevOps Engineer
        </motion.h1>

        <motion.p 
          className="text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Building Scalable Cloud Infrastructure
        </motion.p>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Loading Portfolio</span>
            <span className="text-primary font-semibold">{progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent relative"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* Cloud icons animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/20 text-2xl"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
              }}
              animate={{ 
                y: -50,
                x: Math.random() * window.innerWidth,
              }}
              transition={{ 
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear"
              }}
            >
              ☁️
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}