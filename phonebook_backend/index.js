const { json, response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

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
  console.log('Method', request.method)
  console.log('Path', request.path)
  console.log('Body', request.body)
  console.log('---'),
  next()
}

app.use(requestLogger)

const generateID = () => {
  const maxID = persons.length > 0
  ? Math.max(...persons.map(person => person.id))
  : 0
  return maxID + 1
}

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/info', (request, response) => {
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

  console.log(req.body)
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
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

