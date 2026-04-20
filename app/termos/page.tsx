import Link from 'next/link';

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#AAAAAA] font-['Inter',system-ui] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#00E676] hover:underline mb-8 inline-block">&larr; Voltar para o início</Link>
        <h1 className="text-4xl text-white font-bold mb-8">Termos de Uso</h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>
            Bem-vindo aos Termos de Uso do <strong>GymGIFs</strong>. Ao acessar e utilizar nosso site e adquirir nossos produtos, você concorda com os termos e condições descritos abaixo.
          </p>

          <h2 className="text-2xl text-white font-semibold mt-8">1. Uso do Produto</h2>
          <p>
            O pacote de GIFs é disponibilizado para uso pessoal e profissional. Você pode utilizar as animações em planilhas, consultoria online, redes sociais e aplicativos próprios para montagem de treino.
          </p>
          <p>
            <strong>É estritamente proibida</strong> a revenda direta do pacote de GIFs, redistribuição em massa para não-clientes da sua consultoria, ou sublicenciamento do material bruto.
          </p>

          <h2 className="text-2xl text-white font-semibold mt-8">2. Acesso e Pagamento</h2>
          <p>
            O acesso ao produto é concedido imediatamente após a confirmação do pagamento através da plataforma parceira. O acesso é considerado vitalício enquanto o serviço de hospedagem em nuvem que aloca os arquivos estiver operante. Fornecemos meios para que você faça o download local do conteúdo.
          </p>

          <h2 className="text-2xl text-white font-semibold mt-8">3. Garantia e Reembolso</h2>
          <p>
            Oferecemos uma garantia de 7 dias a partir da data da compra. Caso o usuário não esteja satisfeito com o material entregue, poderá solicitar o reembolso integral diretamente na plataforma de pagamento ou via suporte, sem necessidade de justificativa complexa.
          </p>

          <h2 className="text-2xl text-white font-semibold mt-8">4. Isenção de Responsabilidade Médica</h2>
          <p>
            Os GIFs e materiais apresentados têm caráter ilustrativo e didático. O GymGIFs não substitui a orientação presencial de um profissional de saúde ou de educação física. A execução de qualquer exercício demonstrado nos GIFs é de inteira responsabilidade do usuário e de seus alunos sob supervisão.
          </p>

          <h2 className="text-2xl text-white font-semibold mt-8">5. Alterações nos Termos</h2>
          <p>
            Podemos atualizar estes Termos de Uso periodicamente. Quaisquer alterações entrarão em vigor no momento da publicação nesta página.
          </p>

          <p className="pt-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </div>
  );
}
