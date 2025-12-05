import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bgg.png";

const FloatingParticle = ({ delay, size, left, top }) => (
  <div
    className="absolute rounded-full bg-glow animate-twinkle"
    style={{
      width: size,
      height: size,
      left,
      top,
      animationDelay: `${delay}s`,
      boxShadow: `0 0 ${size * 2}px hsl(var(--glow))`,
    }}
  />
);

const HeroSection = () => {
  const particles = [
    { delay: 0, size: 3, left: "10%", top: "20%" },
    { delay: 0.5, size: 2, left: "20%", top: "10%" },
    { delay: 1, size: 4, left: "80%", top: "15%" },
    { delay: 1.5, size: 2, left: "85%", top: "30%" },
    { delay: 2, size: 3, left: "15%", top: "70%" },
    { delay: 0.3, size: 2, left: "90%", top: "60%" },
    { delay: 1.2, size: 3, left: "5%", top: "40%" },
    { delay: 0.8, size: 2, left: "70%", top: "80%" },
    { delay: 1.8, size: 4, left: "30%", top: "5%" },
    { delay: 2.2, size: 2, left: "60%", top: "25%" },
    { delay: 0.6, size: 3, left: "95%", top: "45%" },
    { delay: 1.4, size: 2, left: "40%", top: "85%" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Full background image - Fixed position for parallax effect */}
      <motion.div 
        className="fixed inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={heroBg}
          alt="Electric vehicle charging"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <motion.div 
          className="absolute inset-0 bg-[#041616]/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>


      {/* Particles */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </motion.div>

      {/* Top-right content - Description and Button */}
      <motion.div 
        className="absolute top-24 lg:top-32 right-8 lg:right-16 z-30 max-w-md"
        initial={{ opacity: 0, x: 50, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        <motion.p 
          className="mb-6 text-sm lg:text-base text-white/90 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          Drive Into Tomorrow with our next generation of electric vehicles. Zero emissions, infinite possibilities, and a charging network that keeps you moving.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <Button 
            className="bg-primary hover:bg-primary/90 hover:scale-105 text-white rounded-full px-6 py-6 text-base font-semibold shadow-lg hover:shadow-2xl transition-all"
            size="lg"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Large "ChargeForward" text at bottom - Dominic style */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden pb-12 lg:pb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-white font-semibold leading-none text-center select-none"
          style={{ 
            fontSize: 'clamp(2.5rem, 12vw, 10rem)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
            fontWeight: 650,
            letterSpacing: '-0.02em'
          }}
          initial={{ letterSpacing: '0.1em', opacity: 0 }}
          animate={{ letterSpacing: '-0.02em', opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          ChargeForward
        </motion.h1>
      </motion.div>

    </section>
  );
};

export default HeroSection;
