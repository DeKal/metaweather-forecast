import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Weather Express API with Swagger',
      version: '0.1.0',
      description:
        'This is a CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'Phatho',
        email: 'hohuuphat22@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3001'
      }
    ]
  },
  apis: ['./src/**/*.ts', './src/apis/docs/*.yml']
}

const specs = swaggerJsdoc(options)

const createSwaggerApi = (app: express.Express): void => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))
}
export default createSwaggerApi
