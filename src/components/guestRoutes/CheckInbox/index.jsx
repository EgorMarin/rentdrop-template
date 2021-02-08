import React from 'react'
import { ButtonComponent as Button } from '../../common/Button'

const SignIn = () => {
  return (
    <div className="sign-page">
      <div className="sign-page__left">
        <div className="background-icon--check-inbox" />
      </div>
      <div className="sign-page__right">
        <div className="container--sign">
          <div className="title">Check Your Inbox</div>
          <div className="sub-title sub-title--check-inbox">We've sent a magic login link to <b>“john.doe@gmail.com”</b> Please click on the link in that email to be automatically logged in to the site.</div>
          <div className="footer footer--check-inbox">
            <div className="wrapper">
              <Button className="btn-primary--blue footer__btn--check-inbox">Didn’t get the link? Send Again</Button>
              <div className="already">
                Already a user? <span className="already__link">Signin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
