import { expect } from 'chai'
import app from '../src/server'

const request = require('supertest')

describe('fruitsController', () => {
  it('test', ()=> {
    request(app)
    .get('/fruits')
    .end((err, response) => {
      expect(response.status).to.eql(200)
      expect(response.body).to.eql([{
        name: 'apple'
      }, {
        name: 'orange'
      }])
    })

  })
})