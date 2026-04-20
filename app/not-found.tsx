import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-extrabold text-[#00E676] mb-4">404</h1>
      <h2 className="text-2xl text-white font-bold mb-6">Página não encontrada</h2>
      <p className="text-[#AAAAAA] mb-10 max-w-md">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Link 
        href="/" 
        className="bg-[#00E676] text-[#0F0F0F] font-bold px-8 py-4 rounded-xl hover:scale-[1.05] transition-all shadow-[0_0_20px_rgba(0,230,118,0.3)]"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}
