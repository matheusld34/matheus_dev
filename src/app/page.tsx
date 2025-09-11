import Image from "next/image";
import { Linkedin, Instagram, Github } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FeatureCard } from "@/components/FeatureCard";



export default function Home() {
  return (

    <div className="flex flex-col min-h-screen bg-black">
      <header className="container mx-auto py-6 px-4" >
        <div className="flex items-center justify-between">
          <div className="flex font-bold text-white text-xl">
            <span>Matheus Dev</span>
          </div>
          <div className="flex items-center text-white gap-6">
            <Linkedin className="h-6 w-6 " />
            <Instagram className="h-6 w-6" />
            <Github className="h-6 w-6" />
          </div>
        </div>
      </header >
      <main className="flex-1 flex items-center justify-center">
        <div className="z-10 flex flex-row justify-between">
          <div className="text-white">
            <h1>Matheus Dev seja bem vindo</h1>
          </div>

          <div className="text-white">
            <h1>laurem</h1>
          </div>
        </div>

      </main>
    </div >




  );
}


