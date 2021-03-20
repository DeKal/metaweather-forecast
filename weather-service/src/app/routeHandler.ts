import createWeatherApi from 'apis/weather'
import createCityApi from 'apis/city'
import express, { Request, Response } from 'express'

import createWeatherService from 'services/weather'
import createCityService from 'services/city'

const createRouter = (app: express.Express, baseUrl: string) => {
  const router = express.Router()
  app.use(baseUrl, router)
  return router
}

export type FnController = (req: Request, res: Response) => Promise<void>

const createAppApi = (app: express.Express): void => {
  const weatherService = createWeatherService()
  const cityService = createCityService()

  const weatherApi = createWeatherApi({ weatherService })
  const cityApi = createCityApi({ cityService })

  /**
   * Weather apis
   */
  const weatherRouter = createRouter(app, '/weather')
  weatherRouter.get('/', weatherApi.getByCityApi)

  /**
   * City apis
   */
  const cityRouter = createRouter(app, '/city')
  cityRouter.get('/search', cityApi.searchCityApi)
}

export default createAppApi
