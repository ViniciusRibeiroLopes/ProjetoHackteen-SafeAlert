const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SafeAlert API',
      version: '1.0.0',
      description: 'API de alertas geolocalizados para segurança pessoal',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Usuario: {
          type: 'object',
          properties: {
            nome: { type: 'string' },
            email: { type: 'string' },
            senha: { type: 'string' },
          },
        },
        Login: {
          type: 'object',
          properties: {
            email: { type: 'string' },
            senha: { type: 'string' },
          },
        },
        Alerta: {
          type: 'object',
          properties: {
            tipo: { type: 'string' },
            descricao: { type: 'string' },
            latitude: { type: 'number', format: 'float' },
            longitude: { type: 'number', format: 'float' },
          },
        },
      },
    },
    paths: {
        '/login': {
        post: {
          tags: ['Autenticação'],
          summary: 'Realizar login',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Login' },
              },
            },
          },
          responses: {
            200: { description: 'Login bem-sucedido' },
            401: { description: 'Credenciais inválidas' },
          },
        },
      },
      '/users': {
        post: {
          tags: ['Usuários'],
          summary: 'Criar um novo usuário',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Usuario' },
              },
            },
          },
          responses: {
            201: { description: 'Usuário criado com sucesso' },
            400: { description: 'Dados inválidos' },
          },
        },
      },
      '/users/{id}': {
        get: {
          tags: ['Usuários'],
          summary: 'Buscar um usuário por ID',
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            200: { description: 'Usuário encontrado' },
            404: { description: 'Usuário não encontrado' },
            401: { description: 'Não autorizado' },
          },
        },
        put: {
          tags: ['Usuários'],
          summary: 'Atualizar um usuário por ID',
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Usuario' },
              },
            },
          },
          responses: {
            200: { description: 'Usuário atualizado com sucesso' },
            400: { description: 'Dados inválidos' },
            404: { description: 'Usuário não encontrado' },
            401: { description: 'Não autorizado' },
          },
        },
        delete: {
          tags: ['Usuários'],
          summary: 'Deletar um usuário por ID',
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            204: { description: 'Usuário deletado com sucesso' },
            404: { description: 'Usuário não encontrado' },
            401: { description: 'Não autorizado' },
          },
        },
      },
      '/alertas': {
        post: {
          tags: ['Alertas'],
          summary: 'Criar um novo alerta',
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Alerta' },
              },
            },
          },
          responses: {
            201: { description: 'Alerta criado com sucesso' },
            400: { description: 'Dados inválidos' },
            401: { description: 'Não autorizado' },
          },
        },
        get: {
          tags: ['Alertas'],
          summary: 'Listar todos os alertas',
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: 'Lista de alertas',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Alerta' },
                  },
                },
              },
            },
            401: { description: 'Não autorizado' },
          },
        },
      },
      '/alertas/{id}': {
        delete: {
          tags: ['Alertas'],
          summary: 'Deletar um alerta por ID',
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: { type: 'integer' },
            },
          ],
          responses: {
            204: { description: 'Alerta deletado com sucesso' },
            401: { description: 'Não autorizado' },
            404: { description: 'Alerta não encontrado' },
          },
        },
      },
    },
  },
  apis: [], // JSDoc não é utilizado, pois a documentação está toda aqui
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = { swaggerSpec, swaggerUi };
