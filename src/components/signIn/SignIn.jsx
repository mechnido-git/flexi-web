import './signin.css'
import google from './google.png'
import { useState } from 'react';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Spinner from '../Spinner';

export const displayError = (inputField, errorField, msg) => {
  errorField.style.display = "block";
  errorField.innerText = msg;
  inputField.classList.add("inp-error")
}

export const validateEmail = (email) => {
  var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  if (email.length === 0) {
    return { error: true, msg: "Email cannot be empty" }
  } else if (!email.match(pattern)) {
    return { error: true, msg: "Please include an '@' symbol and a valid domain extension such as .com or .net." }
  }
  return { error: false }
}

export const validatePassword = (password) => {
  var validRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (password.length === 0) {
    return { error: true, msg: "Password cannot be empty" }
  } else if (!password.match(validRegex)) {
    return { error: true, msg: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" }
  }
  return { error: false }
}

export const validateName = (name) => {
  var letters = /^[a-zA-Z ]*$/
  if (name.length < 3) {
    return { error: true, msg: "Name Must be more than 3 characters" }
  } else if (!name.match(letters)) {
    return { error: true, msg: "Name Must be in Alphabetics" }
  }
  return { error: false }
}

export const validatePhone = (phone) => {
  if (phone.length === 0) {
    return { error: true, msg: "Phone cannot be empty" }
  } else if (phone.length < 10) {
    return { error: true, msg: "Phone must be 10 numbers" }
  } else if (!(!isNaN(phone) && !isNaN(parseFloat(phone)))) {
    return { error: true, msg: "Phone must be numeric" }
  } else if (phone.length > 10) {
    return { error: true, msg: "phone must be 10 numbers" }
  }
  return { error: false }
}

export const onChangeInput = (e, setValue, errorId) => {
  setValue(e.target.value)
  const error = document.getElementById(errorId)
  e.target.classList.remove("inp-error")
  error.innerHTML = ""
  error.style.display = "none"
  const type = e.target.dataset.type
  if (type === "email") {
    const emailResult = validateEmail(e.target.value)
    if (emailResult.error) displayError(e.target, error, emailResult.msg)
  } else if (type === "password") {
    const passResult = validatePassword(e.target.value)
    if (passResult.error) displayError(e.target, error, passResult.msg)
  } else if (type === "name") {
    setValue(e.target.value.toUpperCase())
    const nameResult = validateName(e.target.value)
    if (nameResult.error) displayError(e.target, error, nameResult.msg)
  } else if (type === "phone") {
    const phoneResult = validatePhone(e.target.value)
    if (phoneResult.error) displayError(e.target, error, phoneResult.msg)
  }
}



const SignIn = () => {

  const [loading, setLoading] = useState(false)
  const [section, setSection] = useState(0)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [fullName, setFullName] = useState('')
  const [upEmail, setUpEmail] = useState('')
  const [upPassword, setUpPassword] = useState('')
  const [phone, setPhone] = useState('')

  const showPassword = (e) => {
    let pwFields =
      e.target.parentElement.parentElement.querySelectorAll(".password");
    console.log(pwFields);
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        e.target.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      e.target.classList.replace("bx-show", "bx-hide");
    });
  };

  const open = async (user, isPhone) => {
    const docRef = doc(db, "users", user.uid);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          cover: true,
          phone: isPhone? phone: null,
        });
      }
      window.location.reload();

    } catch (error) {
      alert(error)
    }
  };

    const handleSignUp = (e) => {
    setLoading(true);
    e.preventDefault();

    const nameField = document.getElementById('up-name')
    const phoneField = document.getElementById('up-phone')
    const emailField = document.getElementById('up-email')
    const passField = document.getElementById('up-pass')


    const nameError = document.getElementById('up-name-error')
    const phoneError = document.getElementById('up-phone-error')
    const emailError = document.getElementById('up-email-error')
    const passError = document.getElementById('up-pass-error')

    const nameResult = validateName(fullName)
    const emailResult = validateEmail(upEmail)
    const phoneResult = validatePhone(phone)
    const passResult = validatePassword(upPassword)

    let flag = false

    if(nameResult.error){
      displayError(nameField, nameError, nameResult.msg)
      flag = true
    }
    if(emailResult.error){
      displayError(emailField, emailError, emailResult.msg)
      flag = true
    }
    if(phoneResult.error){
      displayError(phoneField, phoneError, phoneResult.msg)
      flag = true
    }
    if(passResult.error){
      displayError(passField, passError, passResult.msg)
      flag = true
    }

    if(!flag){
      createUserWithEmailAndPassword(auth, upEmail, upPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: fullName,
        })
          .then(() => {
            console.log("updated");
            open(user, true)
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
        // ..
        setLoading(false);
      });
    }else{
      setLoading(false)
    }

  };

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();

    const error = document.querySelectorAll('.error')
    error.forEach(item => item.style.display = "none")
    error.forEach(item => item.innerHTML = "")

    const emailError = document.getElementById('log-email-error')
    const emailInput = document.getElementById('log-email')

    const passError = document.getElementById('log-pass-error')
    const passInput = document.getElementById('log-pass')

    let flag = false;
    const emailResult = validateEmail(email)
    const passResult = validatePassword(password)
    if (emailResult.error) {
      displayError(emailInput, emailError, emailResult.msg)
      flag = true
    }
    if (passResult.error) {
      displayError(passInput, passError, passResult.msg)
      flag = true
    }

    if (!flag) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          open(user)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

    const signInGoogle = (e) => {
    e.preventDefault();
    setLoading(true)
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  };

  const renderSection = () => {
    switch (section) {
      case 0: return (
        <>
          <h2>Log In</h2>
          <form>
            <div className="input-div">
              <input type="email" id='log-email' onChange={(e) => onChangeInput(e, setEmail, 'log-email-error')} data-type="email" placeholder='Email' />
              <span className='error' id='log-email-error'></span>
            </div>
            <div className="input-div">
              <input id='log-pass' type="password" onChange={(e) => onChangeInput(e, setPassword, 'log-pass-error')} data-type="password" className='password' placeholder='Password' />
              <i
                onClick={showPassword}
                className="bx bx-hide eye-icon"
              ></i>
            </div>
            <span className='error' id='log-pass-error'></span>
            <a href='#' className='forg'>Forgot Password?</a>
            <div className="input-div">
              <input type="button" onClick={handleLogin} value='Log In' />
            </div>
          </form>
          <div className="new-acc">
            <p>Don't have an account?</p><a href='#' onClick={()=>setSection(1)} >Sign Up</a>
          </div>
          <div className="divider">
            <p>OR</p>
          </div>
          <div className="media-options">
            <a className="field google" onClick={signInGoogle} >
              <img src={google} alt="" className="google-img"  />
              <span>Login with Google</span>
            </a>
          </div>
        </>
      )

      case 1: return (
        <>
          <h2>Sign In</h2>
                    <form >
              <div className="field input-div">
                <input
                  id="up-name"
                  required
                  data-type="name"
                  type="text"
                  minLength={3}
                  value={fullName}
                  onChange={(e) => onChangeInput(e, setFullName, "up-name-error")}
                  placeholder="Full Name"
                  className="input"
                />
              </div>
              <div className="error" id="up-name-error"></div>
              <div className="field input-div">
                <input
                  id="up-phone"
                  required
                  data-type="phone"
                  type="phone"
                  value={phone}
                  onChange={(e) => onChangeInput(e, setPhone, "up-phone-error")}
                  placeholder="Phone"
                  className="input"
                  pattern=  "^[0-9]{10}$"
                />
              </div>
              <div className="error" id="up-phone-error"></div>
              <div className="field input-div">
                <input
                  required
                  id="up-email"
                  data-type="email"
                  type="email"
                  value={upEmail}
                  onChange={(e) => onChangeInput(e, setUpEmail, "up-email-error")}
                  placeholder="Email"
                  className="input"
                  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                  // pattern=" /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  // pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  ///^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.
                />
              </div>
              <div className="error" id="up-email-error"></div>
              <div className="field input-div">
                <input
                  id="up-pass"
                  data-type="password"
                  required
                  type="password"
                  placeholder="Password"
                  className="password"
                  value={upPassword}
                  onChange={(e) => onChangeInput(e, setUpPassword, "up-pass-error")}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <i onClick={showPassword} className="bx bx-hide eye-icon"></i>
              </div>
              <div className="error" id="up-pass-error"></div>
              <div className="field button-field">
                <input onClick={handleSignUp} className="submit-btn" type="button" name="" id="" value="Sign up" />
              </div>
            </form>

            <div className="form-link new-acc">
              <span>
                Already have an account?{" "}
                <a href='#' onClick={() => setSection(0)} className="link signup-link">
                  Sign in
                </a>
              </span>
            </div>
            {/* <div className="form-link">
              <span>
                By clicking "Sign up," you agree to our
                <br />
                <b>
                  <HashLink smooth to="/terms/#terms" target="_blank">
                  Terms of Use
                  </HashLink>
                </b>{" "}
                and our{" "}
                <b>
                  <HashLink smooth to="/privacy-policy/#privacy" target="_blank">
                  Privacy Policy
                  </HashLink>
                </b>
                .{" "}
              </span>
            </div> */}

            <div className="line"></div>
            <div className="media-options">
              <a href="" className="field google" onClick={signInGoogle}>
                <img src={google} alt="" className="google-img" />
                <span>Login with Google</span>
              </a>
            </div>
        </>
      )

      default: return null
    }
  }

  return (
    <div className="signin-div">
      {loading && <Spinner />}
      {renderSection(section)}
    </div>
  )
}

export default SignIn