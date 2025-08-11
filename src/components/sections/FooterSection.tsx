const FooterSection = () => {
  return (
    <footer className="py-12 bg-card border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Todos os Direitos Reservados © Um Produto do Grupo New Media Marketing LTDA - CNPJ: 55.970.171/0001-35
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>🔒 Site Seguro</span>
                  <span>⚡ Acesso Imediato</span>
                  <span>🎯 Resultados Garantidos</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-background/50 rounded-lg border border-primary/20">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Aviso Legal:</strong> Os resultados apresentados não garantem os mesmos resultados para todos os usuários. 
                O sucesso depende da aplicação correta das estratégias ensinadas, dedicação e outros fatores externos. 
                Este produto não oferece garantia de resultados financeiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;