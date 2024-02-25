require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/person')
app.use(express.json())
app.use(express.static('dist2'))
const cors = require('cors')
app.use(cors())




app.get('/', (req,res) => {
  res.send('<h1>ELLO ELLO</h1>')
})

app.get('/api/persons', (req, res) => {

  Person.find({}).then(person => {
   res.json(person)
console.log(person.length);

  })
  
  
})



app.post('/api/persons' , (req, res) => {

  const body = req.body

  if (!body.content) {
  
    return res.status(400).json({
    
    error: 'content missing'
    
    })
    
    }

 const person = new Person ({

  name : body.name,
  number : body.number,
 })

person.save().then(savedPerson =>{

  res.json(savedPerson)
  console.log(savedPerson);
})


})

const Port = process.env.PORT

app.listen(Port, ()=> {
  console.log(`Server is started on Port ${Port}`)

})
