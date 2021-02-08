import React, { useState } from 'react'
import { Avatar, Form, Input, Radio, Select, DatePicker } from 'antd'
import { Button, Modal } from '../../../common'

const UnitDetails = () => {
  const [unitType, setUnitType] = useState('ocuupied')
  const [tenantsCount, setTenantsCount] = useState([{}])
  const [modalVisible, setModalVisible] = useState(false)

  const onSubmit = (values) => {
    console.log('values', values);
  }

  const onInviteApplicant = (values) => {
    console.log('applicant values', values);
  }

  const onUnitTypeChange = (e) => {
    setUnitType(e.target.value)
  }

  const onAddTenant = () => {
    setTenantsCount([...tenantsCount, {}])
  }

  const onModalOpen = () => {
    setModalVisible(true)
  }
    
  const onModalClose = () => {
    setModalVisible(false)
  }

  const type = 'landlord'

  return (
    <div className="container">
      <div className="unit-details-step-page">
        <div className="title title--tenant">Unit Details</div>
        {type === 'landlord' ? <div className="sub-title">Hereford St</div> : <div className="sub-title--tenant">Where are you renting?</div>}
        <Form
          onFinish={onSubmit}
          className="form"
        >
          {type === 'landlord' ? (
            <>
              <div className="form-title">Unit Details</div>
              <Form.Item name="type" className="radio-item">
                <Radio.Group defaultValue={unitType} onChange={onUnitTypeChange}>
                  <Radio value="ocuupied">Ocuupied</Radio>
                  <Radio value="unocuupied">Unocuupied</Radio>
                </Radio.Group>
              </Form.Item>
              <div className="form-row-input">
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
              <div className="form-row-input">
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
                    <Button onClick={onAddTenant} disabled={tenantsCount.length > 4} type="text" className="add-more">+ Add More Tenants</Button>
                  </>
                ) : (
                  <div className="invite-tenant">
                    <div className="invite-tenant-title">Tenant Details</div>
                    <div className="invite-tenant-text">
                      No tenant? No Problem. Invite any interested applicant here to review and run background checks. We will get everything else squared away
                    </div>
                    <Button onClick={onModalOpen} size='default' className="invite-tenant-btn">
                      Invite Applicant
                    </Button>
                  </div>
                )
              }
              <div className="footer">
                <Button className="btn-back">Back</Button>
                <div className="button-group">
                  <Button type="default" hasPlus={true}>Add More units</Button>
                  <Form.Item>
                    <Button htmlType="submit" isBlue={true} hasCircle={true}>{unitType === 'ocuupied' ? 'Lease' : 'Dashboard'}</Button>
                  </Form.Item>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="form-row-input--tenant">
                <div className="input-item">
                  <div className="input-item__label">Address</div>
                  <Form.Item name="address">
                    <Input placeholder="Address" />
                  </Form.Item>
                </div>
                <div className="input-item"> 
                  <div className="input-item__label">Unit / Apt (optional)</div>
                  <Form.Item name="unit_number">
                    <Input placeholder="Unit Number" />
                  </Form.Item>
                </div>
              </div>
              <div className="form-row-input--tenant">
                <div className="input-item">
                  <div className="input-item__label">City</div>
                  <Form.Item name="city">
                    <Input placeholder="Enter City" />
                  </Form.Item>
                </div>
                <div className="input-item"> 
                  <div className="input-item__label">State</div>
                  <Form.Item name="state">
                    <Select placeholder="State" />
                  </Form.Item>
                </div>
              </div>
              <div className="form-row-input--tenant">
                <div className="input-item">
                  <div className="input-item__label">Zipcode</div>
                  <Form.Item name="zipcode">
                    <Input placeholder="Enter Number" />
                  </Form.Item>
                </div>
              </div>
              <div className="form-row-input--tenant">
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
              <div className="form-row-input--tenant">
                <div className="input-item">
                  <div className="input-item__label">Amount</div>
                  <Form.Item name="amount">
                    <Input placeholder="Monthly Rent $" />
                  </Form.Item>
                </div>
                <div className="input-item"> 
                  <div className="input-item__label">Payment Due</div>
                  <Form.Item name="rate">
                    <Select placeholder="Day of Month"/>
                  </Form.Item>
                </div>
              </div>
              <div className="footer">
                <Button className="btn-back">Back</Button>
                <Form.Item>
                  <Button htmlType="submit" isBlue={true} hasCircle={true}>Roomates</Button>
                </Form.Item>
              </div>
            </>
          )}
        </Form>
        <Modal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        >
          <div className="modal-body"> 
            <div className="image image--2" /> 
            <div className="title mb-30">Invite Applicant</div>
            <Form
              onFinish={onInviteApplicant}
              className="modal-form"
              style={{ width: '100%' }}
            >
              <div className="modal-form-item">
                <div className="item__label">Applicant full Name</div>
                <Form.Item name='name'>
                  <Input placeholder="Full Name" />
                </Form.Item>
              </div>
              <div className="modal-form-item mb-30">
                <div className="item__label">Email Address</div>
                <Form.Item name='email'>
                  <Input placeholder="Email" />
                </Form.Item>
              </div>
              <Form.Item>
                <Button htmlType="submit" size='default' className="mb-20">
                  Invite Applicant
                </Button>
              </Form.Item>
            </Form>
            <Button onClick={onModalClose} type="text" className="mb-10">Cancel</Button>
          </div>
        </Modal>
        {/* <Modal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        >
          <div className="modal-body"> 
            <div className="image" /> 
            <div className="title">All Set</div>
            <div className="text-content">
              You have successfully added Property details
            </div>
            <Button type="default" size="default" className="modal-body-btn">+ Add another Property</Button>
            <Button size="default" className="modal-body-btn">Take me to Dashboard</Button>
            <Button onClick={onModalClose} type="text" className="mb-10">Cancel</Button>
          </div>
        </Modal> */}
      </div>
    </div>
  )
}

export default UnitDetails
