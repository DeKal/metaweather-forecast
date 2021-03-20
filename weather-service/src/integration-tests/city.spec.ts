import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../app'
import nock from 'nock'
import { config } from 'dotenv'
config()

chai.use(chaiHttp)
chai.should()

describe('City', () => {
  describe('GET city/search/', () => {
    it('search for city london should show exact result', (done) => {
      const response = [
        {
          title: 'London',
          location_type: 'City',
          woeid: 44418,
          latt_long: '51.506321,-0.12714'
        }
      ]
      nock('https://www.metaweather.com')
        .get('/api/location/search/?query=london')
        .reply(200, response)

      const wanted = {
        cities: [{ title: 'London', woeid: 44418 }]
      }

      chai
        .request(app)
        .get('/city/search?name=london')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.success.should.equal(true)
          expect(res.body.data).to.deep.equal(wanted)
          done()
        })
    })

    it('should search for city me* should show multiple results', (done) => {
      const response = [
        {
          title: 'Mexico City',
          location_type: 'City',
          woeid: 116545,
          latt_long: '19.431900,-99.132851'
        },
        {
          title: 'Memphis',
          location_type: 'City',
          woeid: 2449323,
          latt_long: '35.149681,-90.048920'
        },
        {
          title: 'Rome',
          location_type: 'City',
          woeid: 721943,
          latt_long: '41.903111,12.495760'
        }
      ]
      nock('https://www.metaweather.com')
        .get('/api/location/search/?query=london')
        .reply(200, response)

      const wanted = {
        cities: [
          { title: 'Mexico City', woeid: 116545 },
          { title: 'Memphis', woeid: 2449323 },
          { title: 'Rome', woeid: 721943 }
        ]
      }

      chai
        .request(app)
        .get('/city/search?name=london')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.success.should.equal(true)
          expect(res.body.data).to.deep.equal(wanted)
          done()
        })
    })

    it('search for city with no query', (done) => {
      chai
        .request(app)
        .get('/city/search?name=')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.success.should.equal(true)
          expect(res.body.data).to.deep.equal({ cities: [] })
          done()
        })
    })

    it('search for city when metaweather got error', (done) => {
      chai
        .request(app)
        .get('/city/search?name=london')
        .end((err, res) => {
          res.should.have.status(500)
          res.body.success.should.equal(false)
          res.body.message.should.equal(
            'Internal server error, cannot connect to metaweather'
          )
          done()
        })
    })

    it('search for not existed city should ', (done) => {
      nock('https://www.metaweather.com')
        .get('/api/location/search/?query=not_existed_city')
        .reply(200, [])

      chai
        .request(app)
        .get('/city/search?name=not_existed_city')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.success.should.equal(true)
          expect(res.body.data).to.deep.equal({ cities: [] })
          done()
        })
    })
  })
})
