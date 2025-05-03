const express = require('express');
const app = express();
const rota = require('./routes/routes');
const autenRotas = require('./routes/autenRotas');
const { swaggerSpec, swaggerUi } = require('./config/swagger');
const autenMidd = require('./middleware/autenticacao');
const { criarUsuario } = require('./controllers/controller');
const alertaRoutes = require('./routes/alertaRoutes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use('/api', autenRotas);
app.post('/api/users', criarUsuario)

app.use(autenMidd);

app.use('/api', rota);
app.use('/api', alertaRoutes);

module.exports = app;
