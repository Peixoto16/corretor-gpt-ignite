import { Star, Quote, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SocialProofSection = () => {
  const [modalImg, setModalImg] = useState<string|null>(null);
  const handleOpen = (img: string) => setModalImg(img);
  const handleClose = () => setModalImg(null);
  return (
    <section className="py-12 bg-background">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["IMG_9723.jpg", "IMG_9724.jpg", "IMG_9725.jpg", "IMG_9727.jpg"].map((img, idx) => (
  <div key={img} className="flex flex-col items-center">
    <img
      src={`${import.meta.env.BASE_URL}img/${img}`}
      alt={`Prova social ${idx + 1}`}
      className="rounded-xl shadow-lg border border-primary/20 w-full h-96 object-cover object-center hover:scale-105 transition-transform duration-300 bg-white cursor-pointer"
      loading="lazy"
      onClick={() => handleOpen(img)}
    />
  </div>
))}

{/* Modal de Imagem */}
{modalImg && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    onClick={handleClose}
  >
    <div
      className="relative max-w-3xl w-full flex justify-center"
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute -top-6 -right-0 bg-white rounded-full shadow p-2 text-black hover:bg-primary hover:text-white transition-colors z-10"
        onClick={handleClose}
        aria-label="Fechar imagem"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <img
        src={`${import.meta.env.BASE_URL}img/${modalImg}`}
        alt="Prova social ampliada"
        className="rounded-xl max-h-[80vh] w-auto max-w-full shadow-2xl border-2 border-primary bg-white"
        style={{objectFit: "contain"}}
      />
    </div>
  </div>
)}
          </div>


        </div>
        
        {/* Botão CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="w-full sm:w-auto text-xs sm:text-lg px-3 sm:px-12 py-4 sm:py-7 font-bold leading-tight w-full sm:w-auto text-xs sm:text-lg px-3 sm:px-8 py-4 sm:py-6 mb-4 hover:scale-105 hover:shadow-glow shadow-glow animate-pulse-scale transition-all font-bold rounded-md text-center leading-tight">
            <span className="block sm:inline">[QUERO MEU GESTOR DE</span>
            <span className="block sm:inline sm:ml-1">TRÁFEGO IMOBILIÁRIO PRO]</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;