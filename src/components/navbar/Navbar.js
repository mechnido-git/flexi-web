import React from 'react'
import './navbar.css'
import PrimaryBtn from '../primaryBtn/PrimaryBtn'

function Navbar() {
  return (
    <div className='navbar' id='navbar'>
        <div className="left">
            <p>FLEXI</p>
        </div>
        <div className="center">
            <PrimaryBtn content='Model E' theme='white' />
            <PrimaryBtn content='Model C' theme='white' />
            <PrimaryBtn content='Model O' theme='white' />
        </div>
        <div className="right">
            <PrimaryBtn content='Login' theme='black' />
        </div>
    </div>
  )
}

export default Navbar