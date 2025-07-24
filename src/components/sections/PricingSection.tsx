import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Clock } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Você vai ter acesso a uma estratégia que é vendida por mais de{" "}
            <span className="text-primary">R$3.000 mensal</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Mas hoje você vai levar tudo isso com acesso imediato...
          </p>

          {/* Price Card */}
          <div className="bg-gradient-dark p-8 rounded-2xl border-2 border-primary/30 shadow-glow max-w-md mx-auto mb-12">
            <div className="text-center">
              {/* Original Price Crossed Out */}
              <div className="text-lg text-muted-foreground line-through mb-2">
                De R$ 3.000/mês
              </div>
              
              {/* Main Price */}
              <div className="text-6xl font-bold text-primary mb-4">
                R$100
              </div>
              
              {/* Payment Options */}
              <div className="text-lg text-muted-foreground mb-6">
                ou <span className="text-foreground font-semibold">12x de R$10,29</span>
              </div>
              
              {/* Payment Icons */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Acesso Imediato</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button variant="hero" size="lg" className="w-full text-lg py-6 mb-4">
                SIM! QUERO ACESSAR AGORA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              {/* Security Text */}
              <p className="text-xs text-muted-foreground">
                🔒 Compra 100% segura • Acesso imediato
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-card p-6 rounded-xl border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">⚡</div>
                <div className="font-semibold mb-1">Acesso Imediato</div>
                <div className="text-sm text-muted-foreground">Receba tudo na hora</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">🎯</div>
                <div className="font-semibold mb-1">Resultados Garantidos</div>
                <div className="text-sm text-muted-foreground">Estratégia validada</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">🚀</div>
                <div className="font-semibold mb-1">Suporte Total</div>
                <div className="text-sm text-muted-foreground">1 ano de acesso</div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-primary font-semibold">
              ⏰ Oferta limitada - Garante o seu acesso agora mesmo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;