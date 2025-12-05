import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import { VerifiedIcon } from "lucide-react";

// Images
import AboutMain from "@/assets/about-main.jpg";
import AboutSide1 from "@/assets/about-side-1.jpg";
import AboutSide2 from "@/assets/about-side-2.jpg";

/* ---------------- ANIMATION VARIANTS ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

/* ---------------- X CARD COMPONENT ---------------- */
function XCard({
  link = "https://x.com",
  authorName = "OUR MISSION",
  authorHandle = "siri_electromotive",
  authorImage = "https://pbs.twimg.com/profile_images/1854916060807675904/KtBJsyWr_400x400.jpg",
  content = [
    "We engineer intelligent charging ecosystems that integrate hardware, firmware, and AI.",
    "Designed for industries that demand reliability, safety, and performance.",
    "Our mission: to drive India’s electrification journey with innovation at the core.",
  ],
  isVerified = true,
  timestamp = "2025",
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className={cn(
          "w-full max-w-xl p-1.5 rounded-2xl relative isolate overflow-hidden",
          "bg-white/5 dark:bg-black/90",
          "bg-gradient-to-br from-black/5 to-black/[0.02]",
          "backdrop-blur-xl backdrop-saturate-[180%]",
          "border border-black/10",
          "shadow-[0_8px_16px_rgb(0_0_0_/_0.15)]"
        )}
      >
        <div
          className={cn(
            "w-full p-5 rounded-xl relative",
            "bg-gradient-to-br from-black/[0.05] to-transparent",
            "backdrop-blur-md backdrop-saturate-150",
            "border border-black/[0.05]",
            "text-black/90 dark:text-white",
            "shadow-sm"
          )}
        >
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-black dark:text-white/90">
                  {authorName}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-1.5">
            {content.map((line, i) => (
              <p key={i} className="text-black dark:text-white/90 text-base">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

/* ---------------- ABOUT SECTION ---------------- */
const AboutSection = () => {
  const [titleHovered, setTitleHovered] = React.useState(false);
  
  return (
    <section
      id="about"
      className={cn(
        "w-full overflow-hidden bg-background py-20 sm:py-28 relative"
      )}
    >
      {/* Bottom wavy divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" className="fill-amber-100/70" style={{ filter: 'blur(0.5px)' }}></path>
          <path d="M0,96L60,90.7C120,85,240,75,360,69.3C480,64,600,64,720,69.3C840,75,960,85,1080,85.3C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" className="fill-yellow-50/80"></path>
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* LEFT — TEXT */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold font-display cursor-pointer select-none"
            onMouseEnter={() => setTitleHovered(true)}
            onMouseLeave={() => setTitleHovered(false)}
            whileHover={{ y: -8, rotateX: 5, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            variants={itemVariants}
          >
            <span className="text-foreground inline-block hover:text-accent transition-colors duration-300 mr-3">
              About
            </span>
            <motion.span 
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent"
              animate={titleHovered ? { scale: 1.1, rotateY: 10 } : { scale: 1, rotateY: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Us
            </motion.span>
          </motion.h2>

          <motion.p
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed font-medium"
            variants={itemVariants}
          >
            At <strong className="text-foreground font-semibold">SIRI Electromotive</strong>,
            we are shaping the future of clean mobility through advanced battery charging innovations
            and intelligent energy solutions.
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed font-medium"
            variants={itemVariants}
          >
            Our AI-powered charging ecosystem adapts to any battery chemistry — ensuring fast, safe,
            and optimized performance across all platforms.
          </motion.p>

          {/* REPLACED MISSION BOX WITH XCARD */}
          <motion.div
            className="mt-10"
            variants={itemVariants}
          >
            <XCard />
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE GALLERY */}
        <motion.div
          className="relative w-full min-h-[500px] lg:min-h-[600px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Tall image on the right - touches top and bottom */}
          <motion.div
            className="absolute -right-20 lg:-right-32 -top-20 sm:-top-28 -bottom-20 sm:-bottom-28 w-[75%] sm:w-[80%] overflow-hidden shadow-xl border border-white/10 z-10"
            variants={imageVariants}
          >
            <img src={AboutMain} alt="About main" className="h-full w-full object-cover" />
          </motion.div>

          {/* Square image - half outside (left), half on the tall picture */}
          <motion.div
            className="absolute left-[5%] sm:left-[10%] top-1/2 -translate-y-1/2 w-[55%] sm:w-[50%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20"
            variants={imageVariants}
          >
            <img src={AboutSide1} alt="About side 1" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
