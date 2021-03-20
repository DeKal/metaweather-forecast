import express, { Request } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import compression from 'compression'
import cors from 'cors'

const createConfigHandler = (app: express.Express): void => {
  app.disable('x-powered-by')

  app.use(compression())

  if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'))
  }

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(cookieParser())
  app.use(cors())

  app.options('*', cors<Request>())

  // Enable CORS from client side
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT,GET,DELETE,POST,OPTIONS')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With,Content-Type, Accept, Authorization, Apptoken,' +
        ' Access-Control-Allow-Credential'
    )
    res.header('Access-Control-Allow-Credentials', 'true')

    next()
  })
}

export default createConfigHandler
