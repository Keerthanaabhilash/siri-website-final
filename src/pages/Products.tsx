import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/products-hero.jpg";

import p11 from "@/assets/pro1.png";
import p25 from "@/assets/pro4.png";
import p30 from "@/assets/pro3.png";
import p50 from "@/assets/pro2.png";
import p60 from "@/assets/pro5.png";
import p100 from "@/assets/pro6.png";
import p120 from "@/assets/pro7.png";
import p240 from "@/assets/pro8.png";
import p360 from "@/assets/pro9.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export default function Products() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      {/* Banner Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={heroBanner}
          className="fixed inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/60 flex items-end justify-center pb-12 md:pb-16">
          <motion.h1 
            className="text-white font-semibold leading-none text-center select-none"
            style={{ 
              fontSize: 'clamp(2rem, 8vw, 6rem)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: 650,
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, y: 20, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '-0.02em' }}
            transition={{ duration: 0.8 }}
          >
            DC Fast Charger Lineup
          </motion.h1>
        </div>
      </section>

      <div className="relative z-10 bg-background">
        <div className="px-6 md:px-12 lg:px-20 py-24 lg:py-32">
        
        {/* SECTION HEADER */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 bg-gradient-to-r from-black via-primary to-emerald-600 bg-clip-text text-transparent" style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
            fontWeight: 650,
            letterSpacing: '-0.02em'
          }}>
            DC CHARGERS
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From compact 11kW solutions to ultra-fast 360kW charging systems, our DC charger lineup is engineered to deliver reliable, high-performance charging for every application.
          </p>
        </motion.div>

        {/* MAIN GRID - Perfectly aligned premium cards */}
        <motion.section
          variants={containerVariants}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 lg:gap-10 auto-rows-fr"
        >
          {/* === PERFECTLY ALIGNED CARDS === */}
          
          {/* SLOT 1 - 11kW */}
          <motion.div 
            variants={itemVariants} 
            className="group"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="relative rounded-3xl p-8 h-full transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-900 via-primary/80 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight max-w-[55%]" style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: 650,
                  letterSpacing: '-0.02em'
                }}>
                  11 kW DC
                </h2>
                <div className="space-y-2 text-sm lg:text-base text-gray-600 font-medium mb-8 max-w-[55%] leading-relaxed">
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Guns: 1</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Max Current: 36A</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Voltage: 100–1000V</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Connector: CCS1 / CCS2</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Use Case: 2W/3W & compact EVs</div>
                </div>
              </div>
              <motion.img 
                src={p11} 
                className="absolute bottom-0 right-0 w-64 h-64 lg:w-72 lg:h-72 object-contain group-hover:scale-105 transition-transform duration-500 z-10"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                variants={imageVariants}
              />
              <div className="absolute bottom-0 right-8 w-32 h-6 bg-black/20 blur-2xl rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
            </div>
          </motion.div>

          {/* SLOT 2 - 50kW TALL HERO */}
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-1 md:row-span-3 group"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="relative rounded-3xl p-8 lg:p-12 h-full transition-all duration-700 overflow-hidden">
              <div className="relative z-20">
                <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-900 via-primary/80 to-gray-800 bg-clip-text text-transparent mb-8 leading-tight max-w-[60%]" style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: 650,
                  letterSpacing: '-0.02em'
                }}>
                  50 kW DC Fast
                </h2>
                <div className="space-y-2 text-sm lg:text-base text-gray-600 font-medium mb-12 max-w-[60%] leading-relaxed">
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Guns: 1</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Max Current: 150A</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Form: Floor mounted</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Best For: Fast EV stations & fleets</div>
                </div>
              </div>
              <motion.img 
                src={p50} 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[800px] lg:w-[700px] lg:h-[950px] object-contain object-bottom group-hover:scale-105 transition-transform duration-700 z-10"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                variants={imageVariants}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-8 bg-black/20 blur-2xl rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl" />
            </div>
          </motion.div>

          {/* SLOT 3 - 25kW */}
          <motion.div 
            variants={itemVariants} 
            className="group"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="relative rounded-3xl p-8 h-full transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-900 via-primary/80 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight max-w-[55%]" style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: 650,
                  letterSpacing: '-0.02em'
                }}>
                  25 kW DC
                </h2>
                <div className="space-y-2 text-sm lg:text-base text-gray-600 font-medium mb-8 max-w-[55%] leading-relaxed">
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Guns: 1</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Max Current: 80A</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Connector: CCS1/2 (CHAdeMO optional)</div>
                </div>
              </div>
              <motion.img 
                src={p25} 
                className="absolute bottom-4 right-0 w-60 h-60 lg:w-72 lg:h-72 object-contain group-hover:scale-105 transition-transform duration-500 z-10"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                variants={imageVariants}
              />
              <div className="absolute bottom-4 right-8 w-32 h-6 bg-black/20 blur-2xl rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
            </div>
          </motion.div>

          {/* SLOT 4 - 30kW */}
          <motion.div 
            variants={itemVariants} 
            className="group"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="relative rounded-3xl p-8 h-full transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-900 via-primary/80 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight max-w-[55%]" style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: 650,
                  letterSpacing: '-0.02em'
                }}>
                  30 kW DC
                </h2>
                <div className="space-y-2 text-sm lg:text-base text-gray-600 font-medium mb-8 max-w-[55%] leading-relaxed">
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Guns: 1</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Max Current: 100A</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">For: Commercial, malls, pit-stops</div>
                </div>
              </div>
              <motion.img 
                src={p30} 
                className="absolute bottom-0 right-0 w-64 h-64 lg:w-72 lg:h-72 object-contain group-hover:scale-105 transition-transform duration-500 z-10"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                variants={imageVariants}
              />
              <div className="absolute bottom-0 right-8 w-32 h-6 bg-black/20 blur-2xl rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
            </div>
          </motion.div>

          {/* SLOT 5 - 240kW TALL */}
          <motion.div 
            variants={itemVariants} 
            className="md:row-span-2 group"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="relative rounded-3xl p-8 lg:p-12 h-full transition-all duration-700 overflow-hidden">
              <div className="relative z-20">
                <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-900 via-primary/80 to-gray-800 bg-clip-text text-transparent mb-8 leading-tight max-w-[55%]" style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: 650,
                  letterSpacing: '-0.02em'
                }}>
                  240 kW Ultra-Fast
                </h2>
                <div className="space-y-2 text-sm lg:text-base text-gray-600 font-medium mb-12 max-w-[55%] leading-relaxed">
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Guns: 2 or 4</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Max Current: 300A</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Cooling: Liquid cooling</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">For: Highways & bus depots</div>
                </div>
              </div>
              <motion.img 
                src={p240} 
                className="absolute bottom-0 left-0 w-[280px] h-[400px] lg:w-[340px] lg:h-[480px] object-cover object-bottom group-hover:scale-105 transition-transform duration-700 z-10"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                variants={imageVariants}
              />
              <div className="absolute bottom-0 left-16 w-40 h-6 bg-black/20 blur-2xl rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl" />
            </div>
          </motion.div>

          {/* SLOT 6 - 360kW */}
          <motion.div 
            variants={itemVariants} 
            className="group"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="relative rounded-3xl p-8 h-full transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-900 via-primary/80 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight max-w-[55%]" style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: 650,
                  letterSpacing: '-0.02em'
                }}>
                  360 kW Ultra-Fast
                </h2>
                <div className="space-y-2 text-sm lg:text-base text-gray-600 font-medium mb-8 max-w-[55%] leading-relaxed">
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Guns: 2 or 4</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Max Current: 400A</div>
                  <div className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">Simultaneous high-power charging</div>
                </div>
              </div>
              <motion.img 
                src={p360} 
                className="absolute bottom-0 right-0 w-64 h-64 lg:w-72 lg:h-72 object-contain group-hover:scale-105 transition-transform duration-500 z-10"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                variants={imageVariants}
              />
              <div className="absolute bottom-0 right-8 w-32 h-6 bg-black/20 blur-2xl rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
            </div>
          </motion.div>
        </motion.section>

        {/* EXTRA PRODUCTS - Consistent premium style */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-24 lg:mt-32"
          variants={containerVariants}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { img: p60, title: "60 kW DC", specs: ["Guns: 1 or 2", "Max Current: 200A", "Dynamic load sharing", "CCS / CHAdeMO / GB/T"] },
            { img: p100, title: "100 kW DC Fast", specs: ["Guns: 1 or 2", "Max Current: 250A", "Cooling: Forced / liquid", "Ideal for highways & fleets"] },
            { img: p120, title: "120 kW DC", specs: ["Guns: 1 or 2", "Max Current: 250A", "PLC (ISO 15118) Enabled"] }
          ].map((product, index) => (
            <motion.div 
              key={product.title} 
              className="group"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
      
              <div className="relative rounded-3xl p-8 h-[420px] transition-all duration-500 overflow-hidden">
                <motion.img 
                  src={product.img} 
                  className={`absolute group-hover:scale-105 transition-transform duration-500 z-0 ${
                    product.title === "100 kW DC Fast" 
                      ? "bottom-0 right-0 w-46 h-46 lg:w-56 lg:h-56 object-cover object-bottom" 
                      : product.title === "60 kW DC"
                      ? "bottom-0 right-0 w-56 h-56 lg:w-64 lg:h-64 object-contain"
                      : "bottom-0 right-4 w-80 h-80 lg:w-96 lg:h-96 object-contain"
                  }`}
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25))' }}
                  variants={imageVariants}
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 via-primary/80 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight max-w-[55%]" style={{ 
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                    fontWeight: 650,
                    letterSpacing: '-0.02em'
                  }}>
                    {product.title}
                  </h2>
                  <div className="space-y-2 text-sm lg:text-base text-gray-600 font-medium mb-12 max-w-[55%] leading-relaxed">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="bg-white/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/50 shadow-md hover:shadow-lg transition-shadow duration-300">{spec}</div>
                    ))}
                  </div>
                </div>
                <div className={`absolute bg-black/20 blur-2xl rounded-full w-40 h-6 ${
                  product.title === "100 kW DC Fast" 
                    ? "bottom-0 right-8" 
                    : product.title === "60 kW DC"
                    ? "bottom-0 right-8"
                    : "bottom-0 right-12"
                }`} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
