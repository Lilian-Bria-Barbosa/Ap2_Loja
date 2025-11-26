import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-4 mt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* LOGO + TEXTO */}
        <div>
          <Image
            src="/brizart.png"
            alt="Logo Brizart"
            width={120}
            height={50}
            className="mb-2"
          />
          <p className="text-xs leading-relaxed">
            Loja Brizart — Sistema de gestão de estoque e produtos.
          </p>
        </div>

        {/* CATEGORIAS */}
        <div>
          <h3 className="text-white font-semibold mb-2 text-sm">Categorias</h3>
          <ul className="space-y-1 text-xs">
            <li><Link href="/produtos" className="hover:text-white">Produtos</Link></li>
            <li><Link href="/estoque" className="hover:text-white">Estoque</Link></li>
            <li><Link href="/relatorios" className="hover:text-white">Relatórios</Link></li>
            <li><Link href="/funcionarios" className="hover:text-white">Funcionários</Link></li>
          </ul>
        </div>

        {/* ATENDIMENTO */}
        <div>
          <h3 className="text-white font-semibold mb-2 text-sm">Atendimento</h3>
          <ul className="space-y-1 text-xs">
            <li><a className="hover:text-white">Chat online</a></li>
            <li><a className="hover:text-white">Contato</a></li>
            <li><a className="hover:text-white">Suporte técnico</a></li>
            <li><a className="hover:text-white">Dúvidas</a></li>
          </ul>
        </div>

        {/* REDES SOCIAIS */}
        <div>
          <h3 className="text-white font-semibold mb-2 text-sm">Redes Sociais</h3>
          <div className="flex space-x-3">
            <a className="hover:text-white cursor-pointer">
              <Instagram className="w-5 h-5" />
            </a>
            <a className="hover:text-white cursor-pointer">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="hover:text-white cursor-pointer">
              <Linkedin className="w-5 h-5" />
            </a>
            <a className="hover:text-white cursor-pointer">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-xs mt-4 border-t border-gray-700 pt-2">
        © {new Date().getFullYear()} Brizart — Todos os direitos reservados.
      </div>
    </footer>
  );
}
