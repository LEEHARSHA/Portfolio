import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading, GlassCard } from "../components/ui/SectionHeading";
import { MagneticButton } from "../components/ui/MagneticButton";
import { projects } from "../data/projects";
import { SectionDivider } from "../components/ui/BackgroundEffects";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative section-padding">
      <SectionDivider />
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="Portfolio"
          title="Featured Projects"
          subtitle="Explore our latest work — digital products crafted with precision and passion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -8 }}
              style={{ perspective: 1000 }}
            >
              <GlassCard className="p-0 overflow-hidden group h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold glass"
                    style={{ color: project.color }}
                  >
                    {project.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs glass text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <MagneticButton
                    href={project.link}
                    variant="secondary"
                    size="sm"
                    className="w-full"
                  >
                    View Project <ExternalLink size={14} />
                  </MagneticButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
