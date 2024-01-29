const mongoose = require('mongoose')

if(process.argv.length<3){
    console.log('Password to the Matrix! Plz :');
    process.exit(1)

}

const password = process.argv[2]

const url = 

`mongodb+srv://ahmed:${password}@cluster0.c7vzfjg.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({

    content: String,
    important: Boolean,
})


const Note = mongoose.model('Note',noteSchema)


const note = new Note ({
    content: 'HTML is Easy',
    important: true,
})

note.save().then(result => {

    console.log('Saved in the Matrix, red or Blue pill...')
    mongoose.connection.close()
})



