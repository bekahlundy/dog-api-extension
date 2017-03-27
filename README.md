# Build your own Backend

### Overview

This  is a simple server-db template. The server is built on node-express, and connects to a postgres db via knex. Endpoints are tested using Mocha Chai. We have fours tables, one for photos, one for feelings, one for tags, and one for photos_tags. The idea is to implement this in a project for a chrome extension where every new tab you open, you get a dog greeting you.

### End Points

you can check out the following endpoints on heroku

#### Get Requests

`GET`/api/tags

* returns a JSON array of all the tags

`GET`/api/tags/:id

* returns specific tag marked with that id

`GET`/api/photos

* returns a JSON array of all the photos

`GET`/api/photos/:id

* returns specific photo marked with that id

`GET`/api/photos/?tag=:tag

* returns all photos marked with your specific tag

`GET`/api/photos_tags

* returns a JSON array of all the photos_tags

`GET`/api/feelings

* returns a JSON array of all the feelings

`GET`/api/feelings/:photoId

* returns all photos associated with that feeling/photoId

#### Post Requests

`POST`/api/tags

* pass an object with a tag name in the body to insert a new tag into the tag table

`POST`/api/photos

* pass an object with a dog name and a picture in the body to insert a new photo into the photo table

`POST`/api/feelings

* pass an object with a feeling name and a photoId in the body to insert a new feeling into the feeling table

#### Patch Requests

`PATCH`/api/tags/:id

* this endpoint will allow you to update a tags tagName

`PATCH`/api/feelings/:photoId

* this endpoint will allow you to update a feelings feelingName

`PATCH`/api/photos/:id

* this endpoint will allow you to update a photos dogName

#### Delete Requests

`DELETE`/api/photos/:id

* deletes a photo in the photo table by id

`DELETE`/api/tags/:id

* deletes a tag in the tag table by id

`DELETE`/api/feelings/:photoId

* deletes a feeling in the feeling table by photoId

`DELETE`/api/photos_tags/:id

* deletes a photos tags combo in the photos_tags table by id

### Tests
![passing-tests-screenshot](http://i.imgur.com/XHx87tx.png)
