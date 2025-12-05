"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/team-hero.jpg";

import lead1 from "@/assets/lead1.png";
import lead2 from "@/assets/lead2.png";
import lead3 from "@/assets/lead3.png";
import lead4 from "@/assets/lead4.png";
import lead5 from "@/assets/lead5.png";

import adv1 from "@/assets/adv1.png";
import adv2 from "@/assets/adv2.png";
import adv3 from "@/assets/adv3.png";
import adv4 from "@/assets/adv4.png";
import adv5 from "@/assets/adv5.png";
import adv6 from "@/assets/adv6.png";

import { useOutsideClick } from "../hooks/use-outside-click";

const pageFade = {
hidden: { opacity: 0, y: 8 },
visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const cardAnim = {
hidden: { opacity: 0, y: 18 },
visible: { opacity: 1, y: 0, transition: { stiffness: 90, damping: 12 } },
};

/* ---------------- LEADERS GRID ---------------- */
function FocusCardsDemoInline() {
const cards = [
{
title: "Satish Shenoy",
position: "Managing Director",
src: lead5,
desc: [
"With a rich experience of over three decades in consulting and financial services encompassing business consulting, investment banking,capital markets, M&A and financial distribution, Satish founded SIRI Electromotive to realize his dream of contributing to a greener planet through meaningful participation in the setting up of EV Charging infrastructure in India.",
"Satish has depth of varied transaction experience in multiple sectors including, inter- alia, Technology, Infrastructure, Real Estate, Healthcare, Manufacturing and Financial Services. His experiential and intuitive understanding of India’s legal, regulatory and financial landscape provides a strong risk management orientation for SIRI. He is a proven leader, having successfully built and led strong business teams from large institutions to entrepreneurial organizations.",
"He has previously worked at Kotak Mahindra and IL&FS in senior capacities. A NIT,Surathkal alumnus, he also has a PGDM from IIM Ahmedabad."
].join("\n\n"),
},
{
title: "Sanath Kumar",
position: "Executive Director & CTO",
src: lead3,
desc: [
"Sanath brings over twenty years of hands-on expertise across multiple domains including Research, Product Design & Development, Engineering, Simulation, Testing, Certification, Manufacturing, and Intellectual Property creation. A passionate innovator, his professional journey spans the entire R&D product lifecycle and New Product Introductions (NPI) in sectors such as AC & DC EV Chargers, Power & Energy, Lighting, Metering, Solar, Real-time Location Systems (RTLS), Industrial IoT, and Automation & Control.",
"He has spearheaded the development of comprehensive IoT solutions for diverse applications including Industrial Plant Safety, Predictive Maintenance, Anomaly Detection of Industrial Assets, Smart Street Lighting, Smart Metering (AMR/AMI), Wireless Sensor Networks (WSN) for IoT, among others. With a track record of co-inventing four patents, Sanath is committed to driving continuing innovation in SIRI. Sanath has a Bachelor of Engineering (B.E) in Electronics and Communication (E&C) from VisvesvarayaTechnological University (VTU) at, Nitte, Karnataka, and a PG Diploma in Embedded Systems Design & Development from UTL Technologies Ltd, Bangalore, Karnataka."
].join("\n\n"),
},
{
title: "Arun Moorthy",
position: "CEO",
src: lead4,
desc: [
"Arun comes with 25 years of experience spanning multiple sectors and geographies. His career spans sales, strategy, and scaling hi-technology businesses across new applications, sectors, and geographies.",
"As Regional Director for India and Africa at Aceleron Energy UK, he conceptualized and executed the monetization strategy for a sustainable lithium battery assembly process - including an IP asset acquisition with a tier-1 auto-component player in India and the establishment of an assembly unit in Kenya. At Red Lion Controls (formerly part of Spectris Technologies, a GBP 2 billion control and communication conglomerate), he scaled a sub-$1M business into a growing and profitable operation across India and the Middle East. He also established Echelon Corporation’s operations in India and managed its business in Southeast Asia. Earlier, he worked with Rockwell Automation, the world’s largest industrial automation company and Toshniwal Bopp & Reuther, a renowned name in industrial measurement systems.",
"Arun has a strong background in industrial automation, energy, and energy storage, and holds a degree in Electronics & Instrumentation from the National Institute of Technology, Rourkela, and an MBA from Mumbai University."
].join("\n\n"),
},
{
title: "Prakash Shenoy",
position: "Non-Executive Director",
src: lead2,
desc: [
"Prakash brings over 36 years of leadership experience in building and scaling offshore R&D and software development centers.",
"At Robert Bosch GmbH, he founded and grew multi‑location engineering teams in India and Mexico, most notably an 800+‑strong software campus in Mexico built from the ground up by setting a clear vision and executing effectively. Leveraging his deep collaboration with German MNCs, he has implemented advanced processes and methodologies that consistently deliver world‑class software products.",
"A proven mentor and transformation leader, Prakash excels at developing leadership talent and guiding large‑scale change initiatives to success.\n\nHe holds an engineering degree from NITK Suratkal."
].join("\n\n"),
},
{
title: "Sanjay Bhat",
position: "Director - Commercial",
src: lead1,
desc: [
"Sanjay brings with him over 30 years of varied local and international experience. From Process Control Automation design and engineering at Siemens India, Maintenance and Maintenance Management of Paper Machines and Pulp Mill in Indonesia and New Zealand, Engineering Consultancy services for Pulp & Paper clients in New Zealand to finally owning and managing a business in Indonesia, Sanjay has acquired a broad skill set that spans the spectrum from Technology to Sales, Marketing and Business Development.",
"Sanjay has a B.E. (Electrical) from NIT-K and a M.S.E.E. from Michigan Technological University."
].join("\n\n"),
},
];

  const [active, setActive] = useState<typeof cards[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  if (useOutsideClick) useOutsideClick(ref, () => setActive(null));

  const firstRow = cards.slice(0, 3);
  const secondRow = cards.slice(3);

  const renderCard = (c: typeof cards[0], originalIndex: number) => (
    <div
      key={originalIndex}
      onClick={() => setActive(c)}
      onMouseEnter={() => setHoveredIndex(originalIndex)}
      onMouseLeave={() => setHoveredIndex(null)}
      className={`relative bg-white border border-neutral-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-64 cursor-pointer ${
        hoveredIndex !== null && hoveredIndex !== originalIndex ? 'blur-sm opacity-50' : ''
      }`}
    >
      <div className="relative flex items-center justify-center bg-white overflow-hidden h-80">
        <img
          src={c.src}
          alt={c.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="font-medium text-lg">{c.title}</h3>
        <p className="text-neutral-600 text-sm">{c.position}</p>
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 bg-black/20 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] px-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              ref={ref} 
              className="w-full max-w-3xl bg-gradient-to-br from-emerald-50/95 via-teal-50/95 to-green-50/95 backdrop-blur-2xl rounded-3xl shadow-[0_25px_100px_rgba(16,185,129,0.3)] border-2 border-emerald-200/60 p-8"
            >
              <div className="mb-6 text-center border-b-2 border-emerald-200/50 pb-4">
                <h3 className="font-black text-2xl tracking-wide bg-gradient-to-r from-emerald-900 via-teal-700 to-emerald-900 bg-clip-text text-transparent drop-shadow-sm mb-1">{active.title}</h3>
                <p className="text-base text-teal-700 font-semibold">{active.position}</p>
              </div>
              <div className="text-sm leading-relaxed text-gray-800 space-y-3">
                {active.desc.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="relative flex flex-col items-center gap-10">
        <div className="flex justify-center gap-10">
          {firstRow.map((card, idx) => renderCard(card, idx))}
        </div>
        <div className="flex justify-center gap-10">
          {secondRow.map((card, idx) => renderCard(card, idx + 3))}
        </div>
      </div>
    </>
  );
}

/* ---------------- ADVISORS SECTION ---------------- */
type CardType = {
description: string;
title: string;
src: string;
ctaText: string;
ctaLink: string;
content: string | (() => React.ReactNode);
};

const advisorCards: CardType[] = [
{ description: "Advisor — Strategy", title: "Rakesh Srivastava", src: adv5, ctaText: "Profile", ctaLink: "#", content: () => <p>Eknath brings a strong blend of academic grounding and real-world experience, offering insightful guidance to our team. After completing his Chemical Engineering degree from the prestigious Karnataka Regional Engineering College (NIT-K), he embarked on a fulfilling career journey. Starting in his family run automotive dealership, he transitioned to the booming software industry in Bangalore. There, he co-founded a successful software company focused on the automotive and finance sectors, and later led key automotive projects at IBM, working with global giants like Toyota, Ford and Hyundai. Currently, Eknath spearheads Access Matrix Technologies, a leader in developing innovative SaaS solutions for the automotive industry, including those specifically designed for electric vehicles.
His deep industry knowledge, combined with his educational background in engineering, and proven track record in business development and strategy make him a valuable asset to our team.</p> },
{ description: "Advisor — Operations", title: "Raghu Kumar", src: adv6, ctaText: "Profile", ctaLink: "#", content: () => <p>With over two decades of experience, Raghu is a seasoned expert in the field, spearheading innovation in zero-emission mobility and energy systems. He has a proven track record of managing international programs for Generators, EVs, EVSE, and FCEVs. As a Principal Engineer at DEKRA Certification Inc., he leads the Vehicle Innovation Grid Lab (ViGIL) and the ADAS Data Collection Program. His research, focusing on advanced EV and EVSE testing, actively supports California’s clean transportation initiatives. Raghu’s deep understanding of interoperability standards has been instrumental in shaping global EV charging standards through his work with CharIN and OCA. Previously, at Nikola Motor Corporation, he directed codes and standards for Fuel Cell Electric Vehicle (FCEV) and Battery Electric Vehicle (BEV) programs, influencing policy in the U.S. and EU.</p> },
{ description: "Advisor — Technology", title: "Eknath Pai Kasturi", src: adv1, ctaText: "Profile", ctaLink: "#", content: () => <p>Eknath brings a strong blend of academic grounding and real-world experience, offering insightful guidance to our team. After completing his Chemical Engineering degree from the prestigious Karnataka Regional Engineering College (NIT-K), he embarked on a fulfilling career journey. Starting in his family run automotive dealership, he transitioned to the booming software industry in Bangalore. There, he co-founded a successful software company focused on the automotive and finance sectors, and later led key automotive projects at IBM, working with global giants like Toyota, Ford and Hyundai. Currently, Eknath spearheads Access Matrix Technologies, a leader in developing innovative SaaS solutions for the automotive industry, including those specifically designed for electric vehicles.

His deep industry knowledge, combined with his educational background in engineering, and proven track record in business development and strategy make him a valuable asset to our team.</p> },
{ description: "Advisor — Finance", title: "Vijay Ramchandran", src: adv4, ctaText: "Profile", ctaLink: "#", content: () => <p>Vijay Ramchandran, a seasoned professional with over three decades of experience in marketing, branding, and digital innovation, holds a Post Graduate Diploma in Management from IIM Ahmedabad and a Bachelor of Technology in Electrical Engineering from IIT Madras. With his stewardship at FindChill LLP driving digital healthcare solutions and his governance contributions at Mahindra ManULife Mutual, Vijay brings invaluable expertise to our team. With notable achievements at IDFC Bank Limited and CITIBANK, he has led impactful marketing initiatives and digital transformations, significantly increasing brand awareness and driving successful digital acquisition campaigns. His track record of successful marketing initiatives and digital transformations, combined with his strategic insight, make him an invaluable asset to our team.</p> },
{ description: "Advisor — Marketing", title: "Ganesh Sonawane", src: adv3, ctaText: "Profile", ctaLink: "#", content: () => <p>Ganesh brings a wealth of experience and a passion for innovation that solves real-world problems. During his college years, Ganesh thrived on building creative projects like RC aircrafts and robots. However, his true calling emerged when he focused on projects with a social impact, such as developing innovative wheelchairs that won the Aavishkar contest in 2011. This experience ignited his commitment to purpose-driven innovation, a quality that reflects in the brand Frido, from the stable of Arcatron Mobility, a pioneer in assisted living products in India.

Ganesh has worked in R&D at Bajaj Auto Ltd., leveraging his engineering degree from the NIT, Calicut. His technical expertise and dedication to impactful solutions make him a valuable asset to our team.</p> },
{ description: "Advisor — Legal", title: "Anwar Master", src: adv2, ctaText: "Profile", ctaLink: "#", content: () => <p>Anwar Master is a highly experienced executive with proven expertise in promoting clean energy storage systems for automation and electric vehicles. Leveraging his extensive background in the Automotive OEM industry and automated systems, Anwar excels at developing and executing strategic plans to drive market penetration of these critical technologies. He has a proven track record of success in complex environments, fostering strong teams and contributing to the development of new products and technologies that enter emerging markets. Anwar's core competencies include Top Operations Strategist, Product Development, Strategic Planning & Execution, with a specific focus on the Automotive OEM industry, Automated Vehicles, and battery storage systems.

Anwar has completed his Postgraduate Diploma in Sales and Marketing and, Master of Science Degree in Physics along with Major in Applied Electronics.</p> },
];

/* ---------------- MAIN PAGE ---------------- */
export default function TeamPage() {
return ( <div className="w-full min-h-screen"> <Navbar />


  {/* HERO */}
  <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
    <img src={heroBanner} alt="Team banner" className="fixed inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/35 flex items-end justify-center pb-12 md:pb-16">
      <div className="text-center px-6">
        <h1 className="text-white font-semibold leading-none select-none" style={{ 
          fontSize: 'clamp(2rem, 8vw, 6rem)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
          fontWeight: 650,
          letterSpacing: '-0.02em'
        }}>OUR TEAM</h1>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto" style={{ 
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
        }}>Leadership and advisors powering our growth.</p>
      </div>
    </div>
  </section>

  <div className="relative z-10 bg-background">
    <motion.main initial="hidden" animate="visible" variants={pageFade} className="px-6 md:px-16 py-16">
      {/* LEADERS */}
      <section className="max-w-[1200px] mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-1 text-center">Leaders</h2>
        <p className="text-neutral-600 mb-8 text-center">Our core leadership team.</p>
        <motion.div variants={cardAnim}>
          <FocusCardsDemoInline />
        </motion.div>
      </section>

      {/* ADVISORS */}
      <section className="max-w-[1000px] mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-1 text-center">Advisors</h2>
        <p className="text-neutral-600 mb-8 text-center">Our trusted advisors.</p>
        <ExpandableCardDemo cards={advisorCards} />
      </section>
    </motion.main>
    <Footer />
  </div>
</div>


);
}

/* ---------------- EXPANDABLE CARD ---------------- */
function ExpandableCardDemo({ cards }: { cards: CardType[] }) {
const [active, setActive] = useState<CardType | boolean | null>(null);
const id = useId();
const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
function onKeyDown(event: KeyboardEvent) {
if (event.key === "Escape") setActive(false);
}
document.body.style.overflow = active ? "hidden" : "auto";
window.addEventListener("keydown", onKeyDown);
return () => window.removeEventListener("keydown", onKeyDown);
}, [active]);

