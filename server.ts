import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with client option check
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
    console.log('Gemini API client initialized successfully.');
  } catch (error) {
    console.error('Failed to initialize Gemini API Client:', error);
  }
} else {
  console.log('Gemini API Key missing or set to placeholder. Server will fallback to high-end rule-only analyzer gracefully.');
}

// -------------------------------------------------------------
// API Endpoints
// -------------------------------------------------------------

// API health endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    aiEnabled: !!ai,
  });
});

// AI Triage and Analysis endpoint
app.post('/api/triage', async (req, res) => {
  const { text, clientData } = req.body;

  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return res.status(400).json({ error: 'A descrição do seu caso ou dúvida é obrigatória.' });
  }

  const queryText = text.trim();

  // If Gemini client is activated, use LLM
  if (ai) {
    try {
      const systemInstruction = `Você é o Minerva AI, o assistente virtual de inteligência jurídica de altíssimo nível do escritório "Cruz & Associados | Advocacia Premium". 
Seu papel é receber e triar o relato do potencial cliente com extrema sofisticação, profissionalismo e tom de voz sério e confiável.

Analise o texto fornecido pelo usuário e gere uma resposta em formato JSON VÁLIDO.
Sua resposta DEVE ser um objeto JSON estrito com as seguintes chaves:
1. "area": Um dos valores exatamente: "Criminal", "Civil", "Previdenciário", "Trabalhista" ou "Consultivo Geral".
2. "urgency": Um dos valores: "CRITICAL" (para prisões em flagrante, busca e apreensão ativa, custódias imediadas, violência doméstica urgente), "URGENT" (prazos judiciais iminentes, demissões recentes sem verbas, perda súbita de benefício) ou "STANDARD" (planejamento tributário, aposentadoria a longo prazo, contratos preventivos).
3. "analysis": Uma breve análise jurídica (2 a 4 parágrafos) em português, muito acolhedora, empática, profissional e técnica (mas sem floreios exagerados ou jargões incompreensíveis). Explique do que se trata a situação em linhas gerais, os prováveis direitos envolvidos sob a ótica da legislação brasileira e mostre autoridade intelectual. Deixe claro que esta é uma análise preliminar orientativa realizada por IA.
4. "actionItems": Uma lista de 3 a 4 conselhos imediatos e pragmáticos do que a pessoa deve fazer AGORA (ex: "Evite assinar qualquer documento sem assistência", "Reúna as Carteiras de Trabalho e extratos do CNIS", "Mantenha a calma e exerça seu direito constitucional ao silêncio até a chegada de nosso advogado de plantão").
5. "recommendedLawyer": Um cargo fictício elegante do parceiro responsável do escritório para esse caso (ex: "Dr. Andreson Cruz (Diretor de Práticas Criminais)", "Dra. Carolina Castro (Especialista em Planejamento Previdenciário)", "Dr. Fernando Santos (Head de Resolução de Conflitos Civis)").

Siga rigorosamente a estrutura de JSON solicitada para que possamos parsear de forma automatizada no front-end. Não inclua Markdown, blocos de código com a palavra "json" ou textos extras fora do objeto JSON.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: queryText,
        config: {
          systemInstruction: systemInstruction,
          responseMimeType: 'application/json',
          temperature: 0.2, // low temperature for precise classification and JSON structure
        },
      });

      const responseText = response.text || '';
      console.log('Gemini triage response:', responseText);

      try {
        const parsedTriage = JSON.parse(responseText.trim());
        return res.json(parsedTriage);
      } catch (parseError) {
        console.error('Failed to parse Gemini response as JSON. Response was:', responseText, parseError);
        // Fallback to structured parsing/safety if JSON was contaminated
      }
    } catch (genAiError) {
      console.error('Gemini API call failed, invoking intelligent fallback:', genAiError);
    }
  }

  // Elegant analytical fallback engine (in case Gemini is offline or API key is not supplied)
  const normalizedText = queryText.toLowerCase();
  let area = 'Consultivo Geral';
  let urgency: 'CRITICAL' | 'URGENT' | 'STANDARD' = 'STANDARD';
  let analysis = '';
  let actionItems: string[] = [];
  let recommendedLawyer = 'Dr. Andreson Cruz (Diretor Fundador)';

  if (
    normalizedText.includes('preso') ||
    normalizedText.includes('prisao') ||
    normalizedText.includes('delegacia') ||
    normalizedText.includes('policia') ||
    normalizedText.includes('flagrante') ||
    normalizedText.includes('algema') ||
    normalizedText.includes('custodia') ||
    normalizedText.includes('habeas') ||
    normalizedText.includes('juri') ||
    normalizedText.includes('trafico') ||
    normalizedText.includes('crime') ||
    normalizedText.includes('criminoso') ||
    normalizedText.includes('detido') ||
    normalizedText.includes('mandado') ||
    normalizedText.includes('apreensao')
  ) {
    area = 'Criminal';
    urgency = 'CRITICAL';
    recommendedLawyer = 'Dr. Andreson Cruz (Sócio-Diretor Geral de Defesa Criminal)';
    analysis = 'Identificamos uma situação de cunho penal com indicativo de alta sensibilidade e urgência iminente. Assuntos relacionados à liberdade individual, detenções, buscas ou inquéritos exigem reação tática imediata nas primeiras horas. Nossa banca criminalista possui prontidão 24 horas para intervenção em audiências de custódia, impetração de Habeas Corpus de emergência e acompanhamento em órgãos policiais.';
    actionItems = [
      'Exerça seu direito constitucional ao silêncio na delegacia, declarando que se manifestará apenas em juízo com seu advogado.',
      'Não assine qualquer termo de declaração ou depoimento sem a leitura analítica e presença de um especialista criminal.',
      'Reúna dados de testemunhas e eventuais gravações ou documentos temporais que ajudem no esclarecimento imediato do fato.',
      'Clique no botão de emergência criminal no canto de sua tela para falar direto com o nosso plantonista de custódia.'
    ];
  } else if (
    normalizedText.includes('aposentar') ||
    normalizedText.includes('aposentadoria') ||
    normalizedText.includes('previdencia') ||
    normalizedText.includes('inss') ||
    normalizedText.includes('bpc') ||
    normalizedText.includes('loas') ||
    normalizedText.includes('doenca') ||
    normalizedText.includes('auxilio') ||
    normalizedText.includes('contribuir') ||
    normalizedText.includes('tempo de servico') ||
    normalizedText.includes('cnis')
  ) {
    area = 'Previdenciário';
    urgency = 'STANDARD';
    recommendedLawyer = 'Dra. Carolina Castro (Sênior em Direito Previdenciário)';
    analysis = 'Constatamos uma consulta voltada para direitos de seguridade social junto ao INSS. O planejamento previdenciário minucioso evita o descarte de tempo de contribuição e assegura o maior benefício financeiro vitalício possível. Seja para aposentadorias especiais, revisões de aposentadoria ou benefícios assistenciais como o BPC/LOAS, o acompanhamento analítico previne indeferimentos burocráticos.';
    actionItems = [
      'Baixe o seu extrato de contribuições CNIS atualizado diretamente através do portal eletrônico Meu INSS.',
      'Reúna todas as antigas Carteiras de Trabalho e carnês físicos de contribuição individual para salvaguardar divergências de datas.',
      'Solicite laudos médicos completos e atualizados em caso de pedidos envolvendo auxílio por incapacidade temporária.',
      'Agende uma auditoria de planejamento previdenciário para traçar exatamente o melhor momento tributário e temporal de sua migração para o benefício.'
    ];
  } else if (
    normalizedText.includes('demitido') ||
    normalizedText.includes('demissao') ||
    normalizedText.includes('trabalho') ||
    normalizedText.includes('trabalhista') ||
    normalizedText.includes('patrao') ||
    normalizedText.includes('empresa') ||
    normalizedText.includes('rescisao') ||
    normalizedText.includes('associo') ||
    normalizedText.includes('hora extra') ||
    normalizedText.includes('horas extras') ||
    normalizedText.includes('carteira') ||
    normalizedText.includes('assedi') ||
    normalizedText.includes('fgts')
  ) {
    area = 'Trabalhista';
    urgency = 'URGENT';
    recommendedLawyer = 'Dr. Marcos Albuquerque (Especialista em Direito do Trabalho Premium)';
    analysis = 'A análise demonstra uma potencial violação de deveres contratuais e direitos assegurados pela Consolidação das Leis do Trabalho (CLT). Situações como rescisão indireta por faltas patronais, assédio do ambiente laboral, horas extras não contabilizadas ou ausência de recolhimento de FGTS necessitam de assessoria consultiva focada para mitigar perdas ou iniciar reclamação com precisão tática e evidências sólidas.';
    actionItems = [
      'Faça registro seguro (capturas de tela, e-mails, áudios) de conversas, ordens e situações que comprovem horas extras acumuladas ou conduta inadequada.',
      'Guarde cópias holísticas de seus últimos holerites, extratos das contas vinculadas de FGTS e do termo de rescisão contratual.',
      'Não assine acordos de quitação geral de obrigações sem prévia revisão de um jurista especializado de sua confiança.',
      'Inicie imediatamente a conciliação tática para mensurar se há viabilidade de acordo extrajudicial rápido ou necessidade de litígio.'
    ];
  } else if (
    normalizedText.includes('contrato') ||
    normalizedText.includes('indeniza') ||
    normalizedText.includes('danos') ||
    normalizedText.includes('dano mor') ||
    normalizedText.includes('cobranca') ||
    normalizedText.includes('familia') ||
    normalizedText.includes('divorcio') ||
    normalizedText.includes('inventario') ||
    normalizedText.includes('imovel') ||
    normalizedText.includes('propriedade')
  ) {
    area = 'Civil';
    urgency = 'URGENT';
    recommendedLawyer = 'Dr. Fernando Santos (Diretor de Práticas Cíveis e Contratos)';
    analysis = 'Verificamos uma demanda de natureza cível envolvendo relações obrigacionais, contratos, patrimônio familiar ou reparação civil por perdas e danos. O assessoramento estratégico visa garantir equilíbrio negocial, proteção patrimonial e, quando necessário, judicialização contundente para compensar perdas de honra ou patrimônio em todo o território nacional.';
    actionItems = [
      'Conserve todos os contratos, e-mails, trocas de mensagens instantâneas e notificações que fundamentam a relação jurídica desgastada.',
      'Em casos de danos materiais ou morais, providencie atas notariais ou laudos técnicos competentes para blindagem probatória de sua tese.',
      'Prefira estabelecer canais formais e escritos para qualquer tentativa de negociação ou notificação de descumprimento de prazos.',
      'Agende um alinhamento analítico direto estruturado com nossa advocacia civil para definir caminhos amigáveis ou medidas liminares emergenciais.'
    ];
  } else {
    analysis = 'Recebemos as informações sobre a sua situação jurídica na nossa plataforma premium. Embora precise de uma identificação pormenorizada em reunião privada, compreendemos o seu desejo de estabelecer segurança, sigilo absoluto e contundência em qualquer questão. Nosso corpo jurídico está pronto para providenciar soluções sob medida para garantir a sua plena segurança civil ou corporativa.';
    actionItems = [
      'Organize um sumário cronológico dos fatos relevantes e ordene os documentos associados mais fundamentais.',
      'Evite realizar discussões informais ou promessas de pagamento/quitação com a parte contrária antes da assessoria de nossa equipe.',
      'Agende sua chamada reservada de Alinhamento Estratégico com nossa banca para elaboração do parecer jurídico personalizado.'
    ];
  }

  res.json({
    area,
    urgency,
    analysis,
    actionItems,
    recommendedLawyer,
    isFallback: !ai,
  });
});

// -------------------------------------------------------------
// Vite and Static File Serving Middleware
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Running in DEVELOPMENT mode. Initializing Vite middleware...');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    // This handles all client-side rendering and asset hot reloading
    app.use(vite.middlewares);
  } else {
    console.log('Running in PRODUCTION mode. Serving pre-compiled static assets...');
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Slipped cleanly onto Port ${PORT}. Running on http://localhost:${PORT}`);
  });
}

startServer();
