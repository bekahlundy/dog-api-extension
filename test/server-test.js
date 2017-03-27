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
        expect(res.body[0].tagName).to.equal('puppo')
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
        feelingName: 'happy'
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
        expect(res.body[0].feelingName).to.equal('happiest')
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
        dogName: 'sandy bean'
      }).then(() => {
        done()
      })
    })
    it('should return a 200 and specific photo', (done) => {
      chai.request(app)
      .get('/api/photos/1')
      .end((err, res) => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.a('object');
        expect(res.body[0].dogName).to.equal('sandy-bean')
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
       expect(res.body[18].tagName).to.equal('cutie-pie')
       done()
     })
   })
   it('should return 422 if no body is entered', (done)=> {
     chai.request(app)
     .post('/api/tags')
     .end((error, res)=> {
       expect(res).to.have.status(422)
       done()
     })
   })
 })

 describe('POST /api/feelings', () => {
  it('should post a new feeling', (done) => {
    chai.request(app)
    .post('/api/feelings')
    .send({
      photoId: 10,
      feelingName: 'cutie-pie'
    })
    .end((error, res)=> {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body[4].feelingName).to.equal('cutie-pie')
      done()
    })
  })
  it('should return 422 if no body is entered', (done)=> {
    chai.request(app)
    .post('/api/tags')
    .end((error, res)=> {
      expect(res).to.have.status(422)
      done()
    })
  })
})

describe('POST /api/photos', () => {
 it('should post a new photo', (done) => {
   chai.request(app)
   .post('/api/photos')
   .send({
     pic: 'https://unsplash.com/search/dog?photo=8bGyWm9tvyQ',
     dogName: 'wolfy von vanderbeak'
   })
   .end((error, res)=> {
     expect(res).to.have.status(200)
     expect(res).to.be.json
     expect(res.body).to.be.a('array')
     expect(res.body[30].dogName).to.equal('wolfy von vanderbeak')
     done()
   })
 })
 it('should return 422 if no body is entered', (done)=> {
   chai.request(app)
   .post('/api/tags')
   .end((error, res)=> {
     expect(res).to.have.status(422)
     done()
   })
 })
})

describe('PATCH /api/tags/:id', ()=> {
  beforeEach((done) => {
    database('tags').insert({
            tagName: 'pup'
          }).then(() => {
            done()
          })
  })
  it('should edit a tags tagName', (done) => {
    chai.request(app)
    .patch('/api/tags/1')
    .send({
      tagName: 'puppo'
    })
    .end((error, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body[0].tagName).to.equal('puppo')
      done()
    })
  })
  it('should return 404 if incorrect path is entered', (done)=> {
    chai.request(app)
    .post('/api/bugs/1')
    .end((error, res)=> {
      expect(res).to.have.status(404)
      done()
    })
  })
})

describe('PATCH /api/feelings/:photoId', ()=> {
  beforeEach((done) => {
    database('feelings').insert({
            feelingName: 'happy'
          }).then(() => {
            done()
          })
  })
  it('should edit a feelings feelingName', (done) => {
    chai.request(app)
    .patch('/api/feelings/1')
    .send({
      feelingName: 'happiest'
    })
    .end((error, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body[0].feelingName).to.equal('happiest')
      done()
    })
  })
  it('should return 404 if incorrect path is entered', (done)=> {
    chai.request(app)
    .post('/api/bugs/1')
    .end((error, res)=> {
      expect(res).to.have.status(404)
      done()
    })
  })
})
describe('PATCH /api/photos/:id', ()=> {
  beforeEach((done) => {
    database('photos').insert({
            dogName: 'sandy bean'
          }).then(() => {
            done()
          })
  })
  it('should edit a photos dogName', (done) => {
    chai.request(app)
    .patch('/api/photos/1')
    .send({
      dogName: 'sandy-bean'
    })
    .end((error, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body[0].dogName).to.equal('sandy-bean')
      done()
    })
  })
  it('should return 404 if incorrect path is entered', (done)=> {
    chai.request(app)
    .post('/api/bugs/1')
    .end((error, res)=> {
      expect(res).to.have.status(404)
      done()
    })
  })
})

describe('DELETE /api/photos/:id', ()=> {
    it('should delete a photo', (done)=> {
      chai.request(app)
      .delete('/api/photos/31')
      .end((error, res)=> {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.length(res.body.length)
        done()
      })
    })
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/photos/one')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  })

describe('DELETE /api/tags/:id', ()=> {
    it('should delete a tag', (done)=> {
      chai.request(app)
      .delete('/api/tags/20')
      .end((error, res)=> {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.length(res.body.length)
        done()
      })
    })
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/tags/one')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  })

describe('DELETE /api/feelings/:photoId', ()=> {
    it('should delete a feeling', (done)=> {
      chai.request(app)
      .delete('/api/feelings/20')
      .end((error, res)=> {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.length(res.body.length)
        done()
      })
    })
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/feelings/one')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  })

describe('DELETE /api/photos_tags/:id', ()=> {
    it('should delete a photos_tag', (done)=> {
      chai.request(app)
      .delete('/api/photos_tags/20')
      .end((error, res)=> {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.length(res.body.length)
        done()
      })
    })
    it('should return 404 if incorrect path is entered', (done)=> {
      chai.request(app)
      .post('/api/photos_tags/one')
      .end((error, res)=> {
        expect(res).to.have.status(404)
        done()
      })
    })
  })

});
