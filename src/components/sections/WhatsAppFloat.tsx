import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning more about AMO AI's services.";
    const whatsappUrl = `https://wa.me/14168003103?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-card border rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-foreground">
                  Chat with us instantly
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-1 h-auto"
                  onClick={() => setShowTooltip(false)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Get instant answers to your AI project questions via WhatsApp
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                size="sm" 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="h-3 w-3 mr-2" />
                Start Chat
              </Button>
            </div>
          )}
          
          {/* Main Floating Button */}
          <Button
            onClick={() => setShowTooltip(!showTooltip)}
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse hover:animate-none"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Pulse Animation Overlay */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
        <div className="h-14 w-14 rounded-full bg-green-500/20 animate-ping" />
      </div>
    </>
  );
};