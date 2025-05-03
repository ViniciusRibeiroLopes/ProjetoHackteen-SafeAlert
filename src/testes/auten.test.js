const request = require('supertest');
const app = require('../app');

let token;
let userId;
let alertaId;

describe('Testes da API SafeAlert', () => {

  test('Criar um novo usuário', async () => {
    const res = await request(app).post('/api/users').send({
      nome: 'Teste Automatizado',
      email: 'teste@example.com',
      senha: '123456',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    userId = res.body.id;
  });

  test('Realizar login e obter token', async () => {
    const res = await request(app).post('/api/login').send({
      email: 'teste@example.com',
      senha: '123456',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  test('Criar um novo alerta', async () => {
    const res = await request(app)
      .post('/api/alertas')
      .set('Authorization', token)
      .send({
        tipo: 'Perigo',
        descricao: 'Teste de alerta',
        latitude: -23.55052,
        longitude: -46.633308,
      });

    expect(res.statusCode).toBe(201);
    alertaId = res.body.id;
  });

  test('Listar alertas', async () => {
    const res = await request(app)
      .get('/api/alertas')
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('Buscar usuário por ID', async () => {
    const res = await request(app)
      .get(`/api/users/${userId}`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('email');
  });

  test('Atualizar usuário', async () => {
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .set('Authorization', token)
      .send({
        nome: 'Nome Atualizado',
        email: 'teste_auto@example.com',
        senha: '123456',
      });

    expect(res.statusCode).toBe(200);
  });

  test('Deletar alerta', async () => {
    const res = await request(app)
      .delete(`/api/alertas/${alertaId}`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
  });

  test('Deletar usuário', async () => {
    const res = await request(app)
      .delete(`/api/users/${userId}`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
  });
});

describe('Testes extras da API SafeAlert', () => {
  test('Acesso sem token deve retornar 401', async () => {
    const res = await request(app).get('/api/alertas');
    expect(res.statusCode).toBe(401);
  });

  test('Criar usuário com dados inválidos deve retornar 400', async () => {
    const res = await request(app).post('/api/users').send({
      nome: '',
      email: 'email-invalido',
      senha: ''
    });

    expect(res.statusCode).toBe(400); // depende da validação feita no seu controller
  });

  test('Buscar alerta inexistente deve retornar 404', async () => {
    const res = await request(app)
      .get('/alertas/999999')
      .set('Authorization', token);
    expect(res.statusCode).toBe(404);
  });
});
