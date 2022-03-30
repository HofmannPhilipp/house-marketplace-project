import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

import {ReactComponent as OfferIcon} from "../assets/svg/localOfferIcon.svg"
import {ReactComponent as ExploreIcon} from "../assets/svg/exploreIcon.svg"
import {ReactComponent as PersonOutlineIcon} from "../assets/svg/personOutlineIcon.svg"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const matchLocation = (route)=>{
    return route === location.pathname
  }

  return (
    <nav className='absolute bottom-0 bg-white w-full flex justify-between px-4 py-5'>
        <div className={matchLocation("/")?"navBtn animate-pulse":"navBtn text-gray-500"}><ExploreIcon className='navIcon' onClick={()=>navigate("/")}/><p>Explore</p></div>
        <div className={matchLocation("/offers")?"navBtn animate-pulse":"navBtn text-gray-500"}><OfferIcon className='navIcon' onClick={()=>navigate("/offers")}/><p>Offers</p></div>
        <div className={matchLocation("/profile")?"navBtn animate-pulse":"navBtn text-gray-500"}><PersonOutlineIcon className='navIcon' onClick={()=>navigate("/profile")}/><p>Profile</p></div>
    </nav>
  )
}

export default Navbar