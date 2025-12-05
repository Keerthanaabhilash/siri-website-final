import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import serviceImg from "@/assets/service.jpg"; // imported image

// CVA for BlogPostCard
const cardVariants = cva(
  "group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-md",
  {
    variants: {
      variant: {
        default: "p-6",
        featured: "flex-col md:flex-row",
      },
    },
    defaultVariants: {
      variant: "default",
    }
  }
);

interface BlogPostCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  tag: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  href: string;
  readMoreText?: string;
}

const BlogPostCard = ({
  className,
  variant,
  tag,
  date,
  title,
  description,
  imageUrl,
  href,
  readMoreText = "Read More",
  ...props
}: BlogPostCardProps) => {
  const cardHover = {
    hover: { y: -5, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  const content = (
    <>
      {variant === "featured" && imageUrl && (
        <div className="relative w-full overflow-hidden md:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      )} 
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div>
          <div className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{tag}</span>
            <span>{date}</span>
          </div>
          {/* BIGGER & BOLDER TITLE */}
          <h3 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-foreground tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
              {title}
            </span>
          </h3>
          {/* EXPANDED PARAGRAPH - 3-4 lines */}
          <p className="text-base leading-relaxed text-muted-foreground mb-6 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      className={cn(cardVariants({ variant, className }))}
      variants={cardHover}
      whileHover="hover"
      {...props}
    >
      <a href={href} className="absolute inset-0 z-10" aria-label={`Read more about ${title}`}>
        <span className="sr-only">Read More</span>
      </a>
      <div className="relative z-0 flex h-full w-full flex-col md:flex-row">{content}</div>
    </motion.div>
  );
};

// Services Data - EXPANDED DESCRIPTION
const services = [
  {
    title: "How We Make The Difference",
    description: "We understand that every company’s journey towards electrification is unique. Therefore, we tailor our solutions to meet the specific needs of each industry vertical. Our deep industry knowledge combined with cutting-edge technology ensures customized EV charging infrastructure that perfectly aligns with your business objectives and growth strategy. Beyond simply deploying chargers, we work closely with organizations to assess energy demand, optimize load distribution, and design scalable architectures that grow with operational needs. Whether you operate in mobility, manufacturing, logistics, real estate, or commercial services, our solutions are engineered to maximize uptime, reduce total cost of ownership, and deliver long-term reliability.", // your long text
    imageUrl: serviceImg,
   
    href: "#",  // ADD THIS
  },
  {
    title: "Simplifying the Transition",
    description:
      "We understand that entering the business of charging can be daunting. That is why we offer expert guidance and implement custom built solutions, making the journey towards electrification smooth and efficient.",
    tag: "Guidance",
    date: "2025-11-30",
    href: "#",
  },
  {
    title: "Intelligent Deployment & Scaling",
    description:
      "We not only install chargers; we design and implement the entire strategic charging infrastructure that can adapt and grow as your needs evolve. We help you deploy rapidly and scale intelligently.",
    tag: "Deployment",
    date: "2025-11-30",
    href: "#",
  },
  {
    title: "Maximizing Value",
    description:
      "We are partners in maximizing the value of your energy assets. Our solutions extend the life of your batteries, optimize energy usage, and minimize downtime, ensuring you get the most out of every watt.",
    tag: "Value",
    date: "2025-11-30",
    href: "#",
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const smallBoxHover = {
    hover: { y: -3, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Featured first service (slightly taller for bigger text) */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <BlogPostCard
            className="h-[480px]" // slightly increased height to accommodate bigger text
            variant="featured"
            tag={services[0].tag}
            date={services[0].date}
            title={services[0].title}
            description={services[0].description}
            href={services[0].href}
            imageUrl={services[0].imageUrl}
          />
        </div>

        {/* Remaining 3 services, smaller boxes with animations & green line */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(1).map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 group"
              variants={smallBoxHover}
              whileHover="hover"
              initial={{ opacity: 0, translateY: 20 }}
              animate={isVisible ? { opacity: 1, translateY: 0, transition: { delay: index * 0.1 + 0.2 } } : {}}
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                <span className="bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                  {service.title}
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
