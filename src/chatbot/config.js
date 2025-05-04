import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./components/Options";

const config = {
  botName: "FURIA Bot",
  initialMessages: [
    createChatBotMessage("Olá! Bem-vindo ao atendimento da FURIA.", {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
