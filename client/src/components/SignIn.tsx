import InputBox from './InputBox'
import PasswordInputBox from './PasswordBox'
import AuthButton from './AuthButton'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const checkValidation = () => {
    const {email, password} = values;
    if(!email || !password){
        toast.error("All fields are required");
        return false;
    }
    if(password.length<8){
        toast.error("Incorrect Password");
        return false;
    }
    return true;
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(checkValidation()){
      console.log("Email: ", values.email);
      console.log("Login successful");
      navigate('/home');
    }
  } 

  return (
    <div className='h-full my-6'>
        <div className='py-2'>
            <InputBox name="email" type="email" label="Email" handleChange = {handleChange} />
        </div>
        <div className="py-2">
            <PasswordInputBox name="password" label="Password" handleChange = {handleChange} />
         </div>
        <AuthButton label='Sign In' handleSubmit={handleSubmit} />
        <ToastContainer />
    </div>
  )
}
