import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Preciso ser especialista em tráfego pago para usar?",
    answer: "Não! Nossa estratégia foi desenvolvida justamente para corretores que não têm conhecimento técnico em tráfego. O sistema GPT faz todo o trabalho pesado, você só precisa copiar e colar as estruturas criadas."
  },
  {
    question: "Preciso pagar o ChatGPT Plus?",
    answer: "Sim, é necessário ter o ChatGPT Plus para acessar os agentes GPT personalizados. O investimento de R$20/mês no ChatGPT Plus se paga facilmente com uma única venda extra que você fizer usando nossa estratégia."
  },
  {
    question: "Funciona para todo tipo de imóvel?",
    answer: "Sim! Nossa estratégia funciona para qualquer tipo de imóvel: apartamentos, casas, terrenos, imóveis comerciais, lançamentos, usados, etc. O sistema se adapta ao seu nicho e público específico."
  },
  {
    question: "Quanto tempo demora para ver resultados?",
    answer: "Muitos alunos começam a ver os primeiros leads qualificados nas primeiras semanas. O importante é seguir exatamente o que ensinamos e ter consistência na aplicação."
  },
  {
    question: "Tenho suporte se tiver dúvidas?",
    answer: "Sim! Você terá acesso ao nosso suporte dedicado, grupo de alunos e aulas ao vivo para tirar todas as suas dúvidas e garantir o seu sucesso."
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
    <section className="py-20 bg-background">
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
              <p className="text-lg mb-4">
                Ainda tem alguma dúvida? 
              </p>
              <p className="text-muted-foreground">
                Entre em contato conosco e nossa equipe estará pronta para ajudar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;