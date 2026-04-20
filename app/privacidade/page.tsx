import Link from 'next/link';

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#AAAAAA] font-['Inter',system-ui] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#00E676] hover:underline mb-8 inline-block">&larr; Voltar para o início</Link>
        <h1 className="text-4xl text-white font-bold mb-8">Política de Privacidade</h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>
            A sua privacidade é uma prioridade para o <strong>GymGIFs</strong>. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
          </p>

          <h2 className="text-2xl text-white font-semibold mt-8">1. Coleta de Informações</h2>
          <p>
            Coletamos informações pessoais que você nos fornece voluntariamente durante o processo de compra e uso do site, como:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nome completo;</li>
            <li>Endereço de e-mail;</li>
            <li>Número de telefone/WhatsApp;</li>
            <li>Dados de navegação, cookies e métricas de desempenho (via ferramentas analíticas).</li>
          </ul>

          <h2 className="text-2xl text-white font-semibold mt-8">2. Uso das Informações</h2>
          <p>
            Seus dados são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Garantir a entrega do produto digital adquirido;</li>
            <li>Enviar informações de suporte técnico, atualizações e comunicação administrativa;</li>
            <li>Responder às suas dúvidas e mensagens enviadas (ex: via WhatsApp);</li>
            <li>Melhorar nossa plataforma, interface e experiência de navegação do usuário.</li>
          </ul>

          <h2 className="text-2xl text-white font-semibold mt-8">3. Compartilhamento e Segurança</h2>
          <p>
            <strong>Nós não vendemos, alugamos ou trocamos suas informações com terceiros.</strong> Os dados de pagamento são processados através de gateways de pagamento extremamente seguros e criptografados (ex: plataforma de checkout em ambiente seguro). O GymGIFs não tem acesso aos dados sensíveis do seu cartão de crédito.
          </p>

          <h2 className="text-2xl text-white font-semibold mt-8">4. Cookies</h2>
          <p>
            Utilizamos &quot;cookies&quot; e tecnologias de rastreamento semelhantes para analisar tendências globais do site, gerenciar a plataforma, rastrear a jornada de navegação do usuário e reunir dados demográficos com intuito de marketing analítico.
          </p>
          <p>
            Você pode desativar o uso de cookies na configuração nativa de navegação do seu browser, embora isso possa afetar algumas funcionalidades do nosso ou de outros sites.
          </p>

          <h2 className="text-2xl text-white font-semibold mt-8">5. Seus Direitos</h2>
          <p>
            É seu direito solicitar a exclusão total ou parcial de seus dados das nossas listas de contatos de suporte e marketing. Para isso, basta entrar em contato conosco através de nossos canais oficiais de comunicação informados na página principal.
          </p>

          <p className="pt-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </div>
  );
}
