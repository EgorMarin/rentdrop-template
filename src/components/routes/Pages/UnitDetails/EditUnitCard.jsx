import React, { useState } from 'react'
import { Avatar, Checkbox, DatePicker, Form, Input, Radio, Select, Collapse } from 'antd'
import { Button } from '../../../common/index'

const { Panel } = Collapse;

const EditUnitCard = ({ closeEditing }) => {
  const [unitType, setUnitType] = useState('ocuupied')
  const [tenantsCount, setTenantsCount] = useState([{}])

  const onSubmit = (values) => {
    console.log(values);
  }

  const onUnitTypeChange = (e) => setUnitType(e.target.value)

  return (
    <div className="selected-unit-edit-mode">
      <div className="edit-card">
        <Form
          onFinish={onSubmit}
          className="form"
        >
          <div className="edit-card-body">
            <Button onClick={closeEditing} className="btn-back mb-30">Back</Button>
            <div className="body__title">Unit Details</div>
            <div className="body__sub-title">Hereford St</div>
              <div className="form-title">Unit Details</div>
              <Form.Item name="type" className="radio-item">
                <Radio.Group defaultValue={unitType} onChange={onUnitTypeChange}>
                  <Radio value="ocuupied">Ocuupied</Radio>
                  <Radio value="unocuupied">Unocuupied</Radio>
                </Radio.Group>
              </Form.Item>
              <div className="form-row-input--small">
                <div className="input-item">
                  <div className="input-item__label">Unit#</div>
                  <Form.Item name="number">
                    <Input placeholder="Unit#" />
                  </Form.Item>
                </div>
                <div className="input-item"> 
                  <div className="input-item__label">Rate</div>
                  <Form.Item name="rate">
                    <Input placeholder="Rate" />
                  </Form.Item>
                </div>
              </div>
              <div className="form-row-input--small">
                <div className="input-item">
                  <div className="input-item__label">No: Bedrooms</div>
                  <Form.Item name="quantity_bed">
                    <Input placeholder="No: Bedrooms" />
                  </Form.Item>
                </div>
                <div className="input-item">
                  <div className="input-item__label">No: Bathrooms</div>
                  <Form.Item name="quantity_bath">
                    <Input placeholder="No: Bathrooms" />
                  </Form.Item>
                </div>
              </div>
              { unitType === 'ocuupied' ? (
                  <>
                    { tenantsCount.map((_, index) => (
                        <>
                          <div className="form-title">Tenant Details</div>
                          <div className="form-row-tenant">
                            <Avatar size={70} className="tenant-avatar">U</Avatar>
                            <div className="input-item">
                              <div className="input-item__label">Tenant Full Name</div>
                              <Form.Item name={`tenant_fullname_${index}`}>
                                <Input placeholder="Full Name" />
                              </Form.Item>
                            </div>
                            <div className="input-item">
                              <div className="input-item__label">Email Address</div>
                              <Form.Item name={`tenant_email_${index}`}>
                                <Input placeholder="Email" />
                              </Form.Item>
                            </div>
                          </div>
                        </>
                    ))}
                    <Button disabled={tenantsCount.length > 4} type="text" className="add-more">+ Add More Tenants</Button>
                  </>
                ) : (
                  <div className="invite-tenant">
                    <div className="invite-tenant-title">Tenant Details</div>
                    <div className="invite-tenant-text">
                      No tenant? No Problem. Invite any interested applicant here to review and run background checks. We will get everything else squared away
                    </div>
                    <Button size='default' className="invite-tenant-btn">
                      Invite Applicant
                    </Button>
                  </div>
                )
              }
              <div className="unit-details-collapse">
                <Collapse expandIconPosition='right' ghost>
                  <Panel header="Unit Details">
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
                      <div className="checkbox-item">
                        <Form.Item name="upfront_payment">
                          <Checkbox.Group>
                            <Checkbox value={true}>
                              Upfront Payment?
                            </Checkbox>
                          </Checkbox.Group>
                        </Form.Item>
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </div>
          </div>
          <div className="edit-card-footer">
            <Button type='text' onClick={closeEditing}>Cancel</Button>
            <Button htmlType='submit' isBlue={true}>Save</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default EditUnitCard
