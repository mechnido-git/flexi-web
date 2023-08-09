import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import PrimaryBtn from '../primaryBtn/PrimaryBtn'
import { StoreContext } from '../../store/StoreContext'
import SignIn from '../signIn/SignIn'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/config'

function Navbar() {

  const { model, models, slides } = useContext(StoreContext)
  const [username, setUsername] = useState(false)
  const [dp, setDp] = useState("https://img.icons8.com/ios-glyphs/60/user--v1.png")

  const [login, setLogin] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
        if (user.photoURL) setDp(user.photoURL);
      }
    })
  }, [])

  const popup = () => {
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
        {username ? <>
          <img src={dp} alt="dp" />
          <h4>{username}</h4>
        </> : <PrimaryBtn content='Login' handleClick={popup} theme='black' />}
      </div>
      {login && <div className='wrapper'>
        {/* <SignIn setLogin={setLogin} /> */}
        <SignIn />
      </div>}
    </div>
  )
}

export default Navbar