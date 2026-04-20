'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0F0F0F] text-white">
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-extrabold text-[#00E676] mb-4">Erro Crítico</h1>
          <p className="text-[#AAAAAA] mb-10 max-w-md">
            Um erro fatal ocorreu no sistema.
          </p>
          <button
            onClick={() => reset()}
            className="bg-[#00E676] text-[#0F0F0F] font-bold px-8 py-4 rounded-xl hover:scale-[1.05] transition-all shadow-[0_0_20px_rgba(0,230,118,0.3)]"
          >
            Tentar recarregar
          </button>
        </div>
      </body>
    </html>
  );
}
