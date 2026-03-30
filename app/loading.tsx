import Image from "next/image";

const isBrandedLoadingEnabled =
  process.env.NEXT_PUBLIC_BRANDED_LOADING !== "false";

export default function Loading() {
  if (!isBrandedLoadingEnabled) return null;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(176,30,35,0.32),transparent_45%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.08),transparent_38%)]" />

      <div className="relative z-10 flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-neutral-900/60 px-9 py-8 shadow-2xl shadow-black/35 backdrop-blur-sm">
        <Image
          src="/images/arte1-logo.png"
          alt="Arte 1"
          width={170}
          height={68}
          priority
          className="h-auto w-auto"
        />

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-[#B01E23]" />
          <span className="h-2.5 w-2.5 animate-[pulse_1s_ease-in-out_180ms_infinite] rounded-full bg-[#d73b40]" />
          <span className="h-2.5 w-2.5 animate-[pulse_1s_ease-in-out_360ms_infinite] rounded-full bg-[#f2555a]" />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          Carregando experiencias culturais
        </p>
      </div>
    </main>
  );
}
