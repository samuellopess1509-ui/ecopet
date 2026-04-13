import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => (
  <footer className="bg-eco-dark text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Logo className="h-10 w-auto" inverted />
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Transformando plástico reciclado em filamento 3D de alta qualidade. Sustentabilidade e tecnologia juntas.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-semibold">Navegação</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-eco-glow transition-colors">Início</Link>
            <Link to="/comprar" className="hover:text-eco-glow transition-colors">Comprar</Link>
            <Link to="/planos" className="hover:text-eco-glow transition-colors">Planos</Link>
            <Link to="/login" className="hover:text-eco-glow transition-colors">Login</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-semibold">Contato</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-eco-glow" />
              contato@ecopet3d.com.br
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-eco-glow" />
              (88) 99999-8888
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-eco-glow" />
              Nova Russas, Ceará
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-semibold">Redes Sociais</h4>
          <div className="flex gap-3">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-eco-glow/20 transition-colors"
              >
                <Icon className="h-5 w-5 text-eco-glow" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Ecopet 3D. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
