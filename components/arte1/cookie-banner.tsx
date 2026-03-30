"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "arte1-cookie-consent";

type ConsentChoice = "accepted" | "declined";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    setIsVisible(!storedConsent);
  }, []);

  const handleChoice = (choice: ConsentChoice) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-4 sm:p-6">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-neutral-950/92 shadow-2xl shadow-black/45 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(176,30,35,0.35),transparent_45%),radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="relative z-10 flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#B01E23]/50 bg-[#B01E23]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f7c6c8]">
              Politica de Cookies
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              Utilizamos cookies para melhorar sua experiencia no site, analisar
              trafego e personalizar conteudo. Ao continuar navegando, voce
              concorda com nossa politica de cookies.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href="https://privacy.band.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/85 transition-colors duration-300 hover:bg-white/10 hover:text-white"
            >
              Saiba mais
            </a>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleChoice("declined")}
                className="inline-flex items-center rounded-md border border-white/25 bg-transparent px-4 py-2.5 text-sm font-semibold text-white/80 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => handleChoice("accepted")}
                className="inline-flex items-center rounded-md bg-[#B01E23] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8d171c]"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
