import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, heroKeywords } from '@/data/portfolio';
import heroBackground from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile-pic.jpeg';

export default function Hero() {

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place resume.pdf in the public folder
    link.download = 'Bhogapathi_Jagat_Sai_Resume.pdf';
    link.click();
  };

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">

          {/* Profile Image - Mobile Top, Desktop Left */}
          <motion.div
            className="flex justify-center lg:order-1 order-1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src={profileImage}
                  alt={`${personalInfo.name} - DevOps Engineer`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-lg sm:text-2xl animate-float"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ☁️
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-violet to-accent flex items-center justify-center text-sm sm:text-xl animate-bounce-slow"
              >
                ⚡
              </motion.div>

              <div className="absolute inset-0 rounded-2xl border-2 sm:border-4 border-gradient-to-r from-primary via-accent to-violet opacity-50 animate-pulse-glow" />
            </div>
          </motion.div>

          {/* Content - Desktop Right, Mobile Below */}
          <motion.div
            className="text-center lg:text-left lg:order-2 order-2 space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4">
              <motion.p
                className="text-2xl text-primary font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm {personalInfo.name}
              </motion.p>

              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Building Scalable
                <br />
                <span className="gradient-text">
                  <TypeAnimation
                    sequence={[
                      'DevOps Pipelines',
                      2000,
                      'CI/CD Workflows',
                      2000,
                      'Cloud Infrastructure',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
                <br />
                Solutions
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                DevOps Engineer specializing in cloud infrastructure, CI/CD pipelines,
                and automation. Transforming ideas into scalable, reliable systems
                across AWS, Azure, and GCP platforms.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <motion.button
                  onClick={handleViewProjects}
                  className="btn-secondary group inline-flex items-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Buttons row */}
              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                {/* View Projects button here */}

                <motion.button
                  onClick={handleDownloadResume}
                  className="btn-secondary group inline-flex items-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Download Resume</span>
                  <Download className="w-5 h-5 shrink-0 group-hover:animate-bounce" />
                </motion.button>
              </div>

            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { label: "Cloud Platforms", value: "3+" },
                { label: "Years Experience", value: "2+" },
                { label: "Projects Delivered", value: "10+" },
                { label: "Certifications", value: "6+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div >

      {/* Scroll indicator */}
      < motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }
        }
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div >
    </section >
  );
}

