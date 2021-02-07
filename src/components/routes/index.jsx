import React, { useEffect, useState } from 'react'
import { Modal, List, Divider, Pagination, Avatar, Switch, Form, Input, Checkbox } from 'antd'
import { Route } from 'react-router-dom'
import { ButtonComponent as Button } from '../common/Button/index'

const Routes = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState([
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (filter) {
      setData([...data].filter(item => item.title === 'Title 4'))
    }
  }, [filter])
  
  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div>
      <Route exact path="/home" render={() => (
        <div className="container">
          <div style={{ fontWeight: 400, fontSize: 22, lineHeight: '27px' }}>Hi, Welcome to</div>
          <div style={{ fontWeight: 700, fontSize: 32, lineHeight: '42px' }}>Rentdrop</div>
          <Button type="primary" onClick={() => setModalVisible(true)}>Open modal</Button>
          <Modal
            closable
            closeIcon={<div className="modal-close-icon"/>}
            visible={modalVisible}
            footer={null}
            onCancel={() => setModalVisible(false)}
            style={{ borderRadius: 20 }}
            width={380}
          >
            <div className="modal-body"> 
              <div className="image" /> 
              <div className="title">All Set</div>
              <div className="text-content">You have successfully added Property details</div>
              <Button className='mb-15'>
                Yes, I will do it later
              </Button>
              <Button type="text">Cancel</Button>
              <Button type="default">Cancel</Button>
              <Button hasCircle={true}>Dashboard</Button>
              <Button type="default" hasPlus={true} onClick={() => setFilter('filter')}>Add More units</Button>
            </div>
          </Modal>

          <Divider />

          {/* <List
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
              total: data.length,
              position: 'bottom'
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item className="list__item" key={item.title}>
                <div className="number-block" style={{ width: '7%' }}>
                  <div>101</div>
                </div>
                <div className="wrapper" style={{ width: '93%' }}>
                  <div className="property" style={{ width: '28%' }}>
                    <div className="property__title">Hereford St</div>
                    <div className="property__sub-title">302 Hereford St,Massachusetts, 02210 Hereford St,Massachusetts, 0221</div>
                  </div>
                  <div className="teenant" style={{ width: '27%' }}>
                    <div className="teenant__title">Benjamin Keller</div>
                    <div className="teenant__sub-title">Benjaminlandlord@gmail.com </div>
                  </div>
                  <div className="lease" style={{ width: '15%' }}>
                    <div className="lease__title">23 May 2020</div>
                  </div>
                  <div className="lease" style={{ width: '15%' }}>
                    <div className="lease__title">23 May 2029</div>
                  </div>
                  <div className="lease" style={{ width: '15%' }}>
                    <div className="lease__title">$2500/month</div>
                  </div>
                </div>
              </List.Item>
            )}
          /> */}

          {/* <List
            dataSource={data}
            renderItem={item => (
              <List.Item className="list__item" key={item.title}>
                <div  className="number-block" style={{ width: '7%' }}>
                  <div>101</div>
                </div>
                <div className="wrapper" style={{ width: '93%' }}>
                  <div className="property" style={{ width: '28%' }}>
                    <div className="property__title">Hereford St</div>
                    <div className="property__sub-title">302 Hereford St,Massachusetts, 02210 Hereford St,Massachusetts, 0221</div>
                  </div>
                  <div className="teenant" style={{ width: '27%' }}>
                    <div className="teenant__title">Benjamin Keller</div>
                    <div className="teenant__sub-title">Benjaminlandlord@gmail.com </div>
                  </div>
                  <div className="lease" style={{ width: '20%' }}>
                    <div className="lease__title">23 May 2020</div>
                  </div>
                  <div className="lease" style={{ width: '25%' }}>
                    <div className="lease__status">
                      Review Application
                    </div>
                  </div>
                </div>
              </List.Item>
            )}
          /> */}

          {/* <List
            dataSource={data}
            renderItem={item => (
              <List.Item className="list__item list__item--lg" key={item.title}>
                <div className="wrapper" style={{ width: '100%' }}>
                  <div className="list-avatar" style={{ width: '10%' }}>
                    <Avatar 
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                      size={54}
                    />
                    <span className="list-avatar__label">#101</span>
                  </div>
                  <div className="contacts" style={{ width: '31%' }}>
                    <div className="contacts__title">Cody Fisher</div>
                    <div className="contacts__sub-title">codyfisher@gmail.com</div>
                  </div>
                  <div className="lease-date" style={{ width: '37%' }}>
                    <div className="lease-date__title">Hereford St</div>
                    <div className="lease-date__sub-title">Lease Date : 2Jan 2020 - 2Jan 2131</div>
                  </div>
                  <div className="rent" style={{ width: '22%' }}>
                    <div className="rent__title">Monthly Rent</div>                    
                    <div className="rent__sub-title">$2500</div>
                  </div>
                </div>
              </List.Item>
            )}
          /> */}

          {/* <List 
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 3,
              xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item className="list__item list__item--square" key={item.title}>
                <div className="wrapper">
                  <div className="number">101</div>
                  <div className="title">Hereford St</div>
                  <div className="sub-title">302 Hereford St,Massachusetts, 02210 </div>
                  <div className="lease-block">
                    <div className="lease-block__left">
                      <div className="lease-block__title">Lease Date</div>
                      <div className="lease-block__date">05/01/20 to 03/09/21</div>
                    </div>
                    <div className="lease-block__right">
                      <div className="lease-block__price">$2500</div>
                      <div className="lease-block__month">/ Month</div>
                    </div>
                  </div>
                  <div className="info-block">
                    <Avatar 
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                      size={40}
                    />
                    <div className="info-block__info">
                      <div className="info__title">Benjamin Keller</div>
                      <div className="info__sub-title">Benjaminlandlord@gmail.com</div>
                    </div>
                  </div>
                </div>
              </List.Item>
            )}
          /> */}


          {/* LandLord Account Page */}

            {/* <div className="account-card">
              <div className="header">
                <div className="header__fullname">
                  <div className="fullname"></div>
                  <div className="email"></div>
                </div>
              </div>
              Form
              <div className="payment-block">
                <div className="payment-block__title">Account Payment Information</div>
                <div className="payment-block__sub-title">Bank Account Details</div>

                <div className="add-btn">+   Add Bank Accont</div>
              </div>
            </div> */}
          
          {/* End */}

          {/* LandLord Setting Page */}

            {/* <div className="settings-card">
              <div className="settings-card__title">Notification Settings</div>
              <Form
                onFinish={onSubmit}
                className="form"
              >
                <div className="form-item">
                  <div className="form-item-title">Notify when payment is made</div>
                  <Form.Item name="when_payment_is_made">
                    <Switch />
                  </Form.Item>
                </div>
                <div className="form-item">
                  <div className="form-item-title">Notify when payment overdue</div>
                  <Form.Item name="when_payment_is_made">
                    <Switch />
                  </Form.Item>
                </div>
                <div className="form-item">
                  <div className="form-item-title">Notify when payment is received</div>
                  <Form.Item name="when_payment_is_made">
                    <Switch />
                  </Form.Item>
                </div>
              </Form>
            </div>

            <div className="settings-card">
              <div className="settings-card__title">Tenant Settings</div>
              <Form
                onFinish={onSubmit}
                className="form"
              >
                <div className="form-item">
                  <div className="form-item__input-block">
                    <div className="input-block__title">Notify Tanent when</div>
                    <Form.Item name="days_before">
                      <Input />
                    </Form.Item>
                    <div className="input-block__title">Days Before rent is due</div>
                  </div>
                  <Form.Item name="before_rent_is_due">
                    <Switch />
                  </Form.Item>
                </div>
                <div className="form-item">
                  <div className="form-item__input-block">
                    <div className="input-block__title">Notify Tanent every</div>
                    <Form.Item name="notify_every">
                      <Select />
                    </Form.Item>
                    <div className="input-block__title">when Payment is overdue</div>
                  </div>
                  <Form.Item name="before_rent_is_due">
                    <Switch />
                  </Form.Item>
                </div>
              </Form>
            </div> */}

          {/* End */}

          {/* Tenant Home Page */}

            {/* <div className="upcoming-payment-card">
              <div className="upcoming-payment-card__title">Upcoming Payments</div>
              <div className="upcoming-payment-card__body">
                <div className="body-item">
                  <div className="body-item__info">
                    <div className="info-column">
                      <div className="info-column__title">Rent Due in</div>
                      <div className="info-column__value">14 Days</div>
                    </div>
                    <div className="info-column">
                      <div className="info-column__title">Rent Due in</div>
                      <div className="info-column__value">14 Days</div>
                    </div>
                  </div>
                  <div className="body-item__btn">
                    <Button>Make Payment</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="auto-payment-card">
              <div className="auto-payment-card__icon" />
              <div className="auto-payment-card__title">Auto Payment</div>
              <div className="auto-payment-card__text">Turn on automatic payment</div>
              <Switch />
            </div>

            <div className="apartments-card">
              <div className="apartments-card__header">
                <div className="header-title">Peace apartments</div>
                <div className="header-number">101</div>
              </div>
              <div className="apartments-card__body">
                <div className="body-items">
                  <div className="item-block">
                    <div className="item-block__title">Address</div>
                    <div className="item-block__address-text">
                      302 Hereford St, Boston, Massachusetts 02210
                    </div>
                  </div>
                  <div className="item-block">
                    <div className="item-block__title">Lease Date</div>
                    <div className="item-block__lease-text">
                      <span>From </span>
                      05/01/20
                    </div>
                  </div>
                  <div className="item-block">
                    <div className="item-block__title">Rent Amount</div>
                    <div className="item-block__rent-text">
                      $2500 <span>/ Month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          {/* End */}

          {/* Tenant Setting Page */}

            <div className="notification-card">
              <div className="notification-card__title">Notification Settings</div>
              <div className="notification-card__sub-title">What type of notifications do i want to recieve?</div>
              <div className="notification-card__switch-block">
                <div className="switch-item">
                  <div className="switch-item__title">In-app</div>
                  <Switch />
                </div>
                <div className="switch-item">
                  <div className="switch-item__title">SMS</div>
                  <Switch />
                </div>
                <div className="switch-item">
                  <div className="switch-item__title">Email</div>
                  <Switch />
                </div>
              </div>
            </div>

            <div className="tenant-setting-card">
              <div className="tenant-setting-card__title">Tenant Settings</div>
              <div className="tenant-setting-card__switch-block">
                <div className="switch-item__title">Notify me when rent is paid</div>
                <Switch />
              </div>
              <div className="tenant-setting-card__switch-block">
                <div className="switch-item__title">Notify me when payment overdue</div>
                <Switch />
              </div>
              <div className="tenant-setting-card__switch-block">
                <div className="input-block__item">
                  <div className="item__title">Notify me</div>
                  <Input 
                    className="item__input"
                  />
                  <div className="item__title">day(s) before rent is due</div>
                </div>
                <Switch />
              </div>
              <div className="tenant-setting-card__switch-block">
                <div className="switch-item__title">Notify me when my landlord sends me a message</div>
                <Switch />
              </div>
            </div>

            <div className="tenant-setting-card">
              <div className="tenant-setting-card__switch-block">
                <div className="input-block__item">
                  <div className="item__title">Notify me</div>
                  <Input
                    className="item__input"
                  />
                  <div className="item__title">day(s) before rent is due</div>
                </div>
                <Switch />
              </div>
              <div className="tenant-setting-card__autopayment-block">
                <div className="input-item">
                  <div className="input-item__title">Autopayment amount</div>
                  <Input />
                </div>
                <div className="checkbox-item">
                  <Checkbox />
                  <div className="checkbox-item__title">Full outstanding balance</div>
                </div>
              </div>
              <div className="back-account-block">
                <div className="back-account-block__title">Bank Account Details</div>
                <Button style={{ color: '#5E8D93', background: '#F8FFEE' }}>+   Add another payment method</Button>
              </div>
            </div>
          {/* End */}

        </div>
      )} 
      />
    </div>
  )
}

export default Routes
