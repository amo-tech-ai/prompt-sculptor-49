import { Clock, X, CheckCircle, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

export const ProcessComparison = () => {
  const traditionalAgency = {
    timeline: "6+ Months",
    problems: [
      "Endless discovery phases that go nowhere",
      "Scope creep and constant revisions",
      "Poor communication and missed deadlines",
      "Outdated tech stack and methods",
      "Expensive change requests",
      "No clear milestones or progress tracking"
    ],
    outcomes: [
      "Project delays and budget overruns",
      "Frustrated stakeholders and teams",
      "Missed market opportunities",
      "Technical debt from poor architecture"
    ]
  };

  const amoAI = {
    timeline: "8 Weeks",
    advantages: [
      "Structured 8-week process with clear phases",
      "Fixed scope with room for strategic pivots",
      "Daily updates and weekly milestone reviews",
      "Modern AI-first technology stack",
      "Changes included within phase scope",
      "Real-time progress tracking and demos"
    ],
    outcomes: [
      "Predictable delivery and budget",
      "Excited stakeholders seeing real progress",
      "First-to-market competitive advantage",
      "Scalable, maintainable codebase"
    ]
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-orange-500">8 Weeks</span> Beats 6 Months
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic difference between traditional agency approaches and our AI-accelerated process.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Traditional Agency Side */}
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-3 bg-red-50 text-red-700 px-6 py-3 rounded-full border border-red-200 mb-4">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-semibold">Traditional Agencies</span>
              </div>
              <div className="text-3xl font-bold text-gray-600 mb-2">{traditionalAgency.timeline}</div>
              <div className="flex items-center justify-center space-x-2 text-red-600">
                <TrendingDown className="h-5 w-5" />
                <span className="text-sm font-medium">Slow & Unpredictable</span>
              </div>
            </div>

            {/* Problems Card */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <X className="h-5 w-5 text-red-500 mr-2" />
                Common Problems
              </h3>
              <ul className="space-y-3">
                {traditionalAgency.problems.map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Typical Outcomes</h3>
              <ul className="space-y-3">
                {traditionalAgency.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Timeline - Traditional */}
            <div className="mt-8">
              <div className="relative">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Project Timeline</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 opacity-60"></div>
                  <div className="absolute inset-y-0 right-0 w-1/3 bg-red-600 opacity-80"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Month 1</span>
                  <span>Month 3</span>
                  <span>Month 6+</span>
                </div>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              VS
            </div>
          </div>

          {/* AMO AI Side */}
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-3 bg-orange-50 text-orange-700 px-6 py-3 rounded-full border border-orange-200 mb-4">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">AMO AI Process</span>
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{amoAI.timeline}</div>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-medium">Fast & Predictable</span>
              </div>
            </div>

            {/* Advantages Card */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Our Advantages
              </h3>
              <ul className="space-y-3">
                {amoAI.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Guaranteed Outcomes</h3>
              <ul className="space-y-3">
                {amoAI.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Timeline - AMO AI */}
            <div className="mt-8">
              <div className="relative">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-orange-600">Project Timeline</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Week 1</span>
                  <span>Week 4</span>
                  <span>Week 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">5x</div>
              <div className="text-gray-600">Faster Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
              <div className="text-gray-600">On-Time Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$200K+</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};