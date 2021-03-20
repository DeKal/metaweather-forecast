import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'
import nock from 'nock'
import { config } from 'dotenv'
config()

chai.use(chaiHttp)
chai.should()

describe('Weather', () => {
  describe('GET weather/', () => {
    it('search for cityId = 44418, return weather response', (done) => {
      const response = {
        consolidated_weather: [
          {
            id: 6597809626152960,
            weather_state_name: 'Heavy Cloud',
            weather_state_abbr: 'hc',
            wind_direction_compass: 'NE',
            created: '2021-03-19T15:20:05.015341Z',
            applicable_date: '2021-03-19',
            min_temp: 5.390000000000001,
            max_temp: 10.86,
            the_temp: 10.629999999999999,
            wind_speed: 6.3993462452875205,
            wind_direction: 51.45237056183798,
            air_pressure: 1029,
            humidity: 55,
            visibility: 11.381966813807365,
            predictability: 71
          }
        ]
      }
      nock('https://www.metaweather.com')
        .get('/api/location/44418')
        .reply(200, response)

      const wanted = {
        weathers: [
          {
            maxTemperature: 10.86,
            minTemperature: 5.390000000000001,
            date: '2021-03-19'
          }
        ]
      }

      chai
        .request(app)
        .get('/weather?cityId=44418')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.success.should.equal(true)
          expect(res.body.data).to.deep.equal(wanted)
          done()
        })
    })

    it('search for cityId but there is no result', (done) => {
      const response = {
        consolidated_weather: []
      }
      nock('https://www.metaweather.com')
        .get('/api/location/44418')
        .reply(200, response)

      const wanted = {
        weathers: []
      }

      chai
        .request(app)
        .get('/weather?cityId=44418')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.success.should.equal(true)
          expect(res.body.data).to.deep.equal(wanted)
          done()
        })
    })

    it('search for cityId but there is error from metaweather', (done) => {
      chai
        .request(app)
        .get('/weather?cityId=44418')
        .end((err, res) => {
          res.should.have.status(500)
          res.body.success.should.equal(false)
          expect(res.body.message).to.deep.equal(
            'Internal server error, cannot connect to metaweather'
          )
          done()
        })
    })

    it('search for cityId but there is no query', (done) => {
      chai
        .request(app)
        .get('/weather?cityId=')
        .end((err, res) => {
          res.should.have.status(400)
          res.body.success.should.equal(false)
          expect(res.body.message).to.deep.equal(
            'Bad request: city id is missing.'
          )
          done()
        })
    })
  })
})
