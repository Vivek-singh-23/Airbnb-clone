const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose')
const User = require('./models/User.js')
const app = express();



// convert this variable to .env file
const bcryptSalt = bcrypt.genSaltSync(12);

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));


mongoose.connect('mongodb://localhost:27017/Booking-App')

app.get('/test', (req, res) => {
    res.json("api working");
});


app.post('/register', async(req, res)=>{
    const {name, email, password} = req.body;
    
    try{
        const user = await User.create({
            name,
            email,
            password : bcrypt.hashSync(password, bcryptSalt),
        })


        res.json(user);
    }catch(e){
        console.log(e);
    }
})

app.post('/login', async(req, res)=>{
    const {email, password} = req.body;

    const userDoc = await User.findOne({email});

    if(userDoc){
        const pass = bcrypt.compareSync(password, userDoc.password)
        if(pass){
            console.log('correct password')
        }else{
            res.json('pass not ok')
            console.log('incorrect password')
        }
    }else{
        res.json('not found');
        alert('user not found')
    }
})


app.listen(4000, () => {
    console.log('server is running on port 4000');
});
