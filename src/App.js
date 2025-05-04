import React, {useState} from 'react';
import styled from 'styled-components';

import furiaLogo from './furia@logotyp.us.png'; 
import furiaBanner from './furia_banner.gif'; 
import iconLoja from './loja.png'; 
import iconChatAoVivo from './bater-papo.png'; 
import iconEnquetes from './enquete.png'; 
import iconConteudoExclusivo from './exclusivo.png'; 
import iconTorneios from './torneio.png'; 
import iconComunidade from './comunidade.png'; 
import iconWhatsapp from './whatsapp.png'; 

import SimpleChatbot from './SimpleChatbot';

// Estilos globais para o body
const GlobalStyle = styled.div`
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #181818;
  color: #fff;
`;

// Container principal para centralizar o conteúdo
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

// Estilos para o cabeçalho
const HeaderContainer = styled.header`
  background-color: #222;
  padding: 15px 0;
  border-bottom: 2px solid #ffcc00; 
`;

const HeaderContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 110px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

// Estilos para a seção Hero
const HeroSection = styled.section`
  background-image: url(${furiaBanner}); 
  background-size: contain;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin-bottom: 40px;
`;

const HeroContent = styled(Container)`
  max-width: 1000px;
   text-align: center;
  `;

const HeroTitle = styled.h1`
  font-size: 3.5em;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2.8em;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  text-align: center;

  margin-bottom: 30px;
`;

const CallToAction = styled.a`
  display: inline-block;
  background-color: #ffcc00;
  color: #222;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #e6b800;
  }
`;

// Estilos para a seção de Recursos
const RecursosSection = styled.section`
  padding: 30px 0;
  background-color: #222;
  margin-bottom: 40px;
`;

const RecursosTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 30px;
`;

const RecursosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Recurso = styled.div`
  background-color: #181818;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
`;

const RecursoIcon = styled.img`
  height: 80px;
  margin-bottom: 15px;
`;

const RecursoTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const RecursoDescription = styled.p`
  line-height: 1.5;
  color: #ccc;
`;

// Estilos para a seção Como Funciona
const ComoFuncionaSection = styled.section`
  padding: 1px 0;
  margin-bottom: 40px;
`;

const ComoFuncionaTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 30px;
`;

// Estilos para o rodapé
const FooterContainer = styled.footer`
  background-color: #111;
  padding: 20px 0;
  text-align: center;
  font-size: 0.9em;
  color: #777;
  border-top: 1px solid #333;
`;

const CenteredIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px auto;
  display: block;
`;

const CenteredButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const WhatsappContainer = styled.div`
  background-color: #222;
  padding: 20px;
  border-radius: 8px;
  max-width: 900px;
  margin: 0 auto;
`;

const WhatsappText = styled.p`
  font-size: 1.2em;
  line-height: 1.8;
  color: #ccc;
  text-align: center;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <GlobalStyle>
      <HeaderContainer>
        <HeaderContent>
          <Logo src={furiaLogo} alt="Logo FURIA" />
          <HeroContent>
          <HeroTitle>Seu Espaço para VIBRAR com a FURIA no CS!</HeroTitle>
          <HeroSubtitle>Conecte-se com outros torcedores apaixonados, acompanhe cada lance e interaja com a comunidade FURIA.</HeroSubtitle>
          <CallToAction onClick={() => setIsOpen(true)}>Participe Agora!</CallToAction>

          </HeroContent>
        </HeaderContent>
      </HeaderContainer>

      <main>
        <HeroSection>
          
          <HeroContent>
            
          </HeroContent>
        </HeroSection>

        <RecursosSection>

          <Container>

            <RecursosTitle>O que você encontra no nosso Chat:</RecursosTitle>
            <RecursosGrid>
              <Recurso>
                <RecursoIcon src={iconLoja} alt="Ícone da Loja" />
                <RecursoTitle>Loja Oficial</RecursoTitle>
                <RecursoDescription>Garanta itens oficiais e exclusivos para torcer com estilo e vestir a camisa da FURIA.</RecursoDescription>
              </Recurso>
              <Recurso>
                <RecursoIcon src={iconChatAoVivo} alt="Ícone de Chat ao Vivo" />
                <RecursoTitle>Bate-Papo em Tempo Real</RecursoTitle>
                <RecursoDescription>Acompanhe o status ao vivo das partidas, receba notícias sobre os próximos jogos e muito mais. Interaja e fique por dentro de tudo da FURIA!</RecursoDescription>
              </Recurso>
              <Recurso>
                <RecursoIcon src={iconEnquetes} alt="Ícone de Enquetes" />
                <RecursoTitle>Quizz da FURIA</RecursoTitle>
                <RecursoDescription>Participe de enquetes divertidas, teste seus conhecimentos sobre a FURIA e interaja de forma dinâmica.</RecursoDescription>
              </Recurso>
              <Recurso>
                <RecursoIcon src={iconConteudoExclusivo} alt="Ícone de Conteúdo Exclusivo" />
                <RecursoTitle>Conteúdo Exclusivo</RecursoTitle>
                <RecursoDescription>Acesse bastidores, entrevistas com jogadores e conteúdos especiais que você não encontra em outro lugar.</RecursoDescription>
              </Recurso>
              <Recurso>
                <RecursoIcon src={iconTorneios} alt="Ícone de Torneios" />
                <RecursoTitle>Acompanhamento de Torneios</RecursoTitle>
                <RecursoDescription>Receba atualizações de status dos jogos, placares ao vivo e análises de cada partida da FURIA.</RecursoDescription>
              </Recurso>
              <Recurso>
                <RecursoIcon src={iconComunidade} alt="Ícone de Comunidade" />
                <RecursoTitle>Comunidade Engajada</RecursoTitle>
                <RecursoDescription>Faça parte de uma comunidade apaixonada, troque ideias, faça amigos e mostre seu apoio à FURIA.</RecursoDescription>
              </Recurso>
            </RecursosGrid>
          </Container>
        </RecursosSection>

        <ComoFuncionaSection id="junte-se">
    <CenteredIcon src={iconWhatsapp} alt="Ícone WhatsApp" />
    <ComoFuncionaTitle>Participe pelo WhatsApp</ComoFuncionaTitle>

    <WhatsappContainer>
      <WhatsappText>
        Para fazer parte da comunidade da FURIA, você será redirecionado para o nosso grupo oficial no WhatsApp.
        Lá você poderá conversar com outros torcedores, acompanhar atualizações importantes, participar de enquetes,
        interagir durante os jogos e receber conteúdos exclusivos diretamente no seu celular.
      </WhatsappText>
    </WhatsappContainer>

    <CenteredButton>
      <CallToAction href="https://wa.me/5511993404466" target="_blank">
        Entrar no Grupo no WhatsApp
      </CallToAction>
    </CenteredButton>
</ComoFuncionaSection>
      </main>
      <SimpleChatbot isOpen={isOpen} setIsOpen={setIsOpen}/>
      <FooterContainer>
        <Container>&copy; 2025 Chat de Fãs FURIA. Todos os direitos reservados.</Container>
      </FooterContainer>
    </GlobalStyle>
  );
}

export default App;