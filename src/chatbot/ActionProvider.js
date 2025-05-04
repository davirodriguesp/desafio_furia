import { buscarPartidasAoVivo, buscarProximasPartidas } from "../api/buscarPartidasAoVivo"; 

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleStart() {
    const message = this.createChatBotMessage("Olá! Como posso te ajudar?", {
      widget: "options",
    });
    this.addMessageToState(message);
  }

  async handleLiveStatus() {
    const resposta = await buscarPartidasAoVivo();
    const botMessage = this.createChatBotMessage(resposta);
    this.addMessageToState(botMessage);
  }

  async handleNextMatches() {
    const resposta = await buscarProximasPartidas();
    const botMessage = this.createChatBotMessage(resposta);
    this.addMessageToState(botMessage);
  }
  
  handleUserRequest(message) {
    const userMessage = this.createChatBotMessage(`Você disse: ${message}`);
    this.addMessageToState(userMessage);
  }

  addMessageToState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
