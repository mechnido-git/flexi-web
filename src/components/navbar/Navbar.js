import React, { useContext, useState } from 'react'
import './navbar.css'
import PrimaryBtn from '../primaryBtn/PrimaryBtn'
import { StoreContext } from '../../store/StoreContext'
import SignIn from '../signIn/SignIn'


function Navbar() {

  const { model, models, slides } = useContext(StoreContext)

  const [login, setLogin] = useState(false)

  const popup = ()=>{
    setLogin(true)
    document.querySelector('.main').classList.add('disable-scroll')
  }

  const move = (index) => {
    slides.current.splide.Components.Move.move(
      index,
      index,
      index + 1
    )
  }

  return (
    <div className='navbar' id='navbar'>
      <div className="left">
        <p>FLEXI</p>
      </div>
      <div className="center">
        {models.map((item, index) => (
          <PrimaryBtn content={item.name} handleClick={() => move(index)} theme={model === index ? 'black' : 'white'} />
        ))}
      </div>
      <div className="right">
        <PrimaryBtn content='Login' handleClick={popup} theme='black' />
      </div>
      {login && <div className='wrapper'>
          {/* <SignIn setLogin={setLogin} /> */}
          <SignIn />
      </div>}
    </div>
  )
}

export default Navbar