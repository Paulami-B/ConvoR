import InputBox from './InputBox'
import PasswordInputBox from './PasswordBox'
import AuthButton from './AuthButton'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const checkValidation = () => {
    const {name, email, password, confirmPassword} = values;
    if(!name || !email || !password || !confirmPassword){
      toast.error("All fields are required");
      return false;
    }
    if(password!==confirmPassword){
      toast.error("Passwords do not match. Please try again.");
      return false;
    }
    else if(password.length<8){
      toast.error("Password must be atleast 8 characters long.");
      return false;
    }
    else if(name.length<3){
      toast.error("Name must be atleast 3 characters long.");
      return false;
    }
    return true;
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(checkValidation()){
      console.log("Name: ", values.name);
      console.log("Email: ", values.email);
      console.log("Sign up successful")
      navigate('/home');
    }
  }

  return (
    <div>
        <InputBox name="name" type="text" label="Name" handleChange={handleChange} />
        <InputBox name="email" type="email" label="Email" handleChange={handleChange} />
        <PasswordInputBox name="password" label="Password" handleChange={handleChange} />
        <PasswordInputBox name="confirmPassword" label="Confirm Password" handleChange={handleChange} />
        <AuthButton label='Sign Up' handleSubmit = {handleSubmit} />
        <ToastContainer />
    </div>
  )
}
