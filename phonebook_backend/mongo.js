
const mongoose = require('mongoose');
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]


if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }

const url = `mongodb+srv://mrance21:${password}@cluster0.ndtepta.mongodb.net/phonebookApp?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)


mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')
    if (process.argv.length === 3) {
        Person.find({}).then(result => {
            result.forEach(person => {
                console.log(person)
            })
            mongoose.connection.close()
        })
    }

    const person = new Person({
        name: name,
        number: number,
    })
    return person.save()
  })
  .then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    console.log('note saved!')
    return mongoose.connection.close()
  })
// Note.find({}).then(result => {
//     result.forEach(note => {
//     console.log(note)
//     })
//     mongoose.connection.close()
// })
  .catch((err) => console.log(err))