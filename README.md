
# 🚨 SafeAlert

**SafeAlert** é uma plataforma backend desenvolvida em **Node.js** que tem como objetivo oferecer uma solução de **monitoramento de segurança pessoal**, com foco em idosos, crianças e pessoas em situação de vulnerabilidade. Através de alertas de emergência enviados por dispositivos móveis ou vestíveis, o sistema notifica contatos de confiança previamente cadastrados, promovendo mais **segurança, agilidade e tranquilidade**.

---

### 📷 Vídeo de apresentação

```https://youtu.be/GagfQXKEFX8?si=u1xeWI54DeP7wgsw```

---

## 🧠 Proposta da Startup

### 🎯 Problema a ser resolvido

Em situações de emergência (quedas, ataques cardíacos, desaparecimentos ou assaltos), muitas pessoas não conseguem pedir ajuda de forma rápida e eficiente.

### 👥 Público-alvo

- Idosos que vivem sozinhos
- Crianças que precisam de monitoramento
- Pessoas com problemas de saúde
- Trabalhadores em áreas de risco
- Famílias que querem mais segurança

### 💡 Solução

SafeAlert permite o envio de **alertas em tempo real** para contatos de confiança com a **localização e tipo do incidente**, tudo com um simples toque ou ativação via pulseira inteligente.

---

## 🚀 Funcionalidades da API

- ✅ Cadastro e autenticação de usuários (com JWT)
- ✅ Registro, listagem e consulta de alertas
- ✅ Consulta de localização dos alertas
- ✅ Segurança nas rotas privadas com autenticação
- ✅ Documentação interativa com Swagger
- ✅ Testes automatizados para garantir funcionamento e segurança

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** – Ambiente de execução do backend
- **Express** – Framework web
- **JWT** – Autenticação com tokens
- **Bcrypt** – Criptografia de senhas
- **Swagger** – Documentação interativa da API
- **Jest** – Testes automatizados
- **SQLite** – Banco de dados relacional
- **Mongoose** – ORM/ODM para manipulação dos dados
- **Insomnia** – Ferramentas para testar requisições

---

## 📁 Estrutura de Pastas

```
ProjetoHackteen-SafeAlert/
├── node_modules/
├── src/
│ ├── config/
│ │ ├── database.js
│ │ ├── sequelize.js
│ │ └── swagger.js
│ ├── controllers/
│ │ ├── alertaController.js
│ │ ├── autenController.js
│ │ └── controller.js
│ ├── middleware/
│ │ └── autenticacao.js
│ ├── models/
│ │ ├── alert.js
│ │ ├── contact.js
│ │ └── user.js
│ ├── routes/
│ │ ├── alertaRoutes.js
│ │ ├── autenRotas.js
│ │ └── routes.js
│ └── testes/
│ └── auten.test.js
├── .env
├── app.js
├── jest_config.js
├── package-lock.json
├── package.json
├── safealert.sqlite
└── server.js
```

---

## 🔒 Autenticação

Utilizamos **JWT (JSON Web Token)** para proteger rotas privadas. O usuário precisa estar autenticado para acessar funcionalidades como alertas e contatos.

---

## 📌 Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/ViniciusRibeiroLopes/ProjetoHackteen-SafeAlert.git
cd ProjetoHackteen-SafeAlert
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```env
PORT=3000
JWT_SECRET=sua_chave_secreta
```

4. Inicie o servidor:

```bash
npm start
```

---

## 🧪 Rodando os Testes

```bash
npm test
```

---

## 🧠 Impacto Social

SafeAlert contribui diretamente com a **redução de riscos**, melhora da **qualidade de vida** e oferece **respostas mais rápidas** em situações de urgência, com grande impacto **social e humano**.

---

## 📷 Logotipo

![Logo da startup SafeAlert](https://github.com/user-attachments/assets/ae63537d-6462-48a6-b518-816b379908b7)

---

## 💬 Slogan

> “A segurança de quem você ama, na palma da mão.”

---

## 👨‍💻 Equipe

- Enzo G. Camillo (Desenvolvedor Backend)
- Kevin Ramos (Designer e Documentação)
- Vinícius R. Lopes (Desenvolvedor Backend e Documentação)
