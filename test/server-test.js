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

  describe('GET /api/photos', ()  => {
    it('should return all photos', (done)  => {
      chai.request(app)
      .get('/api/photos')
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

  describe('GET /api/photos_tags', ()  => {
    it('should return all photos_tags', (done)  => {
      chai.request(app)
      .get('/api/photos_tags')
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

  describe('GET /api/feelings', ()  => {
    it('should return all feelings', (done)  => {
      chai.request(app)
      .get('/api/feelings')
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

  describe('GET /api/tags/:id', () => {
    beforeEach((done) => {
      database('tags').insert({
        tagName: 'puppy'
      }).then(() => {
        done()
      })
    })
    it('should return a 200 and specific tag', (done) => {
      chai.request(app)
      .get('/api/tags/1')
      .end((err, res) => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        expect(res.body[0].tagName).to.equal('puppy')
        done();
      });
    });
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .get('/api/bugs/1')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  });


  describe('GET /api/feelings/:photoId', () => {
    beforeEach((done) => {
      database('feelings').insert({
        feelingName: 'crycrycry'
      }).then(() => {
        done()
      })
    })
    it('should return a 200 and specific feeling', (done) => {
      chai.request(app)
      .get('/api/feelings/1')
      .end((err, res) => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        expect(res.body[0].feelingName).to.equal('crycrycry')
        done();
      });
    });
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .get('/api/bugs/1')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  });

  describe('GET /api/photos/:id', () => {
    beforeEach((done) => {
      database('photos').insert({
        dogName: 'mr. wiggles'
      }).then(() => {
        done()
      })
    })
    it('should return a 200 and specific dog', (done) => {
      chai.request(app)
      .get('/api/photos/1')
      .end((err, res) => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        expect(res.body[0].dogName).to.equal('mr. wiggles')
        done();
      });
    });
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .get('/api/bugs/1')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  });

  describe('POST /api/tags', () => {
   it('should post a new tag', (done) => {
     chai.request(app)
     .post('/api/tags')
     .send({
       id: 10,
       tagName: 'cutie-pie'
     })
     .end((error, res)=> {
       expect(res).to.have.status(200)
       expect(res).to.be.json
       expect(res.body).to.be.a('array')
       expect(res.body[4].tagName).to.equal('cutie-pie')
       done()
     })
   })
   it('should return 404 if incorrect path is entered', (done)=> {
     chai.request(app)
     .post('/api/bugs')
     .end((error, res)=> {
       expect(res).to.have.status(404)
       done()
     })
   })
 })

});
