import { useState } from 'react';
import { Palette, Code, Settings, Rocket } from 'lucide-react';

export const ProcessTimeline = () => {
  const [activeWeek, setActiveWeek] = useState(1);

  const phases = [
    {
      id: 1,
      weeks: "1-2",
      title: "Design Sprint",
      icon: Palette,
      progress: 25,
      description: "Discovery, wireframing, and visual design",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      weeks: "3-5",
      title: "Rapid Build",
      icon: Code,
      progress: 62.5,
      description: "Core development and AI integration",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      weeks: "6-7",
      title: "Integration & Testing",
      icon: Settings,
      progress: 87.5,
      description: "Third-party connections and quality assurance",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      weeks: "8",
      title: "Launch & Scale",
      icon: Rocket,
      progress: 100,
      description: "Deployment and performance optimization",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">8-Week</span> Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that transforms your idea into a production-ready AI application in record time.
          </p>
        </div>

        {/* Interactive Timeline - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2" />
            
            {/* Active Progress Bar */}
            <div 
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform -translate-y-1/2 transition-all duration-700"
              style={{ width: `${(activeWeek / 4) * 100}%` }}
            />

            {/* Timeline Nodes */}
            <div className="relative flex justify-between items-center">
              {phases.map((phase, index) => {
                const IconComponent = phase.icon;
                const isActive = index + 1 <= activeWeek;
                const isCurrent = index + 1 === activeWeek;

                return (
                  <div
                    key={phase.id}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => setActiveWeek(phase.id)}
                  >
                    {/* Node Circle */}
                    <div
                      className={`
                        w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300
                        ${isActive 
                          ? 'border-orange-500 bg-orange-500 text-white shadow-lg' 
                          : 'border-gray-300 bg-white text-gray-400 group-hover:border-orange-300'
                        }
                        ${isCurrent ? 'scale-110 shadow-xl' : 'group-hover:scale-105'}
                      `}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Week Label */}
                    <div className="mt-4 text-center">
                      <div className={`text-sm font-semibold ${isActive ? 'text-orange-600' : 'text-gray-500'}`}>
                        Week {phase.weeks}
                      </div>
                      <div className={`text-xs mt-1 ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
                        {phase.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden mb-12">
          <div className="space-y-6">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isActive = index + 1 <= activeWeek;
              const isCurrent = index + 1 === activeWeek;

              return (
                <div
                  key={phase.id}
                  className={`
                    flex items-center space-x-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                    ${isCurrent 
                      ? 'border-orange-500 bg-orange-50' 
                      : isActive 
                        ? 'border-orange-300 bg-orange-25' 
                        : 'border-gray-200 bg-white hover:border-orange-200'
                    }
                  `}
                  onClick={() => setActiveWeek(phase.id)}
                >
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'}
                  `}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Week {phase.weeks}</div>
                    <div className="text-sm text-gray-600">{phase.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          {phases.map((phase) => {
            if (phase.id !== activeWeek) return null;
            
            const IconComponent = phase.icon;
            
            return (
              <div key={phase.id} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Week {phase.weeks}: {phase.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  {phase.description}
                </p>

                {/* Progress Indicator */}
                <div className="max-w-md mx-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-orange-600">{phase.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};