require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/person')
app.use(express.json())



app.get('/', (req,res) => {
  res.send('<h1>ELLO ELLO</h1>')
})


const date = new Date();

app.get('/api/persons/info', (req, res) => {

  const contactList = persons.length
  const response = `<p>PhoneBook has info for ${contactList} people <br/><br/>
  ${date}
  </p>`

  res.send(response)
})


app.get('/api/persons/:id', (req,res) =>{

const id = Number(req.params.id)
const person = persons.find(person => person.id === id)

if(person){
  res.json(person)
}
else{
  res.status(404).end()
}


})


app.delete('/api/persons/:id', (req, res) => {

const id = Number (req.params.id)

 persons = persons.filter(note => note.id !== id)

res.status(204).end()


} )

const newId = () => {
 
  const maxId = persons.length > 0 ?
  Math.max(...persons.map(person => person.id))
  : 0

  return maxId + 1

}

app.post('/api/persons' , (req, res) => {

  const body = req.body 

if(!body.name && !body.number){
  return res.status(400).json({
    error: 'Name or Number is missing'
  })
}
else if(persons.find(person => (person.name === body.name))){
  return res.status(400).json({
    error: 'Name is already in the list'
  })
}

else {
  const person = {
    "id" : newId(),
    "name" : body.name,
    "number" : body.number,
  }

  
persons.push(person)
console.log(person);
res.json(person)


}




}
  
  
  
  )

const Port = 3001

app.listen(Port, ()=> {
  console.log(`Server is started on Port ${Port}`)

})
