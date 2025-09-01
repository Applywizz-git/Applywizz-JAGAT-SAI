import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '@/data/portfolio';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="py-8 scroll-mt-header bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Education</span> & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in technology with specialized focus on cloud computing, 
            big data, and information technology systems
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="glass-card p-8 hover-lift relative overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    {/* Education Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-8 h-8 text-white" />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground">
                        {edu.school}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <motion.div
                    className={`px-4 py-2 rounded-full text-sm font-semibold mt-4 lg:mt-0 ${
                      edu.status === 'Completed'
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'bg-primary/20 text-primary border border-primary/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {edu.status}
                  </motion.div>
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {edu.degree.includes('Masters') ? 'Graduate Level' : 'Undergraduate Level'}
                    </span>
                  </div>
                </div>

                {/* Relevant Coursework or Description */}
                <div className="mt-6 p-4 rounded-lg bg-muted/5 border border-white/5">
                  <h4 className="font-semibold text-foreground mb-2">Key Focus Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.degree.includes('Cloud Computing') && (
                      <>
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                          Cloud Architecture
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                          Big Data Analytics
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-violet/10 text-violet border border-violet/20">
                          Distributed Systems
                        </span>
                      </>
                    )}
                    {edu.degree.includes('Information Technology') && (
                      <>
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                          System Design
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                          Database Management
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-violet/10 text-violet border border-violet/20">
                          Network Security
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Academic Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2025</div>
                <p className="text-muted-foreground">Expected Graduation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">6+</div>
                <p className="text-muted-foreground">Years of Study</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet mb-2">2</div>
                <p className="text-muted-foreground">Degrees Earned</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-muted-foreground leading-relaxed">
                Combining academic excellence with practical industry experience to build 
                comprehensive expertise in cloud technologies and DevOps practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}