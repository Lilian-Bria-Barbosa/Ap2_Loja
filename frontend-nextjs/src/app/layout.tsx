import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "../app/components/Footer";

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
              <Link href="/" className="hover:bg-gray-700 p-2 rounded">🏠 Início</Link>
              <Link href="/produtos" className="hover:bg-gray-700 p-2 rounded">📦 Produtos</Link>
              <Link href="/estoque" className="hover:bg-gray-700 p-2 rounded">📊 Estoque</Link>
              <Link href="/relatorios" className="hover:bg-gray-700 p-2 rounded">📑 Relatórios</Link>
              <Link href="/funcionarios" className="hover:bg-gray-700 p-2 rounded">👥 Funcionários</Link>
            </nav>
          </aside>

          {/* CONTEÚDO */}
          <main className="flex-1 p-8 overflow-auto">
            {children}
          </main>

        </div>

        {/* FOOTER - AGORA ALINHADO E SEM SEPARAÇÃO */}
        <Footer />

      </body>
    </html>
  );
}
