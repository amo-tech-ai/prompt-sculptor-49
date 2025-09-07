import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/data/services';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div 
      className="group relative bg-white/80 backdrop-blur-sm border border-border hover:border-orange rounded-[28px] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-within:border-orange"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-foreground">
        <Link 
          to={service.href}
          className="focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded-lg"
        >
          {service.title}
        </Link>
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Deliverables */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-2">Deliverables:</h4>
        <ul className="space-y-1">
          {service.deliverables.map((deliverable, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-center">
              <span className="w-1.5 h-1.5 bg-orange rounded-full mr-2 flex-shrink-0" />
              {deliverable}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.technologies.map((tech, idx) => (
          <Badge 
            key={idx} 
            variant="secondary" 
            className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground border-0"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-end">
        <Link
          to={service.href}
          className="inline-flex items-center text-sm font-medium text-orange hover:text-orange/80 transition-colors group/cta focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded-lg"
        >
          <span>Explore Service</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};