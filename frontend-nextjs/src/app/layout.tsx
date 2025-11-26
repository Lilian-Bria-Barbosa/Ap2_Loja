import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "../app/components/Footer";
import { Home, Package, Boxes, FileText, Users } from "lucide-react";

export const metadata = {
  title: "Sistema Loja",
  description: "Sistema Fullstack Next.js + Flask",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        {/* CONTAINER PRINCIPAL */}
        <div className="flex flex-1 min-h-0">
          {/* SIDEBAR */}
          <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 shadow-lg flex-shrink-0">
            <div className="flex justify-center mb-6">
              <Image
                src="/brizart.png"
                alt="Logo Brizart"
                width={277}
                height={156}
                className="rounded-lg"
              />
            </div>

            <h2 className="text-xl font-bold mb-6 text-center">Painel do Sistema</h2>

            <nav className="flex flex-col gap-3">

              <Link href="/" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
                <Home size={20} />
                Início
              </Link>

              <Link href="/produtos" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
                <Package size={20} />
                Produtos
              </Link>

              <Link href="/estoque" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
                <Boxes size={20} />
                Estoque
              </Link>

              <Link href="/relatorios" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
                <FileText size={20} />
                Relatórios
              </Link>

              <Link href="/funcionarios" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
                <Users size={20} />
                Funcionários
              </Link>
            </nav>
          </aside>

          {/* CONTEÚDO */}
          <main className="flex-1 p-8 overflow-auto">
            {children}
          </main>
        </div>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
