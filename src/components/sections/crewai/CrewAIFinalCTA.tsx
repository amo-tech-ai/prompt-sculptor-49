import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, Play, Shield } from 'lucide-react';

const CrewAIFinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Build Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              AI Workforce?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't let manual processes slow you down. Deploy AI crews that deliver{' '}
            <strong>25x productivity, 90% cost savings, and ROI in 60 days</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">
                <Rocket className="mr-2" />
                Build My AI Crew →
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              <Play className="mr-2" />
              See Case Studies →
            </Button>
          </div>

          {/* Guarantee Badge */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue-200" />
              <h3 className="text-xl font-bold">60-Day ROI Guarantee</h3>
            </div>
            <p className="text-blue-100">
              "ROI in 60 days — or we keep working until you do."
            </p>
          </div>

          {/* Key Benefits Reminder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-blue-200">90%</div>
              <div className="text-sm">Workflow Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-blue-200">60%</div>
              <div className="text-sm">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-blue-200">25x</div>
              <div className="text-sm">Productivity Increase</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Join 500+ businesses already using CrewAI to transform their operations. 
              Your competitors are automating — don't get left behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewAIFinalCTA;