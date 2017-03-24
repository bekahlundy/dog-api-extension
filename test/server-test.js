const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../server.js');

const environment = 'test'
const configuration = require('../knexfile')[environment]
const database = require('knex')(configuration)

chai.use(chaiHttp);

describe('Server', () => {
  beforeEach((done) => {
    database.migrate.rollback()
     .then(() => {
       database.migrate.latest()
       .then(() => {
           done();
       })
     })
  })

afterEach((done) => {
  database.migrate.rollback()
  .then(() => {
    done();
  })
})

  describe('GET /api/tags', ()  => {
    it('should return all tags', (done)  => {
      chai.request(app)
      .get('/api/tags')
      .end((err, res)  => {
        if (err) {
          done(err);
        }
        expect(res).to.have.status(200);
        expect(res).to.be.json
        expect(res).to.be.a('object');
        done();
      });
    });
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .get('/api/bugs')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
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
