const express = require('express')

const app = express()
require('dotenv').config()
const Note = require('./models/note')
app.use(express.static('dist'))
app.use(express.json())
const cors = require('cors')
app.use(cors())




let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]




app.get('/', (req, res)=> {
    res.send('<h1>Ahmed Waqar</h1>')
})


app.get('/api/notes', (req, res) => {

Note.find({}).then(notes => {
  res.json(notes)
})

//res.json(notes)

})


app.get('/api/notes/:id', (req, res) => {
Note.findById(req.params.id).then(note => {
  res.json(note)
})


} )


app.delete('/api/notes/:id', (req, res)=> {

const id = Number (req.params.id)
notes = notes.filter(note => note.id !== id)

res.status(204).end()


})


const newId = () => {
  const maxId = notes.length > 0 
? Math.max(...notes.map(n => n.id))
: 0
return maxId + 1
}


app.post('/api/notes', (req, res) => {
const body  = req.body

if (!body.content) {
  
return res.status(400).json({

error: 'content missing'

})

}

const note = new Note({
  content: body.content,
  important: body.important || false,
  id: newId(),
}) 


note.save().then(savedNote => {
  res.json(savedNote)
  console.log(note);
})
})



const Port = process.env.PORT || 3001 

app.listen(Port, ()=> {

    console.log(`Server running on port ${Port}`)

    console.log(`Check ${Port} Port or visit below link:`)

    console.log(`http://localhost:${Port}`)

    console.log('Or Ctrl + C to Exit the Server...');


})