import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta.jpg";
import { useState } from "react";

interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  subtitle?: string;
  callToAction?: { text: string; href: string };
  backgroundImage?: string;
}

const CTASection = React.forwardRef<HTMLDivElement, CTAProps>(
  (
    {
      className,
      title = (
        <>
          Join Us on the <span className="text-primary">Journey</span>
        </>
      ),
      subtitle = "At SIRI Electromotive, we believe in a world powered by clean energy, where the hum of electric engines replaces the roar of combustion.",
      callToAction = { text: "Talk to Our Expert", href: "#contact" },
      backgroundImage = ctaImage,
      ...props
    },
    ref
  ) => {
    // controls animation for green underline when clicking heading
    const underlineControls = useAnimation();
    const [titleHovered, setTitleHovered] = useState(false);

    const handleTitleClick = () => {
      underlineControls.start({
        width: "100%",
        transition: { duration: 0.6, ease: "easeOut" },
      });
    };

    // smooth animations
    const fadeInUp = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      },
    };

    const staggerParent = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.1,
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-slate-50/30 dark:bg-slate-900/20 text-foreground md:flex-row border-y border-border/30 -mt-12",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={staggerParent}
        {...props}
      >
        {/* LEFT SIDE */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          {/* Heading with clickable underline animation */}
          <motion.h1
            onClick={handleTitleClick}
            onMouseEnter={() => setTitleHovered(true)}
            onMouseLeave={() => setTitleHovered(false)}
            variants={fadeInUp}
            whileHover={{ y: -8, rotateX: 5, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-4xl font-bold leading-tight text-foreground md:text-5xl cursor-pointer w-fit select-none group"
          >
            <span className="inline-block group-hover:text-accent transition-colors duration-300 mr-3">
              Join Us on the
            </span>
            <motion.span 
              className="text-gradient inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={titleHovered ? { scale: 1.1, rotateY: 10 } : { scale: 1, rotateY: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Journey
            </motion.span>
          </motion.h1>

          {/* GREEN UNDERLINE ANIMATION */}
          <motion.div
            className="my-4 h-1 bg-primary rounded-full"
            initial={{ width: "20%" }}
            animate={underlineControls}
          />

          <motion.p
            variants={fadeInUp}
            className="mb-8 max-w-md text-base text-muted-foreground"
          >
            {subtitle}
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div variants={fadeInUp}>
            <Button asChild className="px-6 py-5 text-base font-semibold">
              <a href={callToAction.href}>{callToAction.text}</a>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT SIDE – SLANTED IMAGE WITH SCROLL REVEAL */}
        <motion.div
          className="w-full min-h-[300px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.05,
              clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
            },
            visible: {
              opacity: 1,
              scale: 1,
              clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
              transition: { duration: 1.2, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        />
      </motion.section>
    );
  }
);

CTASection.displayName = "CTASection";
export default CTASection;
