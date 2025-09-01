import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolio';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:text-primary'
    }
  ];

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'Contact', href: '#contact' },
        { name: 'LinkedIn', href: personalInfo.linkedin },
        { name: 'Email', href: `mailto:${personalInfo.email}` },
        { name: 'Resume', href: '/resume.pdf' }
      ]
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-8 right-8 z-30 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </motion.button>

      <footer className="bg-background border-t border-white/10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                    JS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{personalInfo.name}</h3>
                    <p className="text-muted-foreground">{personalInfo.title}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                  DevOps Engineer passionate about building scalable cloud infrastructure 
                  and automating deployment processes. Let's connect and create something amazing together.
                </p>

                {/* Social links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground transition-all ${social.color} hover-lift`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        onClick={link.href.startsWith('#') ? (e) => {
                          e.preventDefault();
                          document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                        } : undefined}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            >
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>© {currentYear} {personalInfo.name}. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>and lots of ☕</span>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Get in Touch
                </motion.button>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-violet opacity-50" />
      </footer>
    </>
  );
}