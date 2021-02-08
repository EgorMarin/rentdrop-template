import React from 'react'
import { ButtonComponent as Button } from '../../common/Button'

const SignUp = () => {
  return (
    <div className="sign-page">
      <div className="sign-page__left">
        <div className="background-icon" />
      </div>
      <div className="sign-page__right">
        <div className="container--sign">
          <div className="title">Select Catogory </div>
          <div className="sub-title">Please select who you are</div>
          <div className="select-cards">
            <div className="select-cards__card">
              <div className="card__icon card__icon--landlord" />
              <div className="card__title">Landlord</div>
            </div>
            <div className="select-cards__card">
              <div className="card__icon card__icon--tenant" />
              <div className="card__title">Tenant</div>
            </div>
          </div>
          <div className="footer">
            <div className="already">
              Already a user? <span className="already__link">Signin</span>
            </div>
            <Button className="btn-primary--blue footer__btn">Continue</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
