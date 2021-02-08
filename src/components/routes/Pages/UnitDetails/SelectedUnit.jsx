import React, { useState } from 'react'
import { Avatar, Checkbox, DatePicker, Form, Input, Radio, Select, Collapse } from 'antd'
import { Button, Modal } from '../../../common/index'
import EditUnitCard from './EditUnitCard'

const SelectedUnit = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const onEdit = () => setIsEditing(true)

  const onAddTenant = (values) => {
    console.log(values);
  }

  const onModalOpen = () => {
    setModalVisible(true)
  }

  const onModalClose = () => {
    setModalVisible(false)
  }

  return (
    isEditing ? (
      <EditUnitCard 
        closeEditing={() => setIsEditing(false)}
      />
    ) : (
      <div className="selected-unit-page">
        <div className="container--small">
          <div className="top-nav">
            <Button className="btn-back">Back</Button>
            <Button onClick={onEdit}>Edit</Button>
          </div>
          <div className="header">
            <div className="header__title">Hereford St</div>
            <div className="header__number">101</div>
          </div>
          <div className="tenants-block">
            <div className="tenants-block__row">
              <div className="item__column">
                <div className="tenant-item">
                  <div className="tenant-item__row">
                    <div className="name">Benjamin Keller</div>
                    <span className="edit-icon" />
                  </div>
                  <div className="email">Benjaminlandlord@gmail.com</div>
                  <div className="renew">
                    <div className="renew__text">Benjamin has given notice that they would like to renew</div>
                    <div className="renew__button-group">
                      <Button isBlue={true}>Renew</Button>
                      <Button style={{ background: '#F8FFEE', color: '#5E8D93' }}>Don’t Renew</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item__column">
                <div className="tenant-item">
                  <div className="tenant-item__row">
                    <div className="name">Kelsey melanson</div>
                    <span className="edit-icon" />
                  </div>
                  <div className="email">kelseymelansonlandlord@gmail.com</div>
                  <div className="renew">
                    <div className="renew__text">Kelsey has chosen not to renew their lease.</div>
                    <div className="renew__button-group">
                      {/* <Button isBlue={true}>Renew</Button>
                      <Button style={{ background: '#F8FFEE', color: '#5E8D93' }}>Don’t Renew</Button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="item__column">
                <div className="tenant-item">
                  <div className="tenant-item__row">
                    <div className="name">Benjamin Keller</div>
                    <span className="edit-icon" />
                  </div>
                  <div className="email">Benjaminlandlord@gmail.com</div>
                </div>
              </div>
            </div>
            <div onClick={onModalOpen} className="add-button">+ Add More Tenants</div>
          </div>
          <div className="unit-block">
            <div className="unit-block__row">
              <div className="title">Unit</div>
              <div className="text">101</div>
            </div>
            <div className="unit-block__row">
              <div className="title">Property</div>
              <div className="text">Hereford St</div>
            </div>
            <div className="unit-block__row">
              <div className="title">Address</div>
              <div className="text">302 Hereford St,Massachusetts,02210t</div>
            </div>
            <div className="unit-block__row">
              <div className="title">Lease Start Date</div>
              <div className="text">2 Jan 2020</div>
            </div>
            <div className="unit-block__row">
              <div className="title">Lease End Date</div>
              <div className="text">2 Jan 2031</div>
            </div>
          </div>
          <div className="payment-history-block">
            <div className="title">Payment History</div>
            <div className="table">
              <div className="table__row">
                <div className="column column--header">Date</div>
                <div className="column column--header">Due Date</div>
                <div className="column column--header">Amount Paid</div>
                <div className="column column--header">Amount Due</div>
                <div className="column column--header">Payment status</div>
              </div>
              <div className="table__row">
                <div className="column">2 Jan 2020</div>
                <div className="column">10 Jan 2020</div>
                <div className="column">$ 2,500</div>
                <div className="column">$ 2,500</div>
                <div className="column">Payment Sent</div>
              </div>
              <div className="table__row">
                <div className="column">2 Jan 2020</div>
                <div className="column">10 Jan 2020</div>
                <div className="column">$ 2,500</div>
                <div className="column">$ 2,500</div>
                <div className="column">Payment Sent</div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          visible={modalVisible}
          onClose={onModalClose}
        >
          <div className="modal-body">
            <div className="image image--2" /> 
            <div className="title mb-30">Invite Tenant</div>
            <Form
              onFinish={onAddTenant}
              className="modal-form"
              style={{ width: '100%' }}
            >
              <div className="modal-form-item">
                <div className="item__label">Tenant's First Name</div>
                <Form.Item name='name'>
                  <Input placeholder="First Name" />
                </Form.Item>
              </div>
              <div className="modal-form-item">
                <div className="item__label">Tenant's Last Name</div>
                <Form.Item name='name'>
                  <Input placeholder="Last Name" />
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
                  Invite Tenant
                </Button>
              </Form.Item>
            </Form>
            <Button onClick={onModalClose} type="text" className="mb-10">Cancel</Button>
          </div>
        </Modal>
      </div>
    )
  )
}

export default SelectedUnit
