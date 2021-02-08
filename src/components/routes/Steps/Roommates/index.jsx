import React from 'react'
import { Form, Input, Radio } from 'antd'
import { ButtonComponent as Button } from '../../../common/Button'

const Roommates = () => {
  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div className="container">
      <div className="roommates-step-page">
        <div className="title">Roomate</div>
        <Form
          onFinish={onSubmit}
          className="form"
        >
          <Form.Item name="type" className="radio-item">
            <Radio.Group>
              <Radio value='split'>I Split the Rent</Radio>
              <Radio value='full'>I Pay the Full Amount</Radio>
            </Radio.Group>
          </Form.Item>
          <div className="form-row-input">
            <div className="input-item">
              <div className="input-item__label">Who are you renting with?</div>
              <Form.Item name="first_name">
                <Input placeholder="First Name" />
              </Form.Item>
            </div>
            <div className="input-item input-item--end"> 
              <Form.Item name="last_name">
                <Input placeholder="Last Name" />
              </Form.Item>
            </div>
          </div>
          <div className="form-row-input">
            <div className="input-item">
              <div className="input-item__label">Email Address (optional)</div>
              <Form.Item name="email">
                <Input placeholder="Email Address" />
              </Form.Item>
            </div>
            <div className="input-item"> 
              <div className="input-item__label">Phone Number (optional)</div>
              <Form.Item name="phone">
                <Input placeholder="Phone Number" />
              </Form.Item>
            </div>
          </div>
          <div className="form-row-input">
            <div className="input-item">
              <div className="input-item__label">Their Rent Amount</div>
              <Form.Item name="amount">
                <Input placeholder="Amount / $2,500" />
              </Form.Item>
            </div>
          </div>
          <div className="footer">
            <Button className="btn-back">Back</Button>
            <Form.Item>
              <Button htmlType="submit" isBlue={true} hasCircle={true}>Done</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Roommates
