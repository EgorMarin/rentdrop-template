import React from 'react'
import { Form, Input } from 'antd'
import { ButtonComponent as Button } from '../../../common/Button'

const Register = () => {

  const onSubmit = (values) => {
    console.log('values', values);
  }

  return (
    <div className="container">
      <div className="register-step-page">
        <div className="title">Hi, Welcome to</div>
        <div className="sub-title">Rentdrop</div>
        <Form onFinish={onSubmit} className="form">
          <div className="input-label">What Should we call you?</div>
          <div className="form-row-input">
            <Form.Item name="first_name">
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item name="last_name">
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>
          <div className="input-label">What is your phone number?</div>
          <Form.Item name="phone_number">
            <Input placeholder="Last Name" />
          </Form.Item>
          <div className="optional">(Optional: We'll send notifications via text message)</div>
          <div className="footer">
            <Button type="text">Cancel</Button>
            <Form.Item>
              <Button htmlType="submit" isBlue={true} hasCircle={true}>Dashboard</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register
