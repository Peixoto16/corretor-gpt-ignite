

const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img 
                  src={"/img/TMS00103.jpg"} 
                  alt="Foto TMS00103" 
                  className="w-96 h-100 rounded-2xl object-cover border-4 border-primary/20 shadow-elegant"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm">
                  Expert em Vendas
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-primary">Gabriel Rodrigues</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Empresário, 29 anos
                </p>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Começou a atuar no mercado imobiliário em <span className="font-semibold text-primary">2020</span> como 
                  Gestor de Tráfego até fundar a <span className="font-semibold text-primary">New Media</span>, uma 
                  assessoria de Tráfego Pago & Vendas focada no nicho imobiliário.
                </p>

                <p>
                  Ajuda <span className="font-semibold">Imobiliárias, Construtoras e Corretores de Imóveis</span> a 
                  implementarem uma operação de tráfego enxuta e venderem mais imóveis todos os meses.
                </p>

                <div className="bg-gradient-dark p-6 rounded-xl border border-primary/20">
                  <p className="text-xl font-semibold text-primary mb-2">
                    Até o momento, suas estratégias já geraram:
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    + R$ 50 milhões em VGV
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-background/50 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">Anos de experiência</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Clientes atendidos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;