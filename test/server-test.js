const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../server.js');

chai.use(chaiHttp);

describe('Server', () => {

  describe('GET /api/tags', ()  => {
    it('should return a 200 and obj', (done)  => {
      chai.request(app)
      .get('/api/tags')
      .end((err, res)  => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        done();
      });
    });
  });

  describe('GET /api/photos', function() {
    it('should return a 200 and obj', function(done) {
      chai.request(app)
      .get('/api/photos')
      .end(function(err, res) {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        done();
      });
    });
  });

  describe('GET /api/photos_tags', function() {
    it('should return a 200 and obj', function(done) {
      chai.request(app)
      .get('/api/photos_tags')
      .end(function(err, res) {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        done();
      });
    });
  });

  describe('GET /api/feelings', function() {
    it('should return a 200 and obj', function(done) {
      chai.request(app)
      .get('/api/feelings')
      .end(function(err, res) {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        done();
      });
    });
  });

  describe('GET /api/tags/:id', function() {
    it('should return a 200 and obj', function(done) {
      chai.request(app)
      .get('/api/tags/1')
      .end(function(err, res) {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        done();
      });
    });
  });

  describe('GET /api/tags/:id', function() {
    it('should return a 200 and obj', function(done) {
      chai.request(app)
      .get('/api/tags/1')
      .end(function(err, res) {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        done();
      });
    });
  });

  describe('GET /api/feelings/:photoId', function() {
    it('should return a 200 and obj', function(done) {
      chai.request(app)
      .get('/api/feelings/1')
      .end(function(err, res) {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        done();
      });
    });
  });

});
