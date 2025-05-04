import { buscarPartidasAoVivo, buscarProximasPartidas } from '../api/buscarPartidasAoVivo';

const quiz = [
  {
    pergunta: "🏆 Em que ano a FURIA foi fundada?",
    opcoes: ["2015", "2017", "2018"],
    resposta: "2017"
  },
  {
    pergunta: "🧠 Em que ano a FURIA participou pela primeira vez de um Major de CS:GO?",
    opcoes: ["2017", "2019", "2020"],
    resposta: "2019"
  },
  {
    pergunta: "🎯 Qual destes jogadores fez parte da formação original da FURIA em 2017?",
    opcoes: ["KSCERATO", "yuurih", "drop"],
    resposta: "yuurih"
  },
  {
    pergunta: "🇧🇷 Onde fica a Gaming House da FURIA nos Estados Unidos?",
    opcoes: ["Los Angeles", "Miami", "San Diego"],
    resposta: "Miami"
  },
  {
    pergunta: "💣 Qual foi o melhor resultado da FURIA em um Major até abril de 2025?",
    opcoes: ["Quartas de final", "Semifinal", "Final"],
    resposta: "Semifinal"
  },
  {
    pergunta: "🔥 Qual animal representa o símbolo da FURIA?",
    opcoes: ["Leão", "Pantera", "Tigre"],
    resposta: "Pantera"
  },
  {
    pergunta: "🧥 Quem é o fundador da FURIA?",
    opcoes: ["André Akkari", "FalleN", "Guerri"],
    resposta: "André Akkari"
  }
];

let quizIndex = 0;
let acertos = 0;

export async function handleUserRequest(message, addBotMessage, setOptions, setShowOptions, setModoQuiz) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage === 'sair do quiz') {
    addBotMessage("👋 Você saiu do quiz. Aqui estão as opções novamente:");
    quizIndex = 0;
    acertos = 0;
    setModoQuiz(false);
    setOptions([
      { text: '🔴 Status ao Vivo', command: 'status' },
      { text: '📅 Próximos Jogos', command: 'próximos jogos' },
      { text: '🛒 Loja Oficial', command: 'site' },
      { text: '🎯 Quiz da FURIA', command: 'quiz' },
      { text: '🎥 Canal no YouTube', command: 'youtube' }

    ]);
    setShowOptions(true);
    return;
  }
  
  if (lowerMessage.includes('quiz')) {
    quizIndex = 0;
    acertos = 0;
    addBotMessage("🎯 Vamos começar o Quiz da FURIA!");
    setModoQuiz(true);
    setShowOptions(false);
    sendQuizQuestion(addBotMessage, setOptions, setShowOptions, setModoQuiz);
    return;
  }

  if (quizIndex > 0 && quizIndex <= quiz.length) {
    const respostaCorreta = quiz[quizIndex - 1].resposta.toLowerCase();
    if (lowerMessage === respostaCorreta.toLowerCase()) {
      acertos++;
      addBotMessage("✅ Resposta correta!");
    } else {
      addBotMessage(`❌ Resposta incorreta!`);
    }
    sendQuizQuestion(addBotMessage, setOptions, setShowOptions, setModoQuiz);
    return;
  }

  if (
    lowerMessage.includes('status') ||
    lowerMessage.includes('jogo ao vivo') ||
    lowerMessage.includes('partida')
  ) {
    const liveStatus = await buscarPartidasAoVivo();
    addBotMessage(liveStatus);
    setOptions([
      { text: '🔴 Status ao Vivo', command: 'status' },
      { text: '📅 Próximos Jogos', command: 'próximos jogos' },
      { text: '🛒 Loja Oficial', command: 'site' },
      { text: '🎯 Quiz da FURIA', command: 'quiz' },
      { text: '🎥 Canal no YouTube', command: 'youtube' }

    ]);
    setShowOptions(true);
    return;
  } else if (
    lowerMessage.includes('próximos jogos') ||
    lowerMessage.includes('proximo jogo')
  ) {
    const proximos = await buscarProximasPartidas();
    addBotMessage(proximos);
    setOptions([
      { text: '🔴 Status ao Vivo', command: 'status' },
      { text: '📅 Próximos Jogos', command: 'próximos jogos' },
      { text: '🛒 Loja Oficial', command: 'site' },
      { text: '🎯 Quiz da FURIA', command: 'quiz' },
      { text: '🎥 Canal no YouTube', command: 'youtube' }

    ]);
    setShowOptions(true);
    return;
  } else if (lowerMessage.includes('site')) {
    addBotMessage('🌐 Clique no botão acima para acessar o site oficial da FURIA!');
    setOptions([
      { text: '🔴 Status ao Vivo', command: 'status' },
      { text: '📅 Próximos Jogos', command: 'próximos jogos' },
      { text: '🛒 Loja Oficial', command: 'site' },
      { text: '🎯 Quiz da FURIA', command: 'quiz' },
      { text: '🎥 Canal no YouTube', command: 'youtube' }

    ]);
    setShowOptions(true);
    return;
  }  

  else if (lowerMessage.includes('youtube')) {
    addBotMessage('▶️ Clique no botão acima para visitar o canal da FURIA no YouTube!');
    setOptions([
      { text: '🔴 Status ao Vivo', command: 'status' },
      { text: '📅 Próximos Jogos', command: 'próximos jogos' },
      { text: '🛒 Loja Oficial', command: 'site' },
      { text: '🎯 Quiz da FURIA', command: 'quiz' },
      { text: '🎥 Canal no YouTube', command: 'youtube' }
    ]);
    setShowOptions(true);
    return;
  }
  
  
}

function sendQuizQuestion(addBotMessage, setOptions, setShowOptions, setModoQuiz) {
  if (quizIndex < quiz.length) {
    const q = quiz[quizIndex];
    addBotMessage(`❓ ${q.pergunta}`);
    setOptions(q.opcoes.map(op => ({ text: op, command: op })).concat([
      { text: "❌ Sair do Quiz", command: "sair do quiz" }
    ]));
    quizIndex++;
  } else {
    addBotMessage(`🎉 Fim do quiz! Você acertou ${acertos} de ${quiz.length} perguntas.`);
    quizIndex = 0;
    acertos = 0;
    setOptions([
      { text: '🔴 Status ao Vivo', command: 'status' },
      { text: '📅 Próximos Jogos', command: 'próximos jogos' },
      { text: '🛒 Loja Oficial', command: 'site' },
      { text: '🎯 Quiz da FURIA', command: 'quiz' },
      { text: '🎥 Canal no YouTube', command: 'youtube' }

    ]);
    setShowOptions(true);
    setModoQuiz(false);
  }
}
