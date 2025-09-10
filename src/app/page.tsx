import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



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
          </div>
        </div>
      </main>
    </div >




  );
}
