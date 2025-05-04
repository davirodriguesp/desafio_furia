class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("status") || lowerCase.includes("ao vivo") || lowerCase.includes("partida")) {
      this.actionProvider.handleLiveStatus();
    } else if (lowerCase.includes("agenda") || lowerCase.includes("próximos jogos")) {
      this.actionProvider.handleNextMatches();
    } else {
      this.actionProvider.handleStart(); // Mostra opções de novo
    }
  }
}

export default MessageParser;
