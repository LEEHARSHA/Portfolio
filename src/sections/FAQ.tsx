import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading, GlassCard } from "../components/ui/SectionHeading";
import { faqItems } from "../data/faq";
import { SectionDivider } from "../components/ui/BackgroundEffects";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="relative section-padding">
      <SectionDivider />
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          tag="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know about working with RUKD Technologies."
        />

        <div className="space-y-4">
          {faqItems.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <GlassCard
                  className="cursor-pointer p-0 overflow-hidden"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <div className="flex items-center justify-between p-6">
                    <h3 className="font-display font-semibold text-base pr-4">{item.question}</h3>
                    <div className="shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-muted text-sm leading-relaxed">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
