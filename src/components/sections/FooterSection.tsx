const FooterSection = () => {
  return (
    <footer className="py-12 bg-card border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Agente Imobiliário
              </h3>
              <p className="text-muted-foreground">
                A estratégia que transforma corretores em vendedores de alto nível
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Contato</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>suporte@agenteimobiliario.com</p>
                  <p>WhatsApp: (11) 99999-9999</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Legal</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Política de Privacidade</p>
                  <p>Termos de Uso</p>
                  <p>Política de Reembolso</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Empresa</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>New Media Ltda</p>
                  <p>CNPJ: 00.000.000/0001-00</p>
                  <p>São Paulo - SP</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  © 2024 New Media. Todos os direitos reservados.
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