import React, { useEffect, useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import SplashPhoto from "../images/splash-main-photo.jpeg"

const FormContainer = () => {
  const [email, setEmail] = useState("")
  const [isEmailValid, setEmailValid] = useState(false)
  const [optInMessage, setOptInMessage] = useState("Stay in the loop below")

  useEffect(() => {
    validateEmail()
  })

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const validateEmail = () => {
    const reg = /^\S+@\S+$/
    const result = reg.test(email)
    setEmailValid(result)
  }

  const generateMsg = () => {
    if (isEmailValid) setOptInMessage("Thanks. You're on the list! 😎")
    else setOptInMessage("Invalid email. Try again! ")
  }

  const disableFormFields = () => {
    if (isEmailValid) {
      document.querySelector("#opt-in-button").disabled = true
      document.querySelector("#email-input-field").disabled = true
    }
  }

  const resetEmailField = () => {
    if (isEmailValid) setEmail("")
  }

  const addEmailToList = async () => {
    await addToMailchimp(email)
  }

  const handleSubmit = () => {
    validateEmail()
    generateMsg()
    disableFormFields()
    resetEmailField()
    addEmailToList()
  }

  return (
    <div className="form-container">
      <h2 className="pitch-header mobile">Don't sweat the hard stuff.</h2>
      <div className="left-panel">
        <img className="splash-img" src={SplashPhoto} alt="main splash" />
      </div>
      <div className="right-panel">
        <div className="right-content">
          <h2 className="pitch-header desktop">Don't sweat the hard stuff.</h2>
          <div className="body-pitch bp1">
            <p>
              <strong>HobbyHire</strong> makes it easy to find passionate people
              who have a knack for the things you dread doing yourself.
            </p>
          </div>
          <p className="body-pitch bp2">
            <span role="img" aria-labelledby="">
              📩 &nbsp;
            </span>
            {optInMessage}
          </p>

          <div className="notify" id="notify-form">
            <input
              id="email-input-field"
              onChange={handleEmailChange}
              placeholder="Enter your email here"
              type="text"
              value={email}
            />
            <button
              className="opt-in"
              id="opt-in-button"
              type="submit"
              onClick={handleSubmit}
            >
              Notify me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormContainer
