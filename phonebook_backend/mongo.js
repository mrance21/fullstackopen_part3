
const mongoose = require('mongoose');
const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

mongoose.set('strictQuery', true);


if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }

const url = `mongodb+srv://mrance21:${password}@cluster0.ndtepta.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        return mongoose.connection.close()
    })
    .catch((err) => console.log(err))
}

if (process.argv.length > 3) {
    const person = new Person({
        name: name,
        number: number,
    })
    person.save().then(() => {
        console.log(`added ${name} number ${number} to phonebook`)
        console.log('note saved!')
        return mongoose.connection.close()
        })
        .catch((err) => console.log(err))
    } 
