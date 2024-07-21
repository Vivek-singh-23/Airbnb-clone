const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const User = require('./models/User.js')
const app = express();
const cookieParser = require('cookie-parser')



// convert this variable to .env file
const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = 'anyjwtsecret'

app.use(express.json());
app.use(cookieParser());

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

        await user.save();
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
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token)=>{
                if(err){
                    throw err;
                }
                res.cookie('token', token).json(userDoc);

            });
            
        }else{
            res.status(422).json('pass not ok')
            
        }
    }else{
        res.json('not found');
        alert('user not found')
    }
})


app.get('/profile', (req, res)=>{
    const {token} = req.cookies;
    if(token){
        jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
            if(err){
                throw err;
            }

            const {name, email, _id} = await User.findById(userData.id)
            res.json({name, email, _id});
        })
    }else{
        res.json(null);
    }
})


app.post('/logout', (req, res)=>{
    res.cookie('token', '').json(true);
})


app.get('/account', (req, res)=>{
    console.log('Hello')
})


app.listen(4000, () => {
    console.log('server is running on port 4000');
});
