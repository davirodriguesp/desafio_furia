# 🦁 FURIA Chatbot Landing Page

[![React Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Styled Components Badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![GitHub Pages Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=github)](https://davirodriguesp.github.io/desafio_furia/)

Uma landing page interativa com um chatbot dedicado aos fãs do time de CS da FURIA.

Desenvolvido com React.

---

## 📸 Demonstração

Confira uma demonstração rápida da aplicação:

[▶️ Assistir Vídeo de Demonstração](https://drive.google.com/file/d/1eW4Fg5xNYNY10txW8VUFw0pHUeghGu8W/view?usp=sharing)
<br>
<br/>

## 🚀 Funcionalidades Principais

📊 **Status ao Vivo:** Acompanhe o placar e informações cruciais dos jogos da FURIA em tempo real.

🗓️ **Próximos Jogos:** Veja as datas, horários e adversários dos próximos confrontos.

🛒 **Loja Oficial:** Acesse rapidamente a loja e confira os produtos oficiais do time.

❓ **Quiz Interativo:** Teste seus conhecimentos sobre a FURIA e participe de outras interações divertidas.

🎥 **Canal no YouTube:** Canal Oficial da FURIA CS no Youtube.
<br>
<br/>

## 🛠️ Tecnologias Utilizadas
* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **Create React App:** Configuração inicial do ambiente React.
* **styled-components:** CSS-in-JS para estilização dos componentes.
* **react-chatbot-kit:** Kit para criação de chatbots em React.
* **Axios:** Cliente HTTP para realizar requisições às APIs.
<br/>

## ⚠️ Observações Importantes sobre APIs
Atenção: Algumas funcionalidades do chatbot dependem de APIs externas (como status ao vivo e próximos jogos).

* **Localmente:** Tudo funciona como esperado. ✅
* **Deploy (GitHub Pages):** Essas funcionalidades podem não funcionar devido a restrições de CORS (Cross-Origin Resource Sharing) impostas pelas APIs. 🚧
<br/>

## 💻 Como Rodar o Projeto Localmente
Siga estes passos para configurar e executar o projeto em sua máquina.

### Pré-requisitos:

* Node.js (versão 14 ou superior)
* npm (geralmente instalado junto com o Node.js)
  
### Instalação:

1. Clone o repositório:
git clone [https://github.com/davirodriguesp/desafio_furia.git](https://github.com/davirodriguesp/desafio_furia.git)

2. Navegue até o diretório:
cd desafio_furia

3. Instale as dependências:
npm install

### Execução:

1. Inicie o servidor de desenvolvimento:
npm start

2. Acesse no navegador: Abra https://www.google.com/search?q=http://localhost:3000
<br/>

## 🌐 Deploy no GitHub Pages
O projeto está disponível online em:

👉 https://davirodriguesp.github.io/desafio_furia/

Para publicar atualizações no GitHub Pages, execute o comando:
**npm run deploy**
<br/>
## 📁 Estrutura do Projeto
desafio_furia/

├── public/             ## Arquivos estáticos, index.html

├── src/                ## Código-fonte da aplicação React

│   ├── api/            ## Lógica de requisições a API.

│   ├── components/     ## Componentes Reat (options)

│   ├── chatbot/        ## Configuração e lógica do chatbot

│   ├── App.js          ##  Componente principal da aplicação

│   └── index.js        ## Ponto de entrada da aplicação

│   ├─ SimpleChatbot.js ## Componente do chatbot

├── .gitignore          ## Arquivos ignorados pelo Git

├── package.json        ## Dependências e scripts do projeto

├── package-lock.json   ## Lockfile das dependências

└── README.md           ## Este arquivo :)

## 📋 Como Contribuir
Contribuições são sempre bem-vindas!

Faça um Fork do projeto. 

Crie uma nova Branch (git checkout -b feature/sua-feature).

Faça Commit das suas alterações (git commit -m 'Adiciona nova feature').

Faça Push para a Branch (git push origin feature/sua-feature).

Abra um Pull Request.

Para sugestões ou reportar bugs, por favor, abra uma Issue.   

## 🙋‍♂️ Autor
Feito por Davi Rodrigues
