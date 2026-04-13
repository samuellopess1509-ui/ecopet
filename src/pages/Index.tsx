import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle, Leaf, TrendingDown, DollarSign, Briefcase, ArrowRight, Package, Cog, Zap, CircleDot } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const benefits = {
  environmental: [
    { icon: Recycle, title: "Redução do Lixo Plástico", desc: "Cada kg de filamento evita que centenas de garrafas PET poluam o meio ambiente." },
    { icon: Leaf, title: "Incentivo à Reciclagem", desc: "Criamos demanda real para materiais recicláveis, fortalecendo a cadeia de reciclagem." },
    { icon: TrendingDown, title: "Diminuição da Poluição", desc: "Menos plástico nos oceanos, rios e aterros sanitários." },
  ],
  economic: [
    { icon: DollarSign, title: "Filamento Mais Acessível", desc: "Preço competitivo comparado aos filamentos tradicionais do mercado." },
    { icon: Recycle, title: "Economia Circular", desc: "Transformamos resíduo em recurso, gerando valor em cada etapa." },
    { icon: Briefcase, title: "Negócios Sustentáveis", desc: "Incentivamos empreendedores a criar negócios com impacto positivo." },
  ],
};

const steps = [
  { icon: Package, title: "Coleta", desc: "Garrafas PET são coletadas e separadas por cooperativas parceiras." },
  { icon: Cog, title: "Processamento", desc: "O plástico é limpo, triturado e preparado para extrusão." },
  { icon: Zap, title: "Transformação", desc: "O material passa por extrusão de precisão em alta temperatura." },
  { icon: CircleDot, title: "Filamento", desc: "Filamento 3D de alta qualidade pronto para uso em impressoras." },
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-eco-dark/90 via-eco-dark/70 to-eco-dark/80" />
      </div>
      <div className="relative container mx-auto px-4 pt-20">
        <AnimatedSection className="max-w-2xl space-y-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Transformando Plástico em{" "}
            <span className="text-gradient">Inovação</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            A Ecopet 3D transforma garrafas PET recicladas em filamento de impressão 3D de alta qualidade. 
            Sustentabilidade e tecnologia para um futuro mais verde.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#sobre">
              <Button size="lg" className="gradient-cta text-primary-foreground rounded-full px-8 shadow-eco-lg hover:scale-105 transition-transform">
                Saiba Mais
              </Button>
            </a>
            <Link to="/comprar">
              <Button size="lg" className="rounded-full px-8 bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/25 backdrop-blur-sm">
                Comprar Agora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Sobre */}
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Sobre a <span className="text-primary">Ecopet 3D</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos uma startup brasileira que une sustentabilidade e tecnologia. Nosso processo converte garrafas PET 
            recicladas em filamento de impressão 3D de alta qualidade, oferecendo uma alternativa ecológica e acessível 
            para makers, engenheiros e empresas que buscam inovar de forma responsável.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Benefícios Ambientais */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Benefícios <span className="text-primary">Ambientais</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.environmental.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-card rounded-2xl p-8 shadow-eco hover:shadow-eco-lg transition-shadow h-full">
                <div className="h-12 w-12 rounded-xl gradient-cta flex items-center justify-center mb-5">
                  <b.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Benefícios Econômicos */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Benefícios <span className="text-primary">Econômicos</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.economic.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-card rounded-2xl p-8 shadow-eco hover:shadow-eco-lg transition-shadow h-full">
                <div className="h-12 w-12 rounded-xl gradient-cta flex items-center justify-center mb-5">
                  <b.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Como Funciona */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Como <span className="text-primary">Funciona</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15} className="relative">
              <div className="text-center space-y-4">
                <div className="h-20 w-20 rounded-full gradient-cta flex items-center justify-center mx-auto shadow-eco-lg">
                  <s.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                )}
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection className="space-y-6 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            Pronto para Imprimir o Futuro?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Junte-se à revolução da impressão 3D sustentável. Adquira seu filamento reciclado hoje.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/comprar">
              <Button size="lg" className="bg-primary-foreground text-eco-dark rounded-full px-8 hover:bg-primary-foreground/90 hover:scale-105 transition-all font-semibold">
                Comprar Agora
              </Button>
            </Link>
            <Link to="/planos">
              <Button size="lg" className="rounded-full px-8 bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/25 backdrop-blur-sm">
                Ver Planos
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
