require('dotenv').config()
const Person = require('./models/person')
const express = require('express') 
const app = express()
const cors = require('cors')

persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const requestLogger = (req, res, next) => {
  console.log('Method', req.method)
  console.log('Path', req.path)
  console.log('Body', req.body)
  console.log('---'),
  next()
}

app.use(express.json())

app.use(requestLogger)

app.use(cors())

app.use(express.static('build'))

app.get('/api/persons', (req, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/info', (req, response) => {
    const date = new Date()
    response.send(`<p>Phone book has info for ${Person.find().estimatedDocumentCount()} people</p> <p>${date}</p>`)
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id).then(person => {
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})
.catch(error =>  next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
      number: body.number 
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
      .then(updatedPerson => {
          response.json(updatedPerson)
      })
      .catch(error => next(error))
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if ((!body.name) || (!body.number)) {
    return res.status(400).json({
      error: "name or number is missing"
    })
  } 

  // if (persons.find(person => person.name === body.name)) {
  //   return res.status(400).json({
  //     error: "name must be unique"
  //   })
  // }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    res.json(person)
  })
  .catch(error => next(error))
})

// #middleware after our routes, that is used for catching 
// requests made to non-existent routes.
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

