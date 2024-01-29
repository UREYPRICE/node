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

const personSchema = new mongoose.Schema({

    name: String,
    number: String,
})


const Person = mongoose.model('Person',personSchema)


const person = new Person ({
    name: process.argv[3],
    number: process.argv[4],
})
if(process.argv.length>3){
    person.save().then(result => {

        console.log('Saved in the Matrix, red or Blue pill...')
        console.log(`added ${person.name} number ${person.number} to phonebook` );
        mongoose.connection.close()
    })
    
}

else{
    console.log('Aurg is not grather then 4');
    mongoose.connection.close()
}



