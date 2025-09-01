import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { skills } from '@/data/portfolio';
import { Filter, Star } from 'lucide-react';

function ProgressRing({ percentage, size = 80, strokeWidth = 6 }: { 
  percentage: number; 
  size?: number; 
  strokeWidth?: number; 
}) {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (displayPercentage / 100) * circumference;

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setDisplayPercentage(prev => {
          if (prev >= percentage) {
            clearInterval(timer);
            return percentage;
          }
          return prev + 1;
        });
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isInView, percentage]);

  return (
    <div ref={ref} className="relative">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-primary">{displayPercentage}%</span>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-8 scroll-mt-header bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across cloud platforms, DevOps tools, and modern infrastructure technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-primary text-white shadow-primary'
                : 'bg-muted/20 text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setSelectedCategory(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-4 h-4 mr-2 inline" />
            All Skills
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-primary'
                  : 'bg-muted/20 text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => {
            // Filter categories based on selection
            if (selectedCategory && selectedCategory !== category) {
              return null;
            }

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold text-center">
                  <span className="text-primary">{category}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                      className="glass-card p-6 text-center hover-lift group"
                      whileHover={{ y: -5 }}
                    >
                      {/* Skill Icon/Emoji */}
                      <motion.div
                        className="text-4xl mb-4 group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>

                      {/* Skill Name */}
                      <h4 className="text-lg font-semibold mb-4">{skill.name}</h4>

                      {/* Progress Ring */}
                      <div className="flex justify-center mb-4">
                        <ProgressRing percentage={skill.level} />
                      </div>

                      {/* Skill Level */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`w-4 h-4 ${
                              starIndex < Math.floor(skill.level / 20)
                                ? 'text-primary fill-current'
                                : 'text-muted'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Proficiency Label */}
                      <p className="text-sm text-muted-foreground mt-2">
                        {skill.level >= 90 ? 'Expert' :
                         skill.level >= 80 ? 'Advanced' :
                         skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Skill Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Core Technologies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <p className="text-muted-foreground">Cloud Platforms</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet mb-2">6+</div>
                <p className="text-muted-foreground">Certifications</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}