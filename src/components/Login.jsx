import React from 'react'
import { useState } from 'react' 
import axios from 'axios'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLoginSubmit(e){
        e.preventDefault();
        try{
            await axios.post('/login', {email, password});
            console.log('Data posted')
        }catch(e){
            console.log('Data not posted')
        }
    }

  return (
    <div>
        <Navbar/>
        <div className='mt-[15vh]'>
            <h1 className='text-4xl text-center mb-4'>Login</h1>
            <form className='mx-auto max-w-md mt-4' onSubmit={handleLoginSubmit}>
                <label htmlFor="email" className='px-3'>Email</label>
                <input type="email" name='email' placeholder='Enter your Email here' value={email} onChange={e=>setEmail(e.target.value)} />

                <label htmlFor="password" className='px-3'>Password</label>
                <input type="password" name='password' placeholder='Enter your password here' value={password} onChange={e=>setPassword(e.target.value)}/>
                <button className='primary my-5'>Login</button>

                <div className='text-center text-gray-500'>Dont have account? <Link className='text-blue-500 underline' to={'/register'}>SignUp Here</Link></div>
            </form>
        </div>
    </div>
  )
}

export default Login