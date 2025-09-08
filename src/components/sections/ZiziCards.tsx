import { ArrowRight } from 'lucide-react';

export const ZiziCards = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30" />
      
      {/* Minimal floating shapes - Zizi style */}
      <div 
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-3xl opacity-30 animate-float" 
        style={{ animationDelay: '0.5s' }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-100/15 to-yellow-100/15 rounded-full blur-3xl opacity-20 animate-float" 
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Row 1: 3 cards - Large Orange Service Card (2x) + 2 smaller cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Left Card - Large Orange Service Card (spans 2 columns) */}
          <div className="relative lg:col-span-2">
            <div className="relative bg-white rounded-2xl p-6 h-full min-h-[350px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-200">
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
              
              {/* Top-left badge */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-orange-100/60 rounded-full px-4 py-2">
                  <span className="text-orange-600 text-base font-medium">Our service</span>
                </div>
                <span className="text-gray-600 text-base">2024</span>
              </div>

              {/* Orange arrow in top-right */}
              <div className="absolute top-8 right-8 w-10 h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="h-5 w-5 text-orange-500/80" />
              </div>

              {/* Bottom pill badges */}
              <div className="absolute bottom-10 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  {['Web Design', 'UIUX Design', 'Development', 'Motion Designer', 'Adobe Illustration'].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-orange-100/60 rounded-full px-3 py-1.5">
                      <span className="text-orange-600 text-sm font-medium">{service}</span>
                      <ArrowRight className="h-3 w-3 text-orange-500/80" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Card - Clean White Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 h-full min-h-[350px] border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
              {/* Orange swoosh at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
              {/* Subtle white/orange shape overlay */}
              <div 
                className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-100/20 to-white/30 rounded-full blur-xl opacity-40 animate-float"
                style={{ animationDelay: '0.8s' }}
                aria-hidden="true"
              />
              
              {/* Orange arrow in top-right */}
              <div className="absolute top-8 right-8 w-10 h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="h-5 w-5 text-orange-500/80" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  We help Our Clients to shine Online
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A wide range of printing services to meet your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Stats Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 h-full min-h-[350px] border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
              {/* Orange swoosh at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
              {/* Subtle white/orange shape overlay */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/20 to-white/30 rounded-full blur-2xl opacity-40 animate-float"
                style={{ 
                  borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
                  animationDelay: '1.2s'
                }}
                aria-hidden="true"
              />
              
              {/* Orange arrow in top-right */}
              <div className="absolute top-8 right-8 w-10 h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="h-5 w-5 text-orange-500/80" />
              </div>

              {/* Case Studies content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Platforms in Production</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold text-gray-900">FashionOS</h4>
                    <p className="text-sm text-orange-600 mb-1">Event Management Platform</p>
                    <p className="text-sm text-gray-600">Reduced 3-day setup to 3 minutes. 90% of tasks automated.</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold text-gray-900">I Love Medellín</h4>
                    <p className="text-sm text-orange-600 mb-1">Tourism Marketplace</p>
                    <p className="text-sm text-gray-600">Complete booking platform with AI concierge. Targeting $75K monthly revenue.</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-400 pl-4">
                    <h4 className="font-semibold text-gray-900">Automotive Marketplace</h4>
                    <p className="text-sm text-orange-600 mb-1">Multi-Dealer Platform</p>
                    <p className="text-sm text-gray-600">Processing $4.3M in monthly transactions. 500+ dealers connected.</p>
                  </div>
                </div>

                {/* See All Projects button */}
                <button className="bg-orange-400/80 hover:bg-orange-500/80 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg">
                  See All Projects
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 3 smaller cards with social proof and team stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Card - AI Development */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
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
            
            {/* Orange arrow in top-right */}
            <div className="absolute top-8 right-8 w-10 h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="h-5 w-5 text-orange-500/80" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Applications That Think</h3>
              <p className="text-gray-600 mb-4">
                We build sophisticated AI systems using the latest models from OpenAI, Anthropic, and open-source alternatives.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-gray-600">• Conversational AI & Chatbots</li>
                <li className="text-sm text-gray-600">• Multi-Agent Systems (CrewAI)</li>
                <li className="text-sm text-gray-600">• RAG Knowledge Bases</li>
                <li className="text-sm text-gray-600">• Document Processing</li>
              </ul>
              <div className="text-orange-600 font-semibold">Starting at $30,000</div>
              <div className="text-sm text-gray-500">2-6 week delivery</div>
            </div>
          </div>

          {/* Middle Card - Rapid Development */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
            {/* Orange swoosh at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
            {/* Subtle orange shape overlay */}
            <div 
              className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-100/20 to-white/30 rounded-full blur-xl opacity-40 animate-float"
              style={{ 
                borderRadius: '50% 30% 50% 30% / 30% 50% 30% 50%',
                animationDelay: '1s'
              }}
              aria-hidden="true"
            />
            
            {/* Orange arrow in top-right */}
            <div className="absolute top-8 right-8 w-10 h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="h-5 w-5 text-orange-500/80" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">From Concept to Launch in Days</h3>
              <p className="text-gray-600 mb-4">
                Skip months of development. We use AI-powered platforms to build production applications at unprecedented speed.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-gray-600">• Lovable for instant apps</li>
                <li className="text-sm text-gray-600">• Webflow for marketing sites</li>
                <li className="text-sm text-gray-600">• Supabase for backends</li>
                <li className="text-sm text-gray-600">• React for custom UIs</li>
              </ul>
              <div className="text-orange-600 font-semibold">Starting at $15,000</div>
              <div className="text-sm text-gray-500">1-4 week delivery</div>
            </div>
          </div>

          {/* Right Card - Process Automation */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:border-orange-300/60 transition-all duration-300 group relative overflow-hidden">
            {/* Orange swoosh at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-300/60 to-orange-400/60 rounded-b-2xl"></div>
            {/* Subtle orange shape overlay */}
            <div 
              className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-100/20 to-white/30 rounded-full blur-xl opacity-40 animate-float"
              style={{ 
                borderRadius: '50% 30% 50% 30% / 30% 50% 30% 50%',
                animationDelay: '1.5s'
              }}
              aria-hidden="true"
            />
            
            {/* Orange arrow in top-right */}
            <div className="absolute top-8 right-8 w-10 h-10 bg-orange-100/60 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="h-5 w-5 text-orange-500/80" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Automate Everything That Repeats</h3>
              <p className="text-gray-600 mb-4">
                Connect your tools, eliminate manual work, and let intelligent workflows run your operations 24/7.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-gray-600">• Customer service (WhatsApp)</li>
                <li className="text-sm text-gray-600">• Data processing (n8n)</li>
                <li className="text-sm text-gray-600">• Payment workflows (Stripe)</li>
                <li className="text-sm text-gray-600">• Email sequences</li>
              </ul>
              <div className="text-orange-600 font-semibold">Starting at $10,000</div>
              <div className="text-sm text-gray-500">1-2 week delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};