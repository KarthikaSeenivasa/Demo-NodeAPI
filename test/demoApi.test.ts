import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

// using chai to create tests
chai.use(chaiHttp);
const expect = chai.expect;

// test suites 
describe('Testing baseroute endpoints', () => {

  it('response type should be in json format', () => {
    return chai.request(app).get('/')
    .then(res => expect(res.type).to.eql('application/json'));
  });

  it('response body should have a message property', () => {
    return chai.request(app).get('/')
    .then(res => expect(res.body.message).to.eql('API works!'));
  });

});


