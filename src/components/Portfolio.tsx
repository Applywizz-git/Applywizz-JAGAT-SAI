import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import LoadingScreen from './LoadingScreen';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Certification from './Certification';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    // Preload critical images
    const criticalImages = [
      '/src/assets/hero-bg.jpg',
      '/src/assets/profile-pic.jpeg',
    ];

    const imagePromises = criticalImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    // Wait for images to load (with timeout fallback)
    Promise.allSettled(imagePromises)
      .then(() => {
        // Minimum loading time for smooth experience
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => setShowContent(true), 500);
        }, 2000);
      });

    // Cleanup AOS on unmount
    return () => AOS.refresh();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="relative">
              {/* Hero Section */}
              <Hero />

              {/* About Section */}
              <About />

              {/* Experience Section */}
              <Experience />

              {/* Projects Section */}
              <Projects />

              {/* Skills Section */}
              <Skills />

              {/* Certification Section */}
              <Certification />

              {/* Education Section */}
              <Education />

              {/* Contact Section */}
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              {/* Animated background particles */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/20 rounded-full"
                    initial={{
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight,
                    }}
                    transition={{
                      duration: Math.random() * 20 + 30,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'linear',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
