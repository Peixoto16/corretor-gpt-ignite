import { CheckCircle, Gift, Zap, Video, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tudo que você vai ter <span className="text-primary">acesso</span>:
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Main Product */}
            <div className="bg-gradient-dark p-8 rounded-xl border border-primary/20 hover:shadow-glow hover:scale-105 transition-all duration-300 animate-slide-in-left group">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary group-hover:animate-bounce-gentle" />
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">Gestor de Tráfego Imobiliário Pro</h3>
              </div>
              
              <p className="text-lg text-primary font-semibold mb-4 group-hover:animate-pulse">(Agente GPT)</p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Treinado exclusivamente para o mercado imobiliário, para criar e otimizar campanhas 
                de tráfego com foco em trazer clientes compradores de imóveis.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover/item:animate-bounce-gentle" />
                  <span className="group-hover/item:text-primary transition-colors duration-300">Em questão de minutos definimos a estrutura completa das suas novas campanhas: Imóveis → Público → Criativos → Campanhas no ar</span>
                </div>
                <div className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover/item:animate-bounce-gentle" />
                  <span className="group-hover/item:text-primary transition-colors duration-300">Crie suas campanhas apenas COPIANDO E COLANDO a estrutura, sem precisar de nenhum conhecimento em tráfego.</span>
                </div>
              </div>
            </div>

            {/* Video Lessons */}
            <div className="bg-background p-8 rounded-xl border border-primary/20 hover:shadow-glow hover:scale-105 transition-all duration-300 animate-slide-in-left group" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Video className="w-8 h-8 text-primary group-hover:animate-bounce-gentle" />
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">Vídeo Aulas com Gabriel</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Aulas práticas com o passo a passo completo da estratégia responsável por vender 
                mais de R$ 50 milhões em VGV até o momento.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover/item:animate-bounce-gentle" />
                  <span className="group-hover/item:text-primary transition-colors duration-300">Passo a passo completo da estratégia</span>
                </div>
                <div className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover/item:animate-bounce-gentle" />
                  <span className="group-hover/item:text-primary transition-colors duration-300">Casos práticos e exemplos reais</span>
                </div>
                <div className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover/item:animate-bounce-gentle" />
                  <span className="group-hover/item:text-primary transition-colors duration-300">Dicas avançadas de otimização</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="bg-primary/10 p-8 rounded-xl border border-primary/30 mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 mb-4">
                <Gift className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Super Bônus</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Você ainda vai levar <span className="text-primary">1 Super Bônus</span>:
              </h3>
            </div>

            <div className="bg-card p-6 rounded-lg border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="text-xl font-bold">Inteligência Imobiliária Copy</h4>
                  <p className="text-primary font-semibold">(Agente GPT)</p>
                </div>
                <div className="ml-auto">
                  <span className="text-sm text-muted-foreground line-through">R$ 450</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Um agente projetado para maximizar a eficácia das suas campanhas, garantindo 
                excelência e resultados que você nunca teve!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Define a persona do comprador ideal para os seus imóveis</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Cria roteiros de vídeo com a sua essência e linguagem</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Te ajuda a criar criativos de alta performance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Mais de 5 roteiros em menos de 10 minutos</span>
                </div>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-gradient-dark p-8 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Você com certeza vai querer ter <span className="text-primary">aprendido isso antes</span>
            </h3>
            
            <div className="text-center mb-8">
              <p className="text-lg font-semibold text-primary mb-2">
                Entrando agora para o Agente Imobiliário você recebe:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Acesso Imediato ao GPT Gestor de Tráfego Imobiliário Pro",
                "Super Bônus: GPT Inteligência Imobiliária Copy",
                "Acesso ao Grupo de alunos",
                "Aulas ao vivo",
                "Atualizações contínuas dos seus agentes",
                "1 ano de acesso ao curso completo",
                "Suporte dedicado para tirar suas dúvidas",
                "Aulas exclusivas para facilitar ainda mais sua produção"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;