const app = require('./app');
const sequelize = require('./config/sequelize');  // Para sincronizar com o banco

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
