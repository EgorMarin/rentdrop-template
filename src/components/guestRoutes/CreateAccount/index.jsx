import React, { useState } from 'react'
import { Input } from 'antd'
import { ButtonComponent as Button } from '../../common/Button'


const CreateAccount = () => {
  const [email, setEmail] = useState('')

  return (
    <div className="sign-page">
      <div className="sign-page__left">
        <div className="background-icon--create-account" />
      </div>
      <div className="sign-page__right">
        <div className="container--sign">
          <div className="title title--create-account">Create Your Account</div>
         <Input className="input-email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
          <div className="footer footer--create-account">
            <div className="already">
              Already a user? <span className="already__link">Signin</span>
            </div>
            <Button className="btn-primary--blue footer__btn">Send Signup Link</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
