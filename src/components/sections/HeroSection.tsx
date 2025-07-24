import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Estratégia Validada</span>
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            A estratégia que faz{" "}
            <span className="text-primary">Corretores venderem</span>{" "}
            Imóveis de{" "}
            <span className="text-primary">+ R$500 mil</span>{" "}
            com menos de{" "}
            <span className="text-primary">R$400</span>{" "}
            em Tráfego Pago
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
            Mesmo sendo corretor autônomo, sem gestor de tráfego e sem depender de agências.
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Utilize imediatamente o nosso mecanismo validado, para criar campanhas ultra segmentadas 
            e trazer leads que realmente comprem seus imóveis.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 mb-16">
            QUERO MEU GESTOR DE TRÁFEGO IMOBILIÁRIO PRO
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">R$ 50mi+</div>
              <div className="text-muted-foreground">em VGV gerado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Corretores atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de sucesso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;