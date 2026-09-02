import { createFileRoute } from "@tanstack/react-router";

import backgroundAsset from "../assets/background.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Desken" },
      { name: "description", content: "Página em construção — Desken" },
      { property: "og:title", content: "Desken" },
      { property: "og:description", content: "Página em construção — Desken" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundAsset.url})` }}
    >
      <main className="relative z-10 w-full max-w-7xl px-6 py-24">
        {/* Conteúdo será adicionado pelo usuário no GitHub */}
      </main>
    </div>
  );
}
