/**
 * @swagger
 * /city/search:
 *    get:
 *     description: Search for available city
 *     tags: [City]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *           default: london
 *         description: Name of the city
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *            application/json:
 *              schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/SuccessResponse'
 *                  - $ref: '#/components/schemas/CitiesPayload'
 */
import { FnController } from 'app/routeHandler'
import { FnSearchCity } from 'services/city/search'
import utils from 'utils'

interface Dependecies {
  searchCity: FnSearchCity
}

const createSearchCityApi = ({ searchCity }: Dependecies): FnController => {
  return async (req, res) => {
    const query = req.query

    if (!query || !query.name) {
      return utils.sendSuccessResponse(
        res,
        {
          cities: []
        },
        'empty query'
      )
    }

    const city = query.name as string

    const { result: cities, error } = await searchCity(city)

    if (error) {
      return utils.sendErrorResponse(res, {}, error)
    }

    return utils.sendSuccessResponse(res, { cities }, 'city data')
  }
}
export default createSearchCityApi
