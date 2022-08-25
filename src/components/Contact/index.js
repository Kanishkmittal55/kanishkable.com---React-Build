import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5giqq7d',
        'template_o4ezr5t',
        refForm.current,
        'U_FDvkLAXTFwrVatr'
      )
      .then(
        () => {
          alert('Message sent successfully !')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message , please try again.')
        }
      )
    console.log('hello')
  }

  return (
    <>
      <Sidebar /> <Layout />
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am in interested in challenging opportunities - especially
            ambitious or large projects. How if you have any other request or
            question, don't hesitate to contact me using the form below.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button type="submit" className="flat-button">
                    Send
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kanishk Mittal
          <br />
          United Kingdom,
          <br />
          Kingston Lane, Cleveland Road <br />
          Uxbridge - UB82TL <br />
          <br />
          <span>kanishkmittal55@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[51.53393, -0.47613]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.53393, -0.47613]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact
