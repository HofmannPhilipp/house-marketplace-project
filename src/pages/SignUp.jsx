import React,{useState} from 'react'
import {ReactComponent as PersonIcon} from "../assets/svg/personIcon.svg"
import {ReactComponent as LockIcon} from "../assets/svg/lockIcon.svg"
import {ReactComponent as VisibilityIcon} from "../assets/svg/visibilityIcon.svg"
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
    <header className=''>
      <div className='mt-6 mx-5'>
        <h1 className='font-bold text-2xl'>Welcome Back!</h1>
        <form className='mt-8 space-y-4'>
          <div className='flex bg-white py-1 rounded-full'>
            <PersonIcon className='mx-3'/>
            <input type="text" placeholder='Email' className='outline-0 w-4/5'/>
            </div>
            <div className='flex bg-white py-1 rounded-full'><LockIcon className='mx-3'/><input type="text" placeholder='Password' className='outline-0 w-4/5'/><VisibilityIcon className={showPassword?"visibilityIcon":"visibilityIcon fill-slate-300"} onClick={()=> setShowPassword((prevState)=>!prevState)}/></div></form>
      </div>
      
    </header>
    </>
  )
}

export default SignUp