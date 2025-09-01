import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { certifications } from '@/data/portfolio';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';

export default function Certification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="certification" className="py-8 scroll-mt-header bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Certifications</span> & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications validating expertise in cloud technologies, 
            security practices, and DevOps methodologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100 
              }}
              className="group perspective-1000"
            >
              <motion.div
                className="glass-card p-6 h-full relative overflow-hidden hover-lift"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  z: 50
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                
                {/* Certificate Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>

                {/* Certificate Content */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    {cert.code && (
                      <p className="text-sm text-primary font-semibold">
                        {cert.code}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground">
                        Credential ID: {cert.credentialId}
                      </p>
                    </div>
                  )}
                </div>

                {/* Verify button */}
                {/* <motion.div
                  className="mt-6 relative z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all group/btn"
                    onClick={() => window.open(cert.verifyUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="font-medium">Verify Certificate</span>
                  </button>
                </motion.div> */}

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Certification Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {certifications.filter(c => c.issuer.includes('Microsoft')).length}
                </div>
                <p className="text-muted-foreground">Microsoft Azure</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">
                  {certifications.filter(c => c.issuer.includes('Google')).length}
                </div>
                <p className="text-muted-foreground">Google Cloud</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet mb-2">
                  {certifications.filter(c => c.issuer.includes('Industry') || c.issuer.includes('AWS')).length}
                </div>
                <p className="text-muted-foreground">Specialized</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}