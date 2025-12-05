"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import app1 from "@/assets/app1.jpg";
import app2 from "@/assets/app2.jpg";
import app3 from "@/assets/app3.jpg";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

const testimonialsData: Testimonial[] = [
  {
    src: app1,
    name: "",
    designation: "EV Industry",
    quote:
      "Our charger hardware, firmware, and AI-powered software work together in perfect harmony, delivering unmatched performance, optimized efficiency, and unparalleled reliability to our clients.",
  },
  {
    src: app2,
    name: "",
    designation: "Energy Solutions",
    quote:
      "And, with our technology-driven products, services, and solutions, we offer clients great flexibility depending on need and context.",
  },
  {
    src: app3,
    name: "",
    designation: "Automotive",
    quote:
      "We understand that every company's journey towards electrification is unique. Therefore, we tailor our solutions to meet the specific needs of clients from each industry vertical.",
  },
];

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + ((maxGap - minGap) * (width - minWidth)) / (maxWidth - minWidth);
}

const OfferingsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(600);
  const [titleHovered, setTitleHovered] = useState(false); // New hover state
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const testimonialsLength = testimonialsData.length;
  const activeTestimonial = testimonialsData[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    }, 5000);
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [testimonialsLength]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive)
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    if (isLeft)
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    if (isRight)
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const quoteVariants = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };

  return (
    <section id="offerings" ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Top wavy divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" className="fill-amber-100/70" style={{ filter: 'blur(0.5px)' }}></path>
          <path d="M0,96L60,90.7C120,85,240,75,360,69.3C480,64,600,64,720,69.3C840,75,960,85,1080,85.3C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" className="fill-yellow-50/80"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {/* Hoverable Title with 3D Effect */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-12 text-center group cursor-pointer select-none"
            onMouseEnter={() => setTitleHovered(true)}
            onMouseLeave={() => setTitleHovered(false)}
            whileHover={{ y: -8, rotateX: 5, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className="text-foreground inline-block group-hover:text-accent transition-colors duration-300 mr-3">
              Our
            </span>
            <motion.span 
              className="text-gradient inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              animate={titleHovered ? { scale: 1.1, rotateY: 10 } : { scale: 1, rotateY: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Approach
            </motion.span>
          </motion.h2>

          <div className="testimonial-container mx-auto max-w-5xl">
            {/* Updated grid: LARGER image left, text right */}
            <div className="testimonial-grid flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              {/* LARGER Image Container - Increased from w-80 h-64 to w-[28rem] h-[20rem] */}
              <div className="image-container relative w-[28rem] h-[20rem] md:w-[32rem] md:h-[24rem] perspective-1000 flex-shrink-0 mx-auto md:mx-0" ref={imageContainerRef}>
                {testimonialsData.map((t, i) => (
                  <motion.img 
                    key={t.src} 
                    src={t.src} 
                    alt={t.name} 
                    style={getImageStyle(i)} 
                    className="absolute w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/50" 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>

              <div className="testimonial-content flex flex-col justify-between mt-8 md:mt-0 md:flex-1">
                <AnimatePresence mode="wait">
                  <motion.div key={activeIndex} variants={quoteVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <h3 className="name font-bold mb-1 text-2xl">{activeTestimonial.name}</h3>
                    <p className="designation mb-4 text-gray-500">{activeTestimonial.designation}</p>
                    <motion.p className="quote text-gray-700 leading-relaxed text-lg">
                      {activeTestimonial.quote.split(" ").map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                          transition={{ duration: 0.22, ease: "easeInOut", delay: 0.025 * i }}
                          style={{ display: "inline-block" }}
                        >
                          {word}&nbsp;
                        </motion.span>
                      ))}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>

                <div className="arrow-buttons flex gap-4 mt-6 justify-center md:justify-start">
                  <motion.button
                    onClick={handlePrev}
                    onMouseEnter={() => setHoverPrev(true)}
                    onMouseLeave={() => setHoverPrev(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white hover:bg-blue-500 shadow-lg transition-all duration-200"
                  >
                    <FaArrowLeft size={18} />
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    onMouseEnter={() => setHoverNext(true)}
                    onMouseLeave={() => setHoverNext(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-black text-white hover:bg-blue-500 shadow-lg transition-all duration-200"
                  >
                    <FaArrowRight size={18} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
