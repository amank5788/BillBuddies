import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../../app/authSlice.js'
import Button from '../Button.js'
import Input from '../Input.js'
import {useDispatch} from "react-redux"

import {useForm} from "react-hook-form"
import axios from 'axios'
import AuthServices from '../../services/AuthServices.js'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const Login = async(data) => {
        setError("")
        try{
            const combinedData={};
            const response= await AuthServices.login(data,setError);
            if(response){
             console.log(response)
             try {
                const alluser=await axios.get('http://localhost:8000/api/v1/users/get-all-users',);
                if(alluser){
                    combinedData.alluser=alluser.data.data;
                    combinedData.user=response.user;
                     console.log(alluser.data.data)
                }
                else{
                   console.log('err while feteching')
                }
                
             } catch (error) {
                console.log(error)
             }
           
             dispatch(authLogin(combinedData));
             console.log('/dashboard/dash');
             navigate('/dashboard');
            }

        }catch(err){
                setError(err);
        }
      
        
    }

  return (
    <div
    className='flex items-center justify-center w-full p-3'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                    
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(Login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login;