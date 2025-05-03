
# 🚨 SafeAlert

**SafeAlert** é uma plataforma backend desenvolvida em **Node.js** que tem como objetivo oferecer uma solução de **monitoramento de segurança pessoal**, com foco em idosos, crianças e pessoas em situação de vulnerabilidade. Através de alertas de emergência enviados por dispositivos móveis ou vestíveis, o sistema notifica contatos de confiança previamente cadastrados, promovendo mais **segurança, agilidade e tranquilidade**.

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
- ✅ Cadastro e gerenciamento de contatos de emergência
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
- **PostgreSQL** ou **MongoDB** – Banco de dados relacional ou NoSQL
- **Prisma** ou **Mongoose** – ORM/ODM para manipulação dos dados
- **Insomnia** ou **Postman** – Ferramentas para testar requisições

---

## 📁 Estrutura de Pastas

```
SafeAlert/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── database/
│   └── app.js
├── tests/
├── .env
├── swagger.yaml
├── package.json
└── README.md
```

---

## 🔒 Autenticação

Utilizamos **JWT (JSON Web Token)** para proteger rotas privadas. O usuário precisa estar autenticado para acessar funcionalidades como alertas e contatos.

---

## 📑 Documentação da API

Você pode acessar a documentação completa da API através do Swagger:

```
http://localhost:3000/api-docs
```

---

## 📌 Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/SafeAlert.git
cd SafeAlert
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```env
PORT=3000
JWT_SECRET=sua_chave_secreta
DB_URL=conexao_do_seu_banco
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

Versões com e sem o nome estão disponíveis na pasta `/assets/logo`.  
As cores predominantes são **azul escuro** e **amarelo**, com design **minimalista e moderno**.

---

## 💬 Slogan

> “A segurança de quem você ama, na palma da mão.”

---

## 👨‍💻 Equipe

- Vinícius (Desenvolvedor Backend, Design de Logo e Documentação)
- [Nome do membro 2]
- [Nome do membro 3]
- [Nome do membro 4, se houver]
