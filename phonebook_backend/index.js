const { json, response } = require('express')
// express server object
const express = require('express') 
const app = express()
const morgan = require('morgan')
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

// prints out the details of every request made
morgan.token('body', req => {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :response-time[3] :body'))

const generateID = () => {
  const maxID = persons.length > 0
  ? Math.max(...persons.map(person => person.id))
  : 0
  return maxID + 1
}

app.get('/api/persons', (req, response) => {
    response.json(persons)
})

app.get('/api/info', (req, response) => {
    const date = new Date()
    response.send(`<p>Phone book has info for ${persons.length} people</p> <p>${date}</p>`)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  if ((!body.name) || (!body.number)) {
    return res.status(400).json({
      error: "name or number is missing"
    })
  } else if (persons.find(person => person.name === body.name)) {
    return res.status(400).json({
      error: "name must be unique"
    })
  }

  const person = {
    id: generateID(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)
  res.json(person)
})

// #middleware after our routes, that is used for catching 
// requests made to non-existent routes.
const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

