import { X, AlertTriangle } from "lucide-react";

const painPoints = [
  "Ser o corretor secretária que só responde às mesmas perguntas dos clientes",
  "Ser mal orientado na imobiliária que você trabalha e não ter sucesso",
  "Receber só curiosos nos anúncios e nenhum comprador de verdade",
  "Depender de gestores de tráfego ou agências que não conhecem o mercado imobiliário",
  "Não saber quando será a sua próxima venda",
  "Ter bons imóveis e não conseguir vendê-los",
  "Perder tempo tentando descobrir sozinho como atrair clientes qualificados ou ficar esperando leads da imobiliária"
];

const PainPointsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Problemas Comuns</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Se você está <span className="text-destructive">cansado</span> de...
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Estes são os principais desafios que todo corretor enfrenta
            </p>
          </div>

          <div className="space-y-4">
            {painPoints.map((pain, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-background/50 rounded-lg border border-destructive/20 hover:border-destructive/40 hover:shadow-elegant hover:bg-background/70 transition-all duration-300 animate-slide-in-left group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-destructive/30 group-hover:scale-110 transition-all duration-300">
                  <X className="w-4 h-4 text-destructive group-hover:animate-bounce-gentle" />
                </div>
                <p className="text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">{pain}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-dark rounded-xl border border-primary/20">
            <p className="text-xl font-semibold text-primary mb-2">
              Chega de perder oportunidades!
            </p>
            <p className="text-muted-foreground">
              É hora de mudar essa realidade e começar a vender como um profissional de verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;