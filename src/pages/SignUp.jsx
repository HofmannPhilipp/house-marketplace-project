import React,{useState} from 'react'
import {ReactComponent as PersonIcon} from "../assets/svg/personIcon.svg"
import {ReactComponent as LockIcon} from "../assets/svg/lockIcon.svg"
import {ReactComponent as VisibilityIcon} from "../assets/svg/visibilityIcon.svg"
import { ReactComponent as RightArrowIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData,setFormData] = useState({email:"",password:""})
  let {email,password} = formData;

  const onChange =(e)=>{
    console.log(e.target.id);
    setFormData(prevState=>{
      return {
        ...prevState,
        [e.target.id] : e.target.value}
    })
  }
  return (
    <>
    <header className=''>
      <div className='mt-6 mx-5'>
        <h1 className='font-bold text-2xl'>Welcome Back!</h1>
        <form className='mt-8 space-y-4 mb-1'>
          <div className='flex bg-white py-1 rounded-full'>
            <PersonIcon className='mx-3'/>
            <input type="text" placeholder='Email' value={email} id="email" onChange={onChange} className='outline-0 w-4/5'/>
          </div>
          <div className='flex bg-white py-1 rounded-full'>
            <LockIcon className='mx-3'/>
            <input type={showPassword?"text":"password"} placeholder='Password' className='outline-0 w-4/5'id="password" value={password} onChange={onChange}/>
              <VisibilityIcon className={showPassword?"visibilityIcon":"visibilityIcon fill-slate-300"} onClick={()=> setShowPassword((prevState)=>!prevState)}/>
          </div>
        </form>
          <div className='text-right'>
            <Link to="/" className="text-green-400 font-bold cursor-pointer">Forgot Password ?</Link>
          </div>
          <div className='flex justify-between my-5 items-center sm:justify-start space-x-3'>
            <p className='text-xl font-bold'>Sign Up</p>
            <RightArrowIcon className='bg-green-400 rounded-full w-10 h-10 cursor-pointer hover:scale-90 transition duration-500'/>
          </div>
          <div className='text-center'><Link to="/sign-in" className='text-green-400 font-bold cursor-pointer'>Sign In Instead</Link></div>
          
      </div>
      
    </header>
    </>
  )
}

export default SignUp