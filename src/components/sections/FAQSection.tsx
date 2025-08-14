import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Preciso pagar o ChatGPT Plus para usar os Agentes GPT?",
    answer: "Não. Os nossos Agentes GPT funcionam normalmente no plano gratuito do ChatGPT."
  },
  {
    question: "Mesmo sem experiência com tráfego pago, eu vou conseguir usar?",
    answer: "Sim. O GPT foi feito até para os iniciantes conseguirem subir as suas campanhas. Ele guia você passo a passo e ainda temos vídeo aulas práticas te mostrando o caminho completo, mesmo que nunca tenha subido um anúncio."
  },
  {
    question: "O GPT serve para qualquer tipo de imóvel?",
    answer: "Sim. Você pode usar o GPT para QUALQUER tipo de imóvel ou campanhas. Lançamentos, Imóveis de Terceiros, Imóveis como Investimento… desde MCMV até o Alto Luxo. Ele ajuda a definir o público ideal e adaptar sua campanha para o tipo de imóvel que você tem."
  },
  {
    question: "Preciso ter uma imobiliária ou equipe para aproveitar esse produto?",
    answer: "Não. O GPT foi pensado principalmente para corretores autônomos e pequenas equipes. Ele reduz a necessidade de ter agência ou um time de marketing interno."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Dúvidas Frequentes</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Esclarecemos as principais dúvidas sobre nossa estratégia
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card border border-primary/20 rounded-lg hover:shadow-glow hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors rounded-lg group-hover:bg-primary/10"
                >
                  <h3 className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors duration-300">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 animate-bounce-gentle" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 group-hover:animate-bounce-gentle" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 animate-fade-in-up">
                    <div className="border-t border-primary/20 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-dark p-6 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-2">Agente Imobiliário</h3>
              <p className="text-lg text-muted-foreground">A estratégia que transforma corretores em vendedores de alto nível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;