import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/5 to-transparent animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8 animate-scale-in hover:scale-105 transition-transform duration-300">
            <Target className="w-4 h-4 text-primary animate-bounce-gentle" />
            <span className="text-sm font-medium">Estratégia Validada</span>
            <TrendingUp className="w-4 h-4 text-primary animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            A estratégia que faz{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-x">Corretores venderem</span>{" "}
            Imóveis de{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-x">+ R$500 mil</span>{" "}
            com menos de{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-x">R$400</span>{" "}
            em Tráfego Pago
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Mesmo sendo corretor autônomo, sem gestor de tráfego e sem depender de agências.
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Utilize imediatamente o nosso mecanismo validado, para criar campanhas ultra segmentadas 
            e trazer leads que realmente comprem seus imóveis.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 mb-16 hover:scale-105 hover:shadow-glow transition-all duration-300 group">
              QUERO MEU GESTOR DE TRÁFEGO IMOBILIÁRIO PRO
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;