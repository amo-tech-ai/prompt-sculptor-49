import { useEffect, useState } from 'react';
import { Badge, Building, Clock, DollarSign, Star, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    label: "Projects Delivered",
    value: 47,
    suffix: "+",
    icon: Badge,
    description: "Successful AI applications launched"
  },
  {
    label: "On-Time Delivery",
    value: 94,
    suffix: "%",
    icon: Clock,
    description: "Projects delivered within timeline"
  },
  {
    label: "Failed Projects",
    value: 0,
    suffix: "",
    icon: Building,
    description: "Zero project failures to date"
  },
  {
    label: "Average ROI",
    value: 293,
    suffix: "%",
    icon: TrendingUp,
    description: "Return on investment achieved"
  },
  {
    label: "Client Satisfaction",
    value: 4.9,
    suffix: "/5",
    icon: Star,
    description: "Average client rating"
  },
  {
    label: "Total Value Created",
    value: 12.4,
    suffix: "M",
    prefix: "$",
    icon: DollarSign,
    description: "In business value generated"
  }
];

const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}</span>;
};

export const PortfolioStatistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio-stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="portfolio-stats" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Track <span className="text-orange">Record</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Numbers that speak to our commitment to excellence and results
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-background rounded-2xl p-8 shadow-amo-card hover:shadow-amo-hover transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange/10 rounded-xl mb-4 group-hover:bg-orange/20 transition-colors duration-300">
                <stat.icon className="h-6 w-6 text-orange" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.prefix}
                  {isVisible ? (
                    <AnimatedCounter value={stat.value} />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-orange/10 rounded-full px-6 py-3">
            <Users className="h-5 w-5 text-orange" />
            <span className="text-sm font-medium text-foreground">
              Join 500+ companies already scaling with AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};