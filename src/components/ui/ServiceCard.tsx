import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div 
      className="group relative glass-overlay rounded-2xl p-6 border border-brand-divider hover:border-brand-orange shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-slide-up focus-within:ring-2 focus-within:ring-brand-orange focus-within:ring-offset-2"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 text-brand-dark">
        <Link 
          to={service.href}
          className="focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 rounded-lg"
        >
          {service.title}
        </Link>
      </h3>

      {/* Description */}
      <p className="text-brand-gray mb-6 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Deliverables with thin dividers */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-brand-dark mb-3">Deliverables:</h4>
        <div className="space-y-0">
          {service.deliverables.map((deliverable, idx) => (
            <div key={idx}>
              <div className="text-sm text-brand-gray py-2">
                {deliverable}
              </div>
              {idx < service.deliverables.length - 1 && (
                <div className="border-t border-brand-divider" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.technologies.map((tech, idx) => (
          <span 
            key={idx} 
            className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 text-xs font-medium text-brand-gray"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA with arrow nudge */}
      <div className="flex justify-end">
        <Link
          to={service.href}
          className="inline-flex items-center text-sm font-medium text-brand-orange hover:text-brand-orange2 transition-all duration-300 group/cta focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 rounded-lg"
        >
          <span>Explore →</span>
          <div className="ml-2 w-2 h-2 bg-brand-orange rounded-full transition-transform group-hover/cta:translate-x-1 group-hover/cta:scale-110" />
        </Link>
      </div>
    </div>
  );
};