import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Logo from "@/components/Logo";

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <AnimatedSection className="w-full max-w-md">
        <div className="bg-card rounded-3xl shadow-eco-lg p-8 md:p-10 space-y-8">
          <div className="text-center space-y-4">
            <Link to="/" className="inline-block">
              <Logo className="h-10 w-auto mx-auto" />
            </Link>
            <h1 className="font-display text-2xl font-bold text-foreground">Criar sua conta</h1>
            <p className="text-muted-foreground text-sm">Preencha os dados para se cadastrar</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Nome completo</Label>
              <Input id="name" type="text" placeholder="Seu nome" className="rounded-xl h-12 bg-secondary border-border" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" className="rounded-xl h-12 bg-secondary border-border" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Mínimo 8 caracteres"
                  className="rounded-xl h-12 bg-secondary border-border pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground">Confirmar senha</Label>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Repita a senha"
                className="rounded-xl h-12 bg-secondary border-border"
              />
            </div>

            <Button type="submit" size="lg" className="w-full gradient-cta text-primary-foreground rounded-full font-semibold shadow-eco hover:scale-[1.02] transition-transform">
              Criar Conta
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Entrar
            </Link>
          </div>

          <div className="text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Cadastro;