if (useOutsideClick) useOutsideClick(ref, () => setActive(null));

// Split into 2 rows of 3 advisors
const firstRow = cards.slice(0, 3);
const secondRow = cards.slice(3);

return (
<> <AnimatePresence>
{active && typeof active === "object" && (
<motion.div className="fixed inset-0 bg-black/20 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
)} </AnimatePresence>


  <AnimatePresence>
    {active && typeof active === "object" ? (
      <div className="fixed inset-0 grid place-items-center z-[100] px-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          ref={ref} 
          className="w-full max-w-3xl bg-gradient-to-br from-emerald-50/95 via-teal-50/95 to-green-50/95 backdrop-blur-2xl rounded-3xl shadow-[0_25px_100px_rgba(16,185,129,0.3)] border-2 border-emerald-200/60 p-8"
        >
          <div className="mb-6 text-center border-b-2 border-emerald-200/50 pb-4">
            <h3 className="font-black text-2xl tracking-wide bg-gradient-to-r from-emerald-900 via-teal-700 to-emerald-900 bg-clip-text text-transparent drop-shadow-sm">{active.title}</h3>
          </div>

          <div className="text-sm leading-relaxed text-gray-800 space-y-3">
            {typeof active.content === "function" ? active.content() : active.content}
          </div>
        </motion.div>
      </div>
    ) : null}
  </AnimatePresence>

  {/* Advisor cards in 2 rows */}
  <div className="flex flex-col gap-4">
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {firstRow.map((card) => (
        <AdvisorCard key={card.title} card={card} setActive={setActive} id={id} />
      ))}
    </ul>
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {secondRow.map((card) => (
        <AdvisorCard key={card.title} card={card} setActive={setActive} id={id} />
      ))}
    </ul>
  </div>
</>


);
}
function AdvisorCard({ card, setActive, id }: { card: CardType; setActive: any; id: string }) {
return (
<motion.li
layoutId={`card-${card.title}-${id}`}
onClick={() => setActive(card)}
className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer w-full transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-neutral-200"
> <div className="flex flex-col md:flex-row items-center gap-4 p-3">
<motion.div layoutId={`image-${card.title}-${id}`} className="flex-shrink-0"> <img src={card.src} className="w-48 h-48 object-cover rounded-lg" />
</motion.div> <div className="flex flex-col justify-center text-center md:text-left">
<motion.h3 className="font-medium text-sm">{card.title}</motion.h3> </div> </div>
</motion.li>
);
}


function CloseIcon() {
return ( <svg width="18" height="18" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 6L6 18" /> <path d="M6 6l12 12" /> </svg>
);
}
