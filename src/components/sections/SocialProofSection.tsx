import { Star, Quote, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Corretor Autônomo",
    content: "Consegui vender 3 imóveis no primeiro mês usando a estratégia. Minha renda triplicou!",
    result: "+R$ 45.000 em comissões",
    rating: 5
  },
  {
    name: "Marina Santos",
    role: "Corretora",
    content: "Nunca imaginei que conseguiria gerar leads qualificados com tão pouco investimento.",
    result: "12 visitas/semana",
    rating: 5
  },
  {
    name: "Roberto Lima",
    role: "Corretor Sênior",
    content: "A estratégia é simples e funciona. Agora tenho uma agenda cheia de clientes interessados.",
    result: "+300% leads qualificados",
    rating: 5
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Casos de Sucesso</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">Corretores</span> que vendem todos os meses!
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Veja os resultados reais de quem aplicou nossa estratégia
            </p>

            <div className="inline-flex items-center gap-2 text-lg font-semibold text-primary">
              <span>Estratégia extremamente simples de ser executada</span>
            </div>
            <p className="text-muted-foreground mt-2">
              Construída para o Novo Corretor, que quer aumentar o seu número de comissões sem um grande esforço.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl border border-primary/20 hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-primary/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary">{testimonial.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-dark p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">
                + R$ 50 milhões em VGV gerado até o momento
              </h3>
              <p className="text-muted-foreground">
                Resultados comprovados por centenas de corretores em todo o Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;