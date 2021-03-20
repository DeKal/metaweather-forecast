/**
 * @swagger
 * /weather:
 *    get:
 *     description: Search for available city
 *     tags: [City]
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: cityId
 *         required: true
 *         schema:
 *           type: string
 *           default: 44418
 *         description: id of the city
 *     responses:
 *       200:
 *         description: ok
 *         content:
 *            application/json:
 *              schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/SuccessResponse'
 *                  - $ref: '#/components/schemas/WeatherPayload'
 */
import { FnController } from 'app/routeHandler'
import { FnGetByCity } from 'services/weather/getByCity'
import utils from 'utils'

interface Dependecies {
  getByCity: FnGetByCity
}

const createGetByCityApi = ({ getByCity }: Dependecies): FnController => {
  return async (req, res) => {
    const query = req.query
    if (!query || !query.cityId) {
      return utils.sendErrorResponse(
        res,
        {},
        'Bad request: city id is missing.',
        400
      )
    }

    const { result: weathers, error } = await getByCity(query.cityId as string)

    if (error) {
      return utils.sendErrorResponse(res, {}, error)
    }

    return utils.sendSuccessResponse(res, { weathers }, 'weathers data')
  }
}
export default createGetByCityApi
