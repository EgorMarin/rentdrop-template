import React, { useState } from 'react'
import { Form, Input, Checkbox, Select, DatePicker } from 'antd'
import { ButtonComponent as Button } from '../../../common/Button'

const Lease = () => {
  const [latePaymentCharge, setLatePaymentCharge] = useState(false)

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div className="container">
      <div className="lease-step-page">
        <div className="title">Unit Details</div>
        <div className="sub-item">
          <div className="sub-item-title">Hereford St</div>
          <div className="sub-item-number">#101</div> 
        </div>
        <Form
          onFinish={onSubmit}
          className="form"
        >
          <div className="form-title">Unit Details</div>
          <div className="form-row-input">
            <div className="input-item">
              <div className="input-item__label">Lease Start</div>
              <Form.Item name="lease_start">
                <DatePicker 
                  allowClear={false}  
                />
              </Form.Item>
            </div>
            <div className="input-item"> 
              <div className="input-item__label">Lease End</div>
              <Form.Item name="lease_end">
                <DatePicker 
                  allowClear={false}                
                />
              </Form.Item>
            </div>
          </div>
          <div className="form-row-input">
            <div className="input-item">
              <div className="input-item__label">Frequency</div>
              <Form.Item name="frequency">
                <Select defaultValue="State" />
              </Form.Item>
            </div>
            <div className="input-item"> 
              <div className="input-item__label">Payment Due</div>
              <Form.Item name="payment_due">
                <Select defaultValue="State" />
              </Form.Item>
            </div>
          </div>
          <div className="form-row-input mb-10">
            <div className="input-item">
              <div className="input-item__label">Advance Renewal Notice</div>
              <Form.Item name="notice">
                <Select defaultValue="State" />
              </Form.Item>
            </div>
            <div className="form-checkbox-column">
              <div className="checkbox-item">
                <Form.Item name="req_first_month_upfront">
                  <Checkbox.Group>
                    <Checkbox value={true}>
                      Require first month upfront?
                    </Checkbox>
                  </Checkbox.Group>
                </Form.Item>
              </div>
              <div className="checkbox-item">
                <Form.Item name="req_last_month_upfront">
                  <Checkbox.Group>
                    <Checkbox value={true}>
                      Require last month upfront?
                    </Checkbox>
                  </Checkbox.Group>
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="prorate">
            <div className="prorate__title">Prorate Detected!</div>
            <div className="prorate__text">We detected a prorated period in this schedule. If you require First month upfront, then this prorated period will be charged in the 2nd month. If you do not require First month upfront, the prorate will be charged in the first month</div>
          </div>
          <div className="form-title">Automatic Late Fees</div>
          <div className="checkbox-item mb-20">
            <Form.Item name="late_payment_charge">
              <Checkbox.Group>
                <Checkbox value={true} onChange={e => setLatePaymentCharge(e.target.checked)}>
                  Charge a late payment fee?
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </div>
          {latePaymentCharge && (
            <>
              <div className="form-row-input">
                <div className="input-item">
                  <div className="input-item__label">Flate rate or % of rent?</div>
                  <Form.Item name="rent_type">
                    <Select defaultValue="State" />
                  </Form.Item>
                </div>
              </div>
              <div className="form-row-input">
                <div className="input-item">
                  <div className="input-item__label">Amount?</div>
                  <Form.Item name="amount">
                    <Input placeholder="Unit#" />
                  </Form.Item>
                </div>
                <div className="input-item"> 
                  <div className="input-item__label">Charge after days late</div>
                  <Form.Item name="charge_after_days_late">
                    <Input placeholder="Rate" />
                  </Form.Item>
                </div>
              </div>
            </>
          )}
          
          <div className="footer">
            <Button className="btn-back">Back</Button>
            <Form.Item>
              <Button htmlType="submit" isBlue={true}>Dashboard</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Lease
