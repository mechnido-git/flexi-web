import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from './hero/Hero'
import './home.css'
import Vision, { DetailsSction } from './vision/Vision'
import Service from './service/Service'
// import SecondaryBtn from '../../components/secondaryBtn/SecondaryBtn'

import SecondaryBtn from "../../components/secondaryBtn/SecondaryBtn"
import Cards from '../../components/cards/Cards'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase/config'
import { GoogleAuthProvider, getRedirectResult, onAuthStateChanged } from 'firebase/auth'
import Spinner from '../../components/Spinner'
const services = [
  {
    name: "AUTONOMOUS DRIVING",
    details: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    img: "https://static.wixstatic.com/media/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg/v1/fill/w_951,h_850,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg",
    side: 'l-r',
  },
  {
    name: "REAL-TIME INFORMATION",
    details: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    img: "https://static.wixstatic.com/media/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg/v1/fill/w_951,h_850,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg",
    side: 'r-l',
  },
  {
    name: "PERCEPTION ENABLED",
    details: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    img: "https://static.wixstatic.com/media/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg/v1/fill/w_951,h_850,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg",
    side: 'l-r',
  }
]

const sponsors = [
  {
    name: "GENERAL TRANSPORT",
    src: "https://static.wixstatic.com/media/c837a6_a8508672733a4bb7ba100662952d4f6f~mv2.png/v1/fill/w_175,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/General_Transport.png"
  },
  {
    name: "IDI SOFTWARE",
    src: "https://static.wixstatic.com/media/c837a6_24669e1d20cd4f079fd2ea5e253c99b8~mv2.png/v1/fill/w_110,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IDI_Software.png"
  },
  {
    name: "IMOGEN CARS",
    src: "https://static.wixstatic.com/media/c837a6_db1c6e9c1b95497f81465ccd218fa048~mv2.png/v1/fill/w_110,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Imogen_Cars.png"
  },
  {
    name: "TRI-NEX",
    src: "https://static.wixstatic.com/media/c837a6_81bc98e386764170adbb3e97cc7e1655~mv2.png/v1/fill/w_160,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tri-Nex%20.png"
  }
]




function Home() {

  const [loading, setLoading] = useState(true)
  const [redirectLoad, setRedirectLoad] = useState(false)

  const checkUser = async (user) => {
console.log(user.uid);
try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          cover: true
        });
      }
      setRedirectLoad(false)
    } catch (error) {
      alert(error)
      setRedirectLoad(false)
    }
  }

  useEffect(() => {
    getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      setRedirectLoad(true)
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      checkUser(user)

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    onAuthStateChanged(auth, (user) => {

      if (user) {
        // setUserName(user.displayName);
        // setName(user.displayName);
        // setEmail(user.email);
        // if (user.photoURL) setDp(user.photoURL);
        setLoading(false);
        // if(last[0] === "#"){
        //   const id = last.slice(1, last.length)
        //   console.log(id);
        //   document.getElementById(id).scrollIntoView({behavior: 'smooth'});
        // }
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading || redirectLoad) return <Spinner />

  return (
    <div className='home'>
      <div className="main">
        <Navbar />
        <Hero />
        <div className="gap"></div>
        <Vision data={{ title: "VISION", subtitle: "We’re Changing the Way the World Thinks About Cars", info: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." }} />
        <div className="services">
          <div className="details-container">
            <div className="details">
              <span>SERVICES</span>
              <p>We Deliver Exceptional Products and Services Around the World</p>
            </div>
          </div>
        </div>
        <Service data={services} />
        <div className="autono-div">
          <img src="https://static.wixstatic.com/media/c837a6_870aaf57c1d9484a9a6ee57f2465df75~mv2.jpg/v1/fill/w_1522,h_880,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_870aaf57c1d9484a9a6ee57f2465df75~mv2.jpg" alt="" />
          <div className="content">
            <div className="details-container">
              <div className="details">
                <div className="title">
                  <span>WHY AUTONO</span>
                  <p>A different approach, using a new method of manufacturing.</p>
                </div>
                <div className="info">
                  <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <SecondaryBtn content='Read More' theme='black' />
              </div>
            </div>
          </div>
        </div>
        <div className="autono-metrics">
          <img src="https://static.wixstatic.com/media/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg/v1/fill/w_951,h_950,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg" alt="" />
          <div className="metrics-div">
            <span>Autono In Numbers</span>
            <div className="metrics-container">
              <div className="metrics">
                <div className="number"><span>200</span></div>
                <p>EMPLOYEES</p>
              </div>
              <div className="metrics">
                <div className="number"><span>5</span></div>
                <p>CORE TEAMS</p>
              </div>
              <div className="metrics">
                <div className="number"><span>200M$</span></div>
                <p>CAPITAL</p>
              </div>
              <div className="metrics">
                <div className="number"><span>326</span></div>
                <p>PARTNERS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="industry vision">
          <DetailsSction data={{ title: "INDUSTRY", subtitle: "Our Partners", info: `Click here to add your own content and customize the text. This is a great place to tell a story about your company and let your users know a little more about the company's history, the team's background, or any other information you'd like to share. Just click "Edit Text" to get started.` }} />
          <div className="sponsors">
            {sponsors.map((item, key) => <div key={key} className='sponsor' >
              <img src={item.src} alt="" />
              <span>{item.name}</span>
            </div>)}
          </div>
        </div>
        <div className="careers">
          <div className="details-container">
            <div className="details">

              <span>CAREERS</span>
              <p>We’re looking for innovative talent to join our team. See all positions and submit your CV</p>

              <div className="button">

              </div>
              <SecondaryBtn content='Openings' theme='black' />
            </div>
          </div>
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Home