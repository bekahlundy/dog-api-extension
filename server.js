const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json())

app.set('port', process.env.PORT || 3000)
app.use(bodyParser.urlencoded({ extended: true }));

// gets all tags
app.get('/api/tags', (request, response) => {
  database('tags').select()
          .then((tags) => {
            response.status(200).json(tags);
          })
          .catch((error) => {
            console.error('somethings wrong with db (tags)')
            response.status(404).json(tags);
          });
})

// gets all photos
// get /api/photos?tag=:tagName
app.get('/api/photos', (request, response) => {
  if(request.query && request.query.tag) {
    database('tags').where('tagName', request.query.tag).select('id')
    .then((tagId) => {
      if (!tagId[0]) {
        response.status(404).json(tagId)
      }
      database('photos_tags').where('tagId', tagId[0].id).select('photoId')
      .then((photoIds) => {
        let arr = photoIds.map((obj) => {
          return obj.photoId
        })
        database('photos').whereIn('id', arr).select()
        .then((photos) => {
          response.status(200).json(photos)
        })
      })
    })
    .catch((error) => {
      console.log(error)
    })
  } else {
    database('photos').select()
    .then((photos) => {
      response.status(200).json(photos);
    })
    .catch((error) => {
      console.error('somethings wrong with db (photos)')
      response.status(404).json(photos);
    });
  }
})

// gets all photos_tags
app.get('/api/photos_tags', (request, response) => {
  database('photos_tags').select()
          .then((photos_tags) => {
            response.status(200).json(photos_tags);
          })
          .catch((error) => {
            console.error('somethings wrong with db (photos_tags)')
            response.status(404).json(photos_tags);
          });
})

// gets all feelings
app.get('/api/feelings', (request, response) => {
  database('feelings').select()
          .then((feelings) => {
            response.status(200).json(feelings);
          })
          .catch((error) => {
            console.error('somethings wrong with db (feelings)')
            response.status(404).json(feelings);
          });
})

// get tag by id
app.get('/api/tags/:id', (request, response) => {
  database('tags').where('id', request.params.id).select()
  .then((tags) => {
    response.status(200).json(tags)
  })
  .catch((error) => {
    console.log(error)
    response.status(404).json(tags);
  })
})

// get photo by id
app.get('/api/photos/:id', (request, response) => {
  database('photos').where('id', request.params.id).select()
  .then((photos) => {
    response.status(200).json(photos)
  })
  .catch((error) => {
    console.log(error)
    response.status(404).json(photos);
  })
})

// get feelings by photoId
app.get('/api/feelings/:photoId', (request, response) => {
  database('feelings').where('photoId', request.params.photoId).select()
  .then((feeling) => {
    response.status(200).json(feeling)
  })
  .catch((error) => {
    console.log(error)
    response.status(404).json(feeling);
  })
})

// post tags to db
app.post('/api/tags', (request, response) => {
  const tag = { tagName: request.body.tagName, created_at: new Date }
  database('tags').insert(tag)
  .then(() => {
    database('tags').select()
    .then((tags) => {
      response.status(200).json(tags)
    })
    .catch((error) => {
      console.log(error)
      response.status(404).json(tags);
    })
  })
})


// post photo to db
app.post('/api/photos', (request, response) => {
  const photo = { dogName: request.body.dogName, pic: request.body.pic }
  database('photos').insert(photo)
  .then(() => {
    database('photos').select()
    .then((photos) => {
      response.status(200).json(photos)
    })
    .catch((error) => {
      console.log(error)
      response.status(404).json(photos);
    })
  })
})

// patch new tagName on /api/tags/:id
app.patch('/api/tags/:id', (request, response) => {
  const { id } = request.params
    database('tags').where('id', id).update({tagName: request.body.tagName})
    .then((tags) => {
      database('tags').where('id', id).then((tags) => {
        response.status(200).json(tags)
      })
    })
  .catch((error) => {
    console.log(error)
    response.status(404).json(tags);
  })
})

// patch new feelingName on /api/feeings/:id
app.patch('/api/feelings/:photoId', (request, response) => {
  const { photoId } = request.params
    database('feelings').where('photoId', photoId).update({feelingName: request.body.feelingName})
    .then((feelings) => {
      database('feelings').where('photoId', photoId).then((feelings) => {
        response.status(200).json(feelings)
      })
    })
  .catch((error) => {
    console.log(error)
    response.status(404).json(feelings);
  })
})

// patch new dogName on /api/photos/:id
app.patch('/api/photos/:id', (request, response) => {
  const { id } = request.params
    database('photos').where('id', id).update({dogName: request.body.dogName})
    .then((photos) => {
      database('photos').where('id', id).then((photos) => {
        response.status(200).json(photos)
      })
    })
  .catch((error) => {
    console.log(error)
    response.status(404).json(photos);
  })
})

// delete idv photo group
// only deletes other
app.delete('/api/photos/:id', (request, response) => {
  const { id } = request.params
    database('photos').where('id', id).select()
    .then((photos) => {
      database('photos').where('id', id).select().del()
      .then((photos) => {
        database('photos').where('id', id).then((photos) => {
          response.status(200).json(photos)
        })
      })
    })
  .catch((error) => {
    console.log(error)
    response.status(404).json(photos);
  })
})

// delete idv tag
app.delete('/api/tags/:id', (request, response) => {
  const { id } = request.params
    database('tags').where('id', id).select()
    .then((tags) => {
      database('tags').where('id', id).select().del()
      .then((tags) => {
          response.status(200).json(tags)
      })
    })
  .catch((error) => {
    console.log(error)
    response.status(404).json(tags);
  })
})

// delete idv feeling
// only deletes seed
app.delete('/api/feelings/:photoId', (request, response) => {
  const { photoId } = request.params
    database('feelings').where('photoId', photoId).select()
    .then((feelings) => {
      database('feelings').where('photoId', photoId).select().del()
      .then((feelings) => {
          response.status(200).json(feelings)
      })
    })
  .catch((error) => {
    console.log(error)
    response.status(404).json(feelings);
  })
})

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`pup pals is running on ${app.get('port')}.`)
  })
}

module.exports = app;
