import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';  // Adjust path as necessary

describe('GET /', function() {
  it('should return a welcome message', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        if (err) done(err);
        expect(res.status).to.equal(200);  // Check for status code 200
        expect(res.body.message).to.equal('Hello, world!');  // Check if the response body message is 'Hello, world!'
        done();
      });
  });
});