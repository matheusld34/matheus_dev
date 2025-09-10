
export function Header() {
    return (

        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
            <header className="container mx-auto py-6 px-4" >
                <div className="flex items-center justify-between">
                    <div className="flex text-blue-500 font-bold text-xl">
                        <span>Matheus Dev</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>Sobre</span>
                        <span>Projeto</span>
                        <span>Tecnologias</span>
                    </div>
                </div>
            </header >
        </div >
    )
}