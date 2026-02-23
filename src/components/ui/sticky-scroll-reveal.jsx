import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const panelGradients = [
    "linear-gradient(135deg, #2E4036 0%, #1A1A1A 100%)",
    "linear-gradient(135deg, #CC5833 0%, #2E4036 100%)",
    "linear-gradient(135deg, #1e2b24 0%, #3d5449 100%)",
    "linear-gradient(135deg, #a8461f 0%, #CC5833 100%)",
    "linear-gradient(135deg, #2E4036 0%, #CC5833 100%)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(panelGradients[0]);

  useEffect(() => {
    setBackgroundGradient(panelGradients[activeCard % panelGradients.length]);
  }, [activeCard]);

  return (
    <div
      ref={ref}
      className="h-[36rem] overflow-y-auto flex justify-center relative gap-16"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Webkit scrollbar hide */}
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {/* Left: proces-tijdlijn */}
      <div className="relative flex items-start">
        <div className="relative max-w-sm">
          {/* Verticale lijn */}
          <div className="absolute left-[14px] top-2 bottom-20 w-px bg-moss/20" />

          {content.map((item, index) => (
            <div key={item.title + index} className="relative pl-12 my-14">
              {/* Genummerde cirkel */}
              <motion.div
                animate={{
                  backgroundColor: activeCard === index ? "#CC5833" : "#F2F0E9",
                  borderColor:
                    activeCard === index ? "#CC5833" : "rgba(46,64,54,0.25)",
                  color:
                    activeCard === index ? "#F2F0E9" : "rgba(26,26,26,0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-0.5 w-[28px] h-[28px] rounded-full border flex items-center justify-center font-mono-brand text-[9px] tracking-wide"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.35 }}
                className="font-heading font-bold text-xl md:text-2xl text-charcoal leading-snug"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.35 }}
                className="font-body text-sm text-charcoal/55 mt-2.5 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-32" />
        </div>
      </div>

      {/* Rechts: sticky visueel paneel */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:flex h-64 w-80 rounded-2xl sticky top-10 flex-shrink-0 overflow-hidden items-center justify-center transition-all duration-700",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};
