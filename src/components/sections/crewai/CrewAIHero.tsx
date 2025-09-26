import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Bot, Target } from 'lucide-react';

const CrewAIHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Operations with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                AI Crews
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We deploy <strong>CrewAI multi-agent systems</strong> — specialized AI "employees" that collaborate like your best teams. 
              From research to content, sales to events, our AI crews deliver <strong>90% automation, 60% cost reduction, and ROI in 60 days</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
                <Link to="/contact">Book Free Strategy Session</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                See Crews in Action
              </Button>
            </div>

            {/* Visual representation of AI crew collaboration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Multi-Agent Teams</h3>
                <p className="text-sm text-blue-100">Specialized AI agents working together</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Bot className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Intelligent Automation</h3>
                <p className="text-sm text-blue-100">90% of workflows automated</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="font-semibold mb-2">Measurable ROI</h3>
                <p className="text-sm text-blue-100">Results in 60 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAIHero;