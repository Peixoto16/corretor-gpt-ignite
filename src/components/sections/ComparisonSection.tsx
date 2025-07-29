import { X, AlertTriangle, CheckCircle, Sparkles } from "lucide-react";

const painPoints = [
  "Ser o corretor secretária que só responde às mesmas perguntas dos clientes",
  "Ser mal orientado na imobiliária que você trabalha e não ter sucesso",
  "Receber só curiosos nos anúncios e nenhum comprador de verdade",
  "Depender de gestores de tráfego ou agências que não conhecem o mercado imobiliário",
  "Não saber quando será a sua próxima venda",
  "Ter bons imóveis e não conseguir vendê-los",
  "Perder tempo tentando descobrir sozinho como atrair clientes qualificados ou ficar esperando leads da imobiliária"
];

const results = [
  "Faturar como uma GRANDE imobiliária",
  "Atrair clientes compradores mesmo com baixo investimento em tráfego",
  "Subir campanhas completas e otimizadas no Meta Ads mesmo que nunca tenha começado no tráfego",
  "Aumentar o seu número de visitas qualificadas",
  "Vender MAIS imóveis, diante de tanta concorrência",
  "Alavancar o valor das suas comissões"
];

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Pain Points */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">Problemas Comuns</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Se você está <span className="text-destructive">cansado</span> de...
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Estes são os principais desafios que todo corretor enfrenta
              </p>
            </div>

            <div className="space-y-4">
              {painPoints.map((pain, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-destructive/20 hover:border-destructive/40 hover:shadow-elegant hover:bg-background/70 transition-all duration-300 animate-slide-in-left group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-destructive/30 group-hover:scale-110 transition-all duration-300">
                    <X className="w-3 h-3 text-destructive group-hover:animate-bounce-gentle" />
                  </div>
                  <p className="text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">{pain}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Resultados Garantidos</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Agora você será <span className="text-primary">capaz</span> de...
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Transforme sua carreira e alcance resultados extraordinários
              </p>
            </div>

            <div className="space-y-4">
              {results.map((result, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-glow hover:bg-background/70 transition-all duration-300 animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-primary/30 group-hover:animate-bounce-gentle transition-all duration-300">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed font-medium group-hover:text-primary/90 transition-colors duration-300">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 max-w-7xl mx-auto">
          <div className="text-center p-6 bg-gradient-dark rounded-xl border border-primary/20">
            <p className="text-lg font-semibold text-primary mb-2">
              Chega de perder oportunidades!
            </p>
            <p className="text-muted-foreground text-sm">
              É hora de mudar essa realidade e começar a vender como um profissional de verdade.
            </p>
          </div>
          <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/30">
            <p className="text-lg font-semibold text-primary mb-2">
              Seja o corretor que todos querem ser!
            </p>
            <p className="text-muted-foreground text-sm">
              Com nossa estratégia, você terá as ferramentas necessárias para dominar o mercado imobiliário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;