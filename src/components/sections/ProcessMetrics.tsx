import { useEffect, useRef, useState } from 'react';
import { Target, Clock, TrendingUp, Award } from 'lucide-react';

export const ProcessMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    weeks: 0,
    onTime: 0,
    roi: 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const finalValues = {
    projects: 47,
    weeks: 8.2,
    onTime: 94,
    roi: 293
  };

  const metrics = [
    {
      id: 'projects',
      label: 'Projects Delivered',
      value: counts.projects,
      suffix: '',
      icon: Target,
      color: 'text-foreground',
      bgColor: 'bg-muted',
      description: 'Successful AI applications launched'
    },
    {
      id: 'weeks',
      label: 'Average Delivery Time',
      value: counts.weeks,
      suffix: ' weeks',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Faster than industry standard'
    },
    {
      id: 'onTime',
      label: 'On-Time Delivery Rate',
      value: counts.onTime,
      suffix: '%',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Projects delivered as promised'
    },
    {
      id: 'roi',
      label: 'Average Client ROI',
      value: counts.roi,
      suffix: '%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Return on investment achieved'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        projects: Math.floor(finalValues.projects * progress),
        weeks: Number((finalValues.weeks * progress).toFixed(1)),
        onTime: Math.floor(finalValues.onTime * progress),
        roi: Math.floor(finalValues.roi * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalValues);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Proven <span className="text-orange-500">Track Record</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers don't lie. Our 8-week process consistently delivers results that exceed expectations.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => {
            const IconComponent = metric.icon;
            
            return (
              <div
                key={metric.id}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${metric.color}`} />
                </div>

                {/* Value */}
                <div className="mb-4">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {metric.id === 'weeks' ? metric.value.toFixed(1) : metric.value}
                    <span className={`text-2xl lg:text-3xl ${metric.color}`}>
                      {metric.suffix}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {metric.description}
                  </p>
                </div>

                {/* Progress Indicator for Percentage Metrics */}
                {(metric.id === 'onTime' || metric.id === 'roi') && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          metric.id === 'onTime' ? 'bg-green-500' : 'bg-purple-500'
                        }`}
                        style={{ 
                          width: `${metric.id === 'onTime' ? (metric.value / 100) * 100 : Math.min((metric.value / 300) * 100, 100)}%` 
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 rounded-2xl transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom Section with Additional Context */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Testimonial */}
          <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">"</span>
              </div>
              <div>
                <p className="text-gray-700 text-lg mb-4 italic">
                  "AMO AI delivered our marketplace in exactly 8 weeks. What would have taken our team 6 months, they did in 2 months with better quality and features we hadn't even thought of."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Chen</div>
                    <div className="text-sm text-gray-600">CTO, MotoMatch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Comparison Chart */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Industry Comparison
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">AMO AI</span>
                  <span className="text-orange-600 font-bold">8.2 weeks</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '34%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Traditional Agencies</span>
                  <span className="text-gray-600 font-bold">24+ weeks</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gray-400 h-3 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">In-House Teams</span>
                  <span className="text-gray-600 font-bold">36+ weeks</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-400 h-3 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-semibold">3-4x faster than alternatives</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};