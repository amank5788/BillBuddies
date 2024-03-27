import React, {useState} from 'react'

import {Link ,useNavigate} from 'react-router-dom'
import { login } from '../../app/authSlice.js'
import Input from '../Input.js'
import Button from '../Button.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import axios from 'axios'

function Signup() {
   
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm();
    const navigate=useNavigate();
 

    const create = async(data) => {
        const formData = new FormData();

        // Append key-value pairs to the FormData object
           
           for(let k in data){
            
            formData.append(k,data[k]);
           }
              // Append avatar file to FormData
        formData.append('avatar', data.avatar[0]); // Assuming avatar is a FileList

           console.log(formData);
        setError("")
        try {
           
            const response = await axios.post('http://localhost:8000/api/v1/users/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
                }
            });

            
            if(response){
                dispatch(login(response.data.data));
                navigate('/dashboard');
            }
            else{
                console.log(data);
                setError("error in coonecting with server")
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div className="flex items-center justify-center w-full p-3">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                       
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link> 
                    
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                    <Input
                        label="Avatar: "
                        type='file'
                        accept="image/*"
                        {...register("avatar", {
                            required: true,
                        })}
                        />
                    <Input
                        label="Username: "
                        placeholder="Enter your Username"
                        {...register("username", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("fullName", {
                            required: true,
                        })}
                        />
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
                            required: true,})}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup