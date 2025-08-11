import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="h-auto bg-background relative overflow-hidden rounded-b-[40px]">
      {/* Animated Background decoration */}
      <div className="absolute inset-0">
        {/* Imagem de fundo decorativa */}
        <img 
          src="/img/TMS00212.png" 
          alt="Fundo decorativo" 
          className="absolute left-1/2 bottom-0 translate-x-[-50%] md:top-1/2 md:bottom-auto md:-translate-y-1/2 w-[3500px] sm:w-[600px] max-w-full opacity-30 pointer-events-none select-none z-0"
        />
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
  Venda Imóveis acima de <span className="text-primary">R$ 500 mil com menos de R$400</span> em Tráfego Pago
</h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
  Mesmo sendo <span className="text-primary font-extrabold drop-shadow-glow animate-fade-in-up">corretor</span> de Imóveis autonomo, sem <span className="text-primary font-extrabold drop-shadow-glow animate-fade-in-up" style={{animationDelay: '0.3s'}}>gestor</span> de tráfego e sem <span className="text-primary font-extrabold drop-shadow-glow animate-fade-in-up" style={{animationDelay: '0.5s'}}>depender de agências</span>.
</p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
  <span className="font-extrabold text-primary drop-shadow-glow">Utilize imediatamente o nosso mecanismo validado</span>, para criar campanhas ultra segmentadas e trazer leads que realmente comprem seus imóveis.
</p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-xs sm:text-lg px-3 sm:px-8 py-4 sm:py-6 mb-16 hover:scale-105 hover:shadow-glow shadow-glow animate-pulse duration-2000 hover:scale-105 hover:shadow-glow transition-all font-bold rounded-md text-center leading-tight">
  <span className="block sm:inline">[QUERO MEU GESTOR DE</span>
  <span className="block sm:inline sm:ml-1">TRÁFEGO IMOBILIÁRIO PRO]</span>
</Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;