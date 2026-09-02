import { createFileRoute } from "@tanstack/react-router";

import backgroundAsset from "../assets/background.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acceso confirmado | Spotify Rewards" },
      { name: "description", content: "Tu registro se ha completado correctamente." },
      { property: "og:title", content: "Acceso confirmado | Spotify Rewards" },
      { property: "og:description", content: "Tu registro se ha completado correctamente." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SpotifyLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="currentColor"
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
      />
    </svg>
  );
}

function CheckmarkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw"
        style={{ strokeDasharray: 50, strokeDashoffset: 50 }}
      />
    </svg>
  );
}

function Index() {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10"
      style={{ backgroundImage: `url(${backgroundAsset.url})` }}
    >
      <main className="w-full max-w-[480px] animate-fade-in-up">
        <div className="overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#181818] shadow-[0_15px_45px_rgba(0,0,0,0.6)]">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 border-b border-white/[0.03] px-6 pb-4 pt-8">
            <SpotifyLogo className="h-8 w-8 text-[#1DB954]" />
            <span className="text-[21px] font-extrabold tracking-[-0.5px] text-white">
              Spotify<span className="font-normal text-[#1DB954]"> Rewards</span>
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center px-7 pb-8 pt-8 text-center">
            {/* Success badge */}
            <div className="mb-6 flex h-[72px] w-[72px] animate-pulse-spotify items-center justify-center rounded-full border-2 border-[#1DB954] bg-[rgba(29,185,84,0.12)]">
              <CheckmarkIcon className="h-[34px] w-[34px] text-[#1DB954]" />
            </div>

            <h1 className="mb-3 text-[26px] font-black tracking-[-0.5px] text-white">
              ¡ACCESO CONCEDIDO!
            </h1>
            <p className="mb-7 text-[14.5px] leading-relaxed text-[#a7a7a7]">
              Tu registro se ha completado correctamente. Haz clic en el botón de abajo para entrar en la aplicación y reclamar tu saldo.
            </p>

            <button
              type="button"
              className="mb-5 w-full rounded-full bg-[#1DB954] px-6 py-[18px] text-center font-sans text-[15.5px] font-extrabold uppercase leading-none tracking-[1px] text-black shadow-[0_4px_15px_rgba(29,185,84,0.3)] transition-all duration-150 hover:scale-[1.02] hover:bg-[#1ed760]"
            >
              Entrar a la aplicación
            </button>

            <div id="vendepay-upsell-container" className="w-full" />
          </div>
        </div>

        <footer className="my-5 text-center text-[11px] tracking-[0.2px] text-[#535353]">
          &copy; 2026 Spotify Rewards. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  );
}
