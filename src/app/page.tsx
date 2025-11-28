"use client";

import { ArrowRight, Check, CheckCircle, Heart, Users, Zap, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse" />
        
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm sm:text-base mb-4">
              <Zap className="w-4 h-4" />
              <span>Revolucione sua jornada fitness</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Transforme Seu Corpo com{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                FitPlan
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
              Seu Treino e Dieta Personalizados, a um Clique de Distância!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
              >
                Comece Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-zinc-700 hover:border-emerald-500/50 hover:bg-emerald-500/5 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Conheça o <span className="text-emerald-400">FitPlan</span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
              O app que revoluciona sua jornada fitness, oferecendo treinos personalizados e dietas que se adaptam às suas metas. Com design premium e interface intuitiva, FitPlan é seu parceiro ideal na busca pela saúde e bem-estar.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Funcionalidades <span className="text-emerald-400">Inovadoras</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Treinos Personalizados</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Elabore um plano de treino sob medida para suas necessidades, com instruções detalhadas e vídeos para garantir que você maximize seus resultados.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Dieta Personalizada</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Mantenha o controle das suas refeições de forma prática. Basta tirar uma foto do seu prato e FitPlan calcula a quantidade de calorias automaticamente.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Consultas Online</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Com o plano Premium, você terá acesso a consultas com um personal trainer credenciado que irá guiar você de forma personalizada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Nossos <span className="text-emerald-400">Planos</span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400">
              Escolha o plano ideal para sua jornada fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Plano Básico</h3>
                  <p className="text-zinc-400">Apenas Treinos</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Treinos personalizados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Acesso a vídeos e instruções</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Ideal para quem quer focar apenas nos exercícios</span>
                  </li>
                </ul>

                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-6 rounded-xl transition-all duration-300">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Intermediate Plan - Featured */}
            <Card className="bg-gradient-to-b from-emerald-900/30 to-zinc-900/50 border-emerald-500/50 relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl shadow-emerald-500/20">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-xl">
                Popular
              </div>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Plano Intermediário</h3>
                  <p className="text-zinc-400">Treino e Dieta</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Tudo no Plano Básico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Dieta personalizada com acompanhamento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Função de tracking de calorias</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-6 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Plano Avançado</h3>
                  <p className="text-zinc-400">Treino, Dieta e Consultas</p>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Todos os recursos do plano anterior</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Consultas online com personal trainer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">Suporte contínuo para resultados garantidos</span>
                  </li>
                </ul>

                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-6 rounded-xl transition-all duration-300">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
              O que Esperar do <span className="text-emerald-400">FitPlan?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Interface Intuitiva</h3>
                <p className="text-zinc-400">Navegação fácil e prática que valoriza sua experiência</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Design Premium</h3>
                <p className="text-zinc-400">Visual moderno e elegante, pensado para facilitar o uso</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Resultados Rápidos</h3>
                <p className="text-zinc-400">A combinação perfeita de treinos e dieta que se ajusta à sua rotina</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-emerald-900/30 via-cyan-900/30 to-blue-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5 animate-pulse" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Não Perca Tempo!
            </h2>
            <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
              Junte-se a milhares de usuários satisfeitos que já transformaram suas vidas com FitPlan. Escolha seu plano ideal e comece sua jornada rumo ao corpo dos seus sonhos!
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-12 py-7 text-xl rounded-xl shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
            >
              Comece Agora
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              FitPlan
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base">Seu corpo, suas regras!</p>
            <p className="text-zinc-600 text-xs sm:text-sm">© 2024 FitPlan. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
