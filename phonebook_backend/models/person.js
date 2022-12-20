const mongoose = require('mongoose');
const url = process.env.MONGODB_URI
// const password = process.argv[2]
// const name = process.argv[3]
// const number = process.argv[4]

console.log('connecting to', url)

mongoose.set('strictQuery', true);

// if (process.argv.length < 3) {
//     console.log('Please provide the password as an argument: node mongo.js <password>')
//     process.exit(1)
//   }

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(result => {
    console.log('error connecting to', error.message)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

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

module.exports = mongoose.model('Person', personSchema)