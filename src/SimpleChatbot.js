import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { MessageSquare } from 'lucide-react'; 
import furiaLogo from './furia@logotyp.us.png';
import { handleUserRequest } from './chatbot/handleUserRequest';
import { buscarProximasPartidas } from './api/buscarPartidasAoVivo';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SimpleChatBot = ({isOpen, setIsOpen}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [modoQuiz, setModoQuiz] = useState(false);

  useEffect(() => {
    const initializeChat = async () => {
      if (isOpen) {
        await buscarProximasPartidas();

        setMessages([
          { 
            text: '⚡ Bem-vindo ao Chat Oficial da FURIA!', 
            isUser: false 
          }
        ]);

        setTimeout(() => {
          setOptions([
            { text: '🔴 Status ao Vivo', command: 'status' },
            { text: '📅 Próximos Jogos', command: 'próximos jogos' },
            { text: '🛒 Loja Oficial', command: 'site' },
            { text: '🎯 Quiz da FURIA', command: 'quiz' },
            { text: '🎥 Canal no YouTube', command: 'youtube' }

          ]);
          setShowOptions(true);
        }, 1000);
      }
    };

    initializeChat();
  }, [isOpen]);

  const handleOptionClick = async (command) => {
    if (command === 'site') {
      window.open('https://furia.gg', '_blank', 'noopener,noreferrer');
      return;
    }

    if (command === 'youtube') {
      window.open('https://www.youtube.com/@FURIAggCS', '_blank', 'noopener,noreferrer');
      return;
    }

    setMessages(prev => [...prev, { text: command, isUser: true }]);
    setShowOptions(false);
    setIsTyping(true);

    setTimeout(async () => {
      await handleUserRequest(command, addMessage, setOptions, setShowOptions, setModoQuiz);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    const userMessage = input;
    setInput('');
    setIsTyping(true);

    setTimeout(async () => {
      await handleUserRequest(userMessage, addMessage, setOptions, setShowOptions, setModoQuiz);
      setIsTyping(false);
    }, 1000);
  };

  const addMessage = (botReply) => {
    setMessages(prev => [...prev, { text: botReply, isUser: false }]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <ChatButton onClick={toggleChat}>
          <MessageSquare size={30} />
        </ChatButton>
      )}
      {isOpen && (
        <ChatContainer>
          <Header>
            Torcida FURIA 🔥
            <CloseButton onClick={toggleChat}>×</CloseButton>
          </Header>
          <MessagesContainer>
            {messages.map((msg, index) => (
              <Message key={index}>
                {!msg.isUser && <Avatar src={furiaLogo} alt="Bot Avatar" />}
                <Bubble isUser={msg.isUser}>{msg.text}</Bubble>
              </Message>
            ))}

            {isTyping && (
              <Message>
                <Avatar src={furiaLogo} alt="Bot Avatar" />
                <Bubble isUser={false}>Digitando...</Bubble>
              </Message>
            )}

            {/* Opções padrão (menu principal) */}
            {showOptions && !modoQuiz && (
              <OptionsButtons>
                {options.map((opt, idx) => (
                  <OptionButton 
                    key={idx}
                    onClick={() => handleOptionClick(opt.command)}
                    primary={idx === 0}
                  >
                    {opt.text}
                  </OptionButton>
                ))}
              </OptionsButtons>
            )}

            {/* Opções durante o quiz */}
            {modoQuiz && (
              <OptionsButtons>
                {options.map((opt, idx) => (
                  <OptionButton 
                    key={idx}
                    onClick={() => handleOptionClick(opt.command)}
                  >
                    {opt.text}
                  </OptionButton>
                ))}
              </OptionsButtons>
            )}
          </MessagesContainer>

          <InputContainer>
            <Input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Digite ou clique nas opções..."
            />
            <SendButton onClick={handleSend}>Enviar</SendButton>
          </InputContainer>
        </ChatContainer>
      )}
    </>
  );
};

// ========== ESTILOS ==========

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgb(0, 0, 0);
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  font-size: 24px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #37475a;
  }
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 350px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
  border: 1px solid #ccc;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Header = styled.div`
  background-color: #181818;
  color: white;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f7f7f7;
`;

const Message = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Avatar = styled.img`
  height: 40px;
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Bubble = styled.div`
  background-color: ${props => props.isUser ? '#d1e7dd' : '#e2e3e5'};
  color: black;
  padding: 10px 15px;
  border-radius: 18px;
  max-width: 70%;
  word-break: break-word;
  font-size: 14px;
`;

const OptionsButtons = styled.div`
  display: grid;
  gap: 10px;
  padding: 15px;
  background: #f0f2f5;
  border-top: 1px solid #ddd;
`;

const OptionButton = styled.button`
  background: ${props => props.primary ? '#ffcc00' : '#fff'};
  color: ${props => props.primary ? '#000' : '#333'};
  border: 2px solid #ffcc00;
  padding: 12px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  text-align: left;

  &:hover {
    background: #ffcc00;
    color: #000;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #f0f2f5;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
`;

const SendButton = styled.button`
  background-color: #ffcc00;
  border: none;
  color: #111;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f3a847;
  }
`;

export default SimpleChatBot;
