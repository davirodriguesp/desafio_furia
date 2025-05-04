
const TOKEN = "ujfsI8hyo2YnaNId8W3zxI7ndw1ssmQ5t93UcDWRkOD1HohNW-Q"; 

export async function buscarPartidasAoVivo() {
  try {
    const response = await fetch(`https://api.pandascore.co/csgo/matches/running?token=${TOKEN}`);
    if (!response.ok) throw new Error("Erro ao buscar partidas");

    const data = await response.json();

    const partidasFuria = data.filter(match =>
      match.opponents.some(opp => opp.opponent.name.toLowerCase().includes('furia'))
    );

    if (partidasFuria.length === 0) {
      return "🎮 A FURIA não está jogando ao vivo agora.";
    }

    let resposta = "🔥 Jogo ao vivo da FURIA:\n\n";
    partidasFuria.forEach(match => {
      resposta += `🏆 ${match.name}\nPlacar: ${match.results[0]?.score ?? 0} x ${match.results[1]?.score ?? 0}\n\n`;
    });

    return resposta;
  } catch (error) {
    console.error(error);
    return "⚠️ Não consegui buscar o jogo agora.";
  }
}

export async function buscarProximasPartidas() {
  try {
    const response = await fetch(`https://api.pandascore.co/csgo/matches/upcoming?token=${TOKEN}`);
    if (!response.ok) throw new Error("Erro ao buscar partidas");

    const data = await response.json();

    const partidasFuria = data.filter(match =>
      match.opponents.some(opp => opp.opponent.name.toLowerCase().includes('furia'))
    );

    if (partidasFuria.length === 0) {
      return "🎮 Não há partidas futuras da FURIA no momento.";
    }

    let resposta = "📅 Próximos jogos da FURIA:\n\n";
    partidasFuria.forEach(match => {
      resposta += `🏆 ${match.name}\n🗓️ ${new Date(match.scheduled_at).toLocaleString()}\n\n`;
    });

    return resposta;
  } catch (error) {
    console.error(error);
    return "⚠️ Não consegui buscar os próximos jogos agora.";
  }
}
