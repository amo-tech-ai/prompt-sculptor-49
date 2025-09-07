import { Users, TrendingUp, Award } from 'lucide-react';

export const Statistics = () => {
  const stats = [
    {
      number: "+154K",
      label: "Social",
      description: "We are a professional and reliable printing company",
      icon: Users,
      bgColor: "bg-orange/10"
    },
    {
      number: "+160",
      label: "Team",
      description: "We are a professional and reliable printing company that offers a wide range of printing services to meet your needs.",
      icon: Award,
      bgColor: "bg-gradient-to-br from-orange to-orange/70"
    },
    {
      number: "+170",
      label: "Team", 
      description: "We are a professional and reliable printing company that offers a wide range of printing services to meet your needs.",
      icon: TrendingUp,
      bgColor: "bg-gradient-to-br from-orange to-orange/70"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className={`
                  relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg
                  ${index === 0 ? 'bg-background border border-border' : stat.bgColor}
                  ${index === 0 ? 'text-foreground' : 'text-white'}
                `}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Icon */}
                <div className="absolute top-4 right-4">
                  <Icon className={`w-6 h-6 ${index === 0 ? 'text-orange' : 'text-white/80'}`} />
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <div className={`text-sm font-medium mb-3 ${index === 0 ? 'text-muted-foreground' : 'text-white/90'}`}>
                  {stat.label}
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${index === 0 ? 'text-muted-foreground' : 'text-white/80'}`}>
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};