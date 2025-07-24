import { CheckCircle, Sparkles } from "lucide-react";

const results = [
  "Faturar como uma GRANDE imobiliária",
  "Atrair clientes compradores mesmo com baixo investimento em tráfego",
  "Subir campanhas completas e otimizadas no Meta Ads mesmo que nunca tenha começado no tráfego",
  "Aumentar o seu número de visitas qualificadas",
  "Vender MAIS imóveis, diante de tanta concorrência",
  "Alavancar o valor das suas comissões"
];

const ResultsSection = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Resultados Garantidos</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Agora você será <span className="text-primary">capaz</span> de...
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Transforme sua carreira e alcance resultados extraordinários
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card/50 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-glow hover:scale-105 transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-primary/30 group-hover:animate-bounce-gentle transition-all duration-300">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <p className="text-lg leading-relaxed font-medium group-hover:text-primary/90 transition-colors duration-300">{result}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-primary/10 rounded-xl border border-primary/30">
            <p className="text-xl font-semibold text-primary mb-2">
              Seja o corretor que todos querem ser!
            </p>
            <p className="text-muted-foreground">
              Com nossa estratégia, você terá as ferramentas necessárias para dominar o mercado imobiliário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;