import React from 'react'
import { Form, Input, Select } from 'antd'
import { ButtonComponent as Button } from '../../../common/Button'

const AddProperty = () => {

  const onSubmit = () => {}

  return (
    <div className="container">
      <div className="add-property-step-page">
        <div className="title">Add Property</div>
        <Form onFinish={onSubmit} className="form">
          <div className="form-row-input">
            <div className="input-item">
              <div className="input-item__label">Property Name</div>
              <Form.Item name="property_name">
                <Input placeholder="Property Name" />
              </Form.Item>
            </div>
            <div className="input-item">
              <div className="input-item__label">Address</div>
              <Form.Item name="address">
                <Input placeholder="Address" />
              </Form.Item>
            </div>
          </div>
          <div className="form-row-input">
            <div className="input-item">
              <div className="input-item__label">City</div>
              <Form.Item name="city">
                <Input placeholder="City" />
              </Form.Item>
            </div>
            <div className="input-item">
              <div className="input-item__label">State</div>
              <Form.Item name="state">
                <Select defaultValue="State" />
              </Form.Item>
            </div>
          </div>
          <div className="form-row-input">
            <div className="input-item">
              <div className="input-item__label">Zipcode</div>
              <Form.Item name="zipcode">
                <Input placeholder="Zipcode" />
              </Form.Item>
            </div>
          </div>
          <div className="footer">
            <Button className="btn-back">Back</Button>
            <Form.Item>
              <Button htmlType="submit" isBlue={true} hasCircle={true}>Unit Details</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default AddProperty
