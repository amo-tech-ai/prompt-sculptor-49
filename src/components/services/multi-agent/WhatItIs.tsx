import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Brain, Zap } from 'lucide-react';

export const WhatItIs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Intelligent Automation
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Are{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Multi-Agent AI Systems?
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Think of your business as a team of specialists — sales, operations, customer service. 
                Each person has a role, and together they deliver results.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Multi-Agent AI Systems recreate this model with intelligent software agents. Each AI agent 
                focuses on a specific task (research, analysis, customer support, logistics), communicates 
                instantly with others, and scales infinitely.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instead of replacing people, these systems free your team from repetitive work so they 
                can focus on higher-value decisions and growth.
              </p>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-0 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Agent Collaboration Flow</h3>
              
              <div className="space-y-4">
                {[
                  { icon: Brain, label: "Research", color: "text-blue-500" },
                  { icon: Zap, label: "Analyze", color: "text-purple-500" },
                  { icon: Users, label: "Decide", color: "text-green-500" },
                  { icon: Zap, label: "Act", color: "text-orange-500" },
                  { icon: Brain, label: "Report", color: "text-pink-500" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full">
                        <div 
                          className="h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"
                          style={{ width: '100%', animationDelay: `${index * 0.2}s` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{step.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};