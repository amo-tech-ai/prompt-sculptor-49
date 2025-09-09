import { ArrowRight } from 'lucide-react';
import { useFeaturedCaseStudies } from '@/hooks/useSupabase';

export const AMOCards = () => {
  const { data: caseStudies, loading, error } = useFeaturedCaseStudies();
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30" />
      
      {/* Minimal floating shapes - AMO AI style - responsive positioning */}
      <div 
        className="absolute top-10 sm:top-20 right-4 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl opacity-30 animate-float" 
        style={{ animationDelay: '0.5s' }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-orange-100/15 to-yellow-100/15 rounded-full blur-3xl opacity-20 animate-float" 
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Row 1: 3 cards - Large Orange Service Card (2x) + 2 smaller cards - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Card - Large Orange Service Card (spans 2 columns on lg+) */}
          <div className="relative md:col-span-2 lg:col-span-2">
            <div className="relative bg-white rounded-2xl p-4 sm:p-6 h-full min-h-[300px] sm:min-h-[350px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-200">
              {/* Orange swoosh at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
              {/* Subtle orange shape overlay */}
              <div 
                className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-orange-300/20 to-orange-400/20 rounded-full blur-2xl opacity-40 animate-float"
                style={{ 
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animationDelay: '1s'
                }}
                aria-hidden="true"
              />
              
              {/* Top-left badge - responsive sizing */}
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="bg-orange-100/60 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <span className="text-orange-600 text-sm sm:text-base font-medium">Our service</span>
                </div>
                <span className="text-gray-600 text-sm sm:text-base">2024</span>
              </div>

              {/* Orange arrow in top-right - responsive positioning */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500/80" />
              </div>

              {/* Bottom pill badges - responsive layout */}
              <div className="absolute bottom-6 sm:bottom-10 left-4 right-4 sm:left-6 sm:right-6">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['Web Design', 'UIUX Design', 'Development', 'Motion Designer', 'Adobe Illustration'].map((service, index) => (
                    <div key={index} className="flex items-center space-x-1.5 sm:space-x-2 bg-orange-100/60 rounded-full px-2 sm:px-3 py-1 sm:py-1.5">
                      <span className="text-orange-600 text-xs sm:text-sm font-medium">{service}</span>
                      <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-orange-500/80" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Card - Clean White Card - responsive sizing */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 sm:p-6 h-full min-h-[300px] sm:min-h-[350px] border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
              {/* Orange swoosh at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
              {/* Subtle white/orange shape overlay */}
              <div 
                className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100/20 to-white/30 rounded-full blur-xl opacity-40 animate-float"
                style={{ animationDelay: '0.8s' }}
                aria-hidden="true"
              />
              
              {/* Orange arrow in top-right - responsive positioning */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500/80" />
              </div>

              {/* Content - responsive text sizing */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  We help Our Clients to shine Online
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  A wide range of printing services to meet your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Stats Card - responsive sizing */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 sm:p-6 h-full min-h-[300px] sm:min-h-[350px] border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
              {/* Orange swoosh at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
              {/* Subtle white/orange shape overlay */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-100/20 to-white/30 rounded-full blur-2xl opacity-40 animate-float"
                style={{ 
                  borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
                  animationDelay: '1.2s'
                }}
                aria-hidden="true"
              />
              
              {/* Orange arrow in top-right - responsive positioning */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500/80" />
              </div>

              {/* Case Studies content - responsive text sizing */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Platforms in Production</h3>
                
                {loading ? (
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="animate-pulse">
                      <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4 mb-1 sm:mb-2"></div>
                      <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
                      <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-full"></div>
                    </div>
                    <div className="animate-pulse">
                      <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4 mb-1 sm:mb-2"></div>
                      <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
                      <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    {caseStudies && caseStudies.length > 0 ? (
                      caseStudies.slice(0, 3).map((caseStudy, index) => (
                        <div key={caseStudy.id} className="border-l-4 border-orange-400 pl-3 sm:pl-4">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{caseStudy.title}</h4>
                          <p className="text-xs sm:text-sm text-orange-600 mb-1">{caseStudy.industry || 'AI Platform'}</p>
                          <p className="text-xs sm:text-sm text-gray-600">{caseStudy.results || caseStudy.solution || 'Advanced AI-powered solution.'}</p>
                        </div>
                      ))
                    ) : (
                      // Fallback case studies - responsive text sizing
                      <>
                        <div className="border-l-4 border-orange-400 pl-3 sm:pl-4">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">FashionOS</h4>
                          <p className="text-xs sm:text-sm text-orange-600 mb-1">Event Management Platform</p>
                          <p className="text-xs sm:text-sm text-gray-600">Reduced 3-day setup to 3 minutes. 90% of tasks automated.</p>
                        </div>
                        
                        <div className="border-l-4 border-orange-400 pl-3 sm:pl-4">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">I Love Medellín</h4>
                          <p className="text-xs sm:text-sm text-orange-600 mb-1">Tourism Marketplace</p>
                          <p className="text-xs sm:text-sm text-gray-600">Complete booking platform with AI concierge. Targeting $75K monthly revenue.</p>
                        </div>
                        
                        <div className="border-l-4 border-orange-400 pl-3 sm:pl-4">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Automotive Marketplace</h4>
                          <p className="text-xs sm:text-sm text-orange-600 mb-1">Multi-Dealer Platform</p>
                          <p className="text-xs sm:text-sm text-gray-600">Processing $4.3M in monthly transactions. 500+ dealers connected.</p>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* See All Projects button - responsive sizing */}
                <button className="bg-orange-400/80 hover:bg-orange-500/80 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
                  See All Projects
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 3 smaller cards with social proof and team stats - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Card - AI Development - responsive sizing */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
            {/* Orange swoosh at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
            {/* Subtle white/orange shape overlay */}
            <div 
              className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-100/20 to-white/30 rounded-full blur-xl opacity-40 animate-float"
              style={{ 
                borderRadius: '30% 70% 50% 50% / 50% 50% 70% 30%',
                animationDelay: '0.5s'
              }}
              aria-hidden="true"
            />
            
            {/* Orange arrow in top-right - responsive positioning */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500/80" />
            </div>

            {/* Content - responsive text sizing */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Intelligent Applications That Think</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                We build sophisticated AI systems using the latest models from OpenAI, Anthropic, and open-source alternatives.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <li className="text-xs sm:text-sm text-gray-600">• Conversational AI & Chatbots</li>
                <li className="text-xs sm:text-sm text-gray-600">• Multi-Agent Systems (CrewAI)</li>
                <li className="text-xs sm:text-sm text-gray-600">• RAG Knowledge Bases</li>
                <li className="text-xs sm:text-sm text-gray-600">• Document Processing</li>
              </ul>
              <div className="text-orange-600 font-semibold text-sm sm:text-base">Starting at $30,000</div>
              <div className="text-xs sm:text-sm text-gray-500">2-6 week delivery</div>
            </div>
          </div>

          {/* Middle Card - Rapid Development - responsive sizing */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
            {/* Orange swoosh at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
            {/* Subtle orange shape overlay */}
            <div 
              className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100/20 to-white/30 rounded-full blur-xl opacity-40 animate-float"
              style={{ 
                borderRadius: '50% 30% 50% 30% / 30% 50% 30% 50%',
                animationDelay: '1s'
              }}
              aria-hidden="true"
            />
            
            {/* Orange arrow in top-right - responsive positioning */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500/80" />
            </div>

            {/* Content - responsive text sizing */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">From Concept to Launch in Days</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Skip months of development. We use AI-powered platforms to build production applications at unprecedented speed.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <li className="text-xs sm:text-sm text-gray-600">• Lovable for instant apps</li>
                <li className="text-xs sm:text-sm text-gray-600">• Webflow for marketing sites</li>
                <li className="text-xs sm:text-sm text-gray-600">• Supabase for backends</li>
                <li className="text-xs sm:text-sm text-gray-600">• React for custom UIs</li>
              </ul>
              <div className="text-orange-600 font-semibold text-sm sm:text-base">Starting at $15,000</div>
              <div className="text-xs sm:text-sm text-gray-500">1-4 week delivery</div>
            </div>
          </div>

          {/* Right Card - Process Automation - responsive sizing */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
            {/* Orange swoosh at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
            {/* Subtle orange shape overlay */}
            <div 
              className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100/20 to-white/30 rounded-full blur-xl opacity-40 animate-float"
              style={{ 
                borderRadius: '50% 30% 50% 30% / 30% 50% 30% 50%',
                animationDelay: '1.5s'
              }}
              aria-hidden="true"
            />
            
            {/* Orange arrow in top-right - responsive positioning */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-8 h-8 sm:w-10 sm:h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500/80" />
            </div>

            {/* Content - responsive text sizing */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Automate Everything That Repeats</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Connect your tools, eliminate manual work, and let intelligent workflows run your operations 24/7.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                <li className="text-xs sm:text-sm text-gray-600">• Customer service (WhatsApp)</li>
                <li className="text-xs sm:text-sm text-gray-600">• Data processing (n8n)</li>
                <li className="text-xs sm:text-sm text-gray-600">• Payment workflows (Stripe)</li>
                <li className="text-xs sm:text-sm text-gray-600">• Email sequences</li>
              </ul>
              <div className="text-orange-600 font-semibold text-sm sm:text-base">Starting at $10,000</div>
              <div className="text-xs sm:text-sm text-gray-500">1-2 week delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};