import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { ExternalLink, Github, Zap, Shield, Cloud, Database, Network, Cog } from 'lucide-react';
import { projects } from '@/data/portfolio';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const projectIcons = {
  1: Cloud,
  2: Network, 
  3: Zap,
  4: Cog,
  5: Database,
  6: Shield
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-8 scroll-mt-header bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world DevOps and cloud infrastructure projects that demonstrate 
            expertise in automation, scalability, and modern deployment practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            onSlideChange={(swiper) => setActiveProject(swiper.activeIndex)}
            className="pb-16"
          >
            {projects.map((project, index) => {
              const IconComponent = projectIcons[project.id as keyof typeof projectIcons];
              
              return (
                <SwiperSlide key={project.id}>
                  <motion.div
                    className="glass-card overflow-hidden hover-lift group h-full"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Project Image/Icon */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      {/* Floating tech badges */}
                      <div className="absolute top-4 right-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur text-white border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Key highlights */}
                        <div className="space-y-2 mb-6">
                          {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground">{highlight}</p>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Project counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground">
              Showing project {activeProject + 1} of {projects.length}
            </p>
          </motion.div>

          {/* View all projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Interested in seeing more of my work? Let's discuss your next project.
            </p>
            <motion.button
              className="btn-hero"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: hsl(var(--primary));
          background: hsl(var(--card));
          border: 1px solid hsl(var(--primary) / 0.3);
          width: 44px;
          height: 44px;
          border-radius: 12px;
          backdrop-filter: blur(12px);
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: hsl(var(--primary));
          color: white;
        }

        .swiper-pagination-bullet {
          background: hsl(var(--muted));
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
}