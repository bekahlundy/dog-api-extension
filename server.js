const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static('build'))

app.set('port', process.env.PORT || 3000)

app.get('/api/tags', (request, response) => {
  database('tags').select()
          .then((tags) => {
            response.status(200).json(tags);
          })
          .catch((error) => {
            console.error('somethings wrong with db (tags)')
          });
})

// app.get('/api/tags/:tagId/photos', (request, response) => {
//   database('photos').where('tagId', request.params.tagId).select()
//   .then((tags) => {
//     response.status(200).json(tags)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// })

app.get('/api/photos', (request, response) => {
  database('photos').select()
          .then((photos) => {
            response.status(200).json(photos);
          })
          .catch((error) => {
            console.error('somethings wrong with db (photos)')
          });
})

// app.get('/api/photos/tag/:tagId', (request, response) => {
//   database('photos').where('tagId', request.params.tagId).select()
//   .then((tags) => {
//     response.status(200).json(tags)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// })


app.get('/api/feelings', (request, response) => {
  database('feelings').select()
          .then((feelings) => {
            response.status(200).json(feelings);
          })
          .catch((error) => {
            console.error('somethings wrong with db (feelings)')
          });
})

app.get('/api/photos_tags', (request, response) => {
  database('photos_tags').select()
          .then((photos_tags) => {
            response.status(200).json(photos_tags);
          })
          .catch((error) => {
            console.error('somethings wrong with db (photos_tags)')
          });
})

app.listen(app.get('port'), () => {
  console.log(`pup pals is running on ${app.get('port')}.`)
})
