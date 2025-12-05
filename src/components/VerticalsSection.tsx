import { useEffect, useRef, useState } from "react";
import { Car, Building2, Warehouse, BatteryCharging } from "lucide-react";

const verticals = [
  {
    icon: Car,
    title: "EV Manufacturers",
    description: "Pushing the boundaries of performance",
  },
  {
    icon: Building2,
    title: "Fleet Operators",
    description: "Seeking operational excellence",
  },
  {
    icon: Warehouse,
    title: "Property Owners",
    description: "Aiming for energy independence",
  },
  {
    icon: BatteryCharging,
    title: "Energy Storage",
    description: "Maximizing battery value",
  },
];

const VerticalsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            <span className="text-foreground">Industry </span>
            <span className="text-gradient">Verticals</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you are an EV manufacturer pushing the boundaries of
            performance, a forward-thinking fleet operator seeking operational
            excellence, a sustainability-focused property aiming for energy
            independence, or an energy storage provider maximizing the value of
            your batteries, we have the expertise and technology to help you
            achieve your goals.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vertical, index) => (
            <div
              key={vertical.title}
              className={`group relative p-8 rounded-2xl bg-background border border-border overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-primary/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <vertical.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold font-display text-foreground mb-2">
                  {vertical.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {vertical.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalsSection;
