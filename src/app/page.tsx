import Image from "next/image";
import { Zap, Heart, Shield } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FeatureCard } from "@/components/FeatureCard";



export default function Home() {
  return (

    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white bg-blue-500">
      <header className="container mx-auto py-6 px-4" >
        <div className="flex items-center justify-between">
          <div className="flex text-blue- font-bold text-xl">
            <span>Matheus Dev</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Sobre</span>
            <span>Projeto</span>
            <span>Tecnologias</span>
          </div>
        </div>
      </header >
      <main className="flex-1 flex items-center justify-center">

        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl bg-clip-text bg-gradient-to-r text-gray-600">
                Bem Vindo, esse site mostra meus projetos pessoais
              </h1>
              <div className="flex items-center justify-center">
                <Avatar className="h-20 w-20 border-2 md:border-4 border-white sm:w-24 sm:h-24 md:w-32 md:h-32 shadow-2xl group">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="group-hover:scale-125 duration-300 group-hover:-rotate-12"
                  />
                  <AvatarFallback>Matheus Santos</AvatarFallback>
                </Avatar>
              </div>


              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visite as minhas redes sociais, e deixe um comentário
              </p>

            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-amber-600" />}
                title="Rápido e simples"
                description="Configure sua página em minutos e comece a receber doações imediatamente."
              />
              <FeatureCard
                icon={<Heart className="h-8 w-8 text-amber-600" />}
                title="Conexão direta"
                description="Crie uma conexão mais próxima com seus apoiadores através de mensagens personalizadas."
              />

              <FeatureCard
                icon={<Shield className="h-8 w-8 text-amber-600" />}
                title="Pagamentos seguros"
                description="Transações protegidas e transferências automáticas para sua conta bancária."
              />
            </div>
          </div>
        </div>
      </main>
    </div >




  );
}
