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

app.listen(app.get('port'), () => {
  console.log(`pup pals is running on ${app.get('port')}.`)
})
