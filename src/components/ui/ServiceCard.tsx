import { Link } from 'react-router-dom';
import { ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    timeline: string;
    startingPrice: string;
    roi: string;
    icon: React.ComponentType<any>;
    href: string;
  };
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const IconComponent = service.icon;

  return (
    <div 
      className="group relative h-full min-h-[520px] bg-white/80 backdrop-blur-sm rounded-[28px] p-8 border border-gray-200 hover:border-brand-orange shadow-card hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-slide-up focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* ROI Badge */}
      <div className="absolute top-6 right-6 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold">
        {service.roi} ROI
      </div>

      {/* Icon Container */}
      <div className="w-16 h-16 bg-brand-orange/10 group-hover:bg-brand-orange rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
        <IconComponent className="h-8 w-8 text-brand-orange group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-3 text-brand-dark group-hover:text-brand-orange transition-colors duration-300">
        <Link 
          to={service.href}
          className="focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 rounded-lg"
        >
          {service.title}
        </Link>
      </h3>

      {/* Tagline */}
      <p className="text-brand-orange font-medium mb-4 text-sm">
        {service.tagline}
      </p>

      {/* Description */}
      <p className="text-brand-gray mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-brand-dark mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-brand-gray">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto pt-6 border-t border-gray-100">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-brand-gray" />
            <span className="text-sm font-medium text-brand-dark">{service.timeline}</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-brand-gray" />
            <span className="text-sm font-medium text-brand-dark">{service.startingPrice}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={service.href}
          className="group/cta inline-flex items-center justify-between w-full bg-brand-orange/5 hover:bg-brand-orange text-brand-orange hover:text-white rounded-xl px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
        >
          <span className="font-semibold">Learn More</span>
          <ArrowRight className="h-4 w-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};