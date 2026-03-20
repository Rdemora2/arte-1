"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/c/CanalArte1?themeRefresh=1", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/canalarte1?igsh=YmtkczRydGhzb3Fr", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative bg-neutral-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/arte1-logo.png"
              alt="Arte 1"
              width={140}
              height={56}
              className="w-auto h-auto"
            />
          </Link>

          {/* Description */}
          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            O Arte 1 é o canal dedicado à arte, cultura e entretenimento de qualidade. 
            Um canal do <span className="font-semibold text-neutral-300">Grupo Bandeirantes</span>.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-all duration-300 hover:bg-[#B01E23] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[#B01E23]/20"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Legal Link */}
          <a
            href="https://privacy.band.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors duration-300 hover:text-white underline underline-offset-4"
          >
            Termos de Uso e Política de Privacidade
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Arte 1. Todos os direitos reservados.
            </p>
            <p className="text-sm text-neutral-500">
              Desenvolvido por{" "}
              <a 
                href="https://valiantgroup.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                Valiant Group
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
