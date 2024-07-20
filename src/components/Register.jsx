import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(e){
        e.preventDefault();
        try{
            await axios.post('/register', {
                name,
                email,
                password,
            })
    
            alert('Registration Successful')
        }catch(e){
            alert('Registration Failed')
        }
    }

  return (
    <div>
        <Navbar/>
        <div className='mt-[15vh]'>
            <h1 className='text-4xl text-center mb-4'>SignUp</h1>
            <form className='mx-auto max-w-md mt-4' onSubmit={registerUser}>

                <label htmlFor="name" className='px-3'>Name</label>
                <input type="text" name='email' value={name} onChange={e=> setName(e.target.value)} placeholder='Enter your name here' />

                <label htmlFor="email" className='px-3'>Email</label>
                <input type="email" name='email' value={email} onChange={e=> setEmail(e.target.value)} placeholder='Enter your Email here' />

                <label htmlFor="password" className='px-3'>Password</label>
                <input type="password" name='password' value={password} onChange={e=> setPassword(e.target.value)} placeholder='Enter your password here' />
                
                <button className='primary my-5'>Submit</button>

                <div className='text-center text-gray-500'>Already have account? <Link className='text-blue-500 underline' to={'/login'}>Login Here</Link></div>
            </form>
        </div>
    </div>
  )
}

export default Register