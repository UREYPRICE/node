
const express = require('express')
const app = express()

let persons = [
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



app.get('/api/persons', (req,res) => {
  res.json(persons)
})


const date = new Date();

app.get('/api/persons/info', (req, res) => {

  const contactList = persons.length
  const response = `<p>PhoneBook has info for ${contactList} people <br/><br/>
  ${date}
  </p>`

  res.send(response)
})


const Port = 3001

app.listen(Port, ()=> {
  console.log(`Server is started on Port ${Port}`)

})
