import React, { useState } from 'react'
import { List, Divider, Pagination, Avatar, Progress } from 'antd'
import { Route } from 'react-router-dom'
import { Button, Modal } from '../common'
import { AddProperty, Invitations, Lease, Register, Roommates, UnitDetails } from './Steps'
import SelectedUnit from './Pages/UnitDetails/SelectedUnit'
import UnitDetailsPage from './Pages/UnitDetails/index'

const Routes = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState([
    {},
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

  return <>
    <Route exact path="/home" render={() => (
      <div className="container">
        <div style={{ fontWeight: 400, fontSize: 22, lineHeight: '27px' }}>Hi, Welcome to</div>
        <div style={{ fontWeight: 700, fontSize: 32, lineHeight: '42px' }}>Rentdrop</div>
        <Button type="primary" onClick={() => setModalVisible(true)}>Open modal</Button>
        <Modal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          closeIcon={<div className="modal-close-icon"/>}
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
            <Button hasPlus={true}>Add More units</Button>
          </div>
        </Modal>

        <Divider />

        {/* <div className="poster">
          <div className="poster-body">
            <div className="left-block">
              <div className="left-block__title">Hey! Benjamin</div>
              <div className="left-block__sub-title">1 Step to go to afkjkasfn ljsnfl</div>
            </div>
            <div className="right-block">
              <div className="right-block__item">
                <div className="item__circle">1</div>
                <div className="item__text"><span className="first-word">Link</span> a bank account. credit card. or other payment method</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="home-page-payments-block">
          <div className="left-block">
            <div className="block__item">
              <div className="title">Pending</div>
              <div className="number">$10,000</div>
            </div>
            <div className="block__item">
              <div className="title">Tenants</div>
              <div className="number">12/60</div>
            </div>
            <div className="block__avatars">
              <Avatar.Group
                maxCount={5}
                size="large"
                maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
              >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Avatar.Group>
            </div>
          </div>
          <div className="donut-block">
            <Progress 
              type="circle" 
              percent={40}
              strokeColor='#F9F9F9'
              trailColor="#E9F8B7"
              format={() => 'JUN 20'} 
              width={110} 
            />
            <div className="block__item">
              <div className="title">Total</div>
              <div className="number">$40,000</div>
            </div>
          </div>
          <div className="right-block">
            <div className="block__item">
              <div className="title">Pending</div>
              <div className="number">$10,000</div>
            </div>
            <div className="block__item">
              <div className="title">Tenants</div>
              <div className="number">12/60</div>
            </div>
            <div className="block__avatars" style={{ display: 'flex' }}>
              <Avatar.Group
                maxCount={5}
                size="large"
                maxStyle={{ position: 'absolute', top: '1px', left: '-40px' }}
              >
                <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Avatar.Group>
            </div>
          </div>
        </div> */}

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
                  <div className="lease__title">23 May 2029</div>
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
          renderItem={(item, index) => isSquareCards && index === 0 ? (
            <List.Item className="list__item--empty">
              <div className="circle" />
            </List.Item>
          ) : (
            <List.Item className="list__item list__item--square-unit" key={item.title}>
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
            <List.Item className="list__item--square-property" key={item.title}>
              <div className="wrapper">
                <div className="title">Hereford St</div>
                <div className="sub-title">Address</div>
                <div className="address">302 Hereford St,Massachusetts, 02210 </div>
                <div className="sub-title">Lease Date</div>
                <div className="lease-date">05/01/20 to 03/09/21</div>
              </div>
              <div className="footer footer--gray">
                  <div className='footer__item'>
                    <div className="item__number">34</div>
                    <div className="item__text">Units</div>
                  </div>
                  <div className='footer__item'>
                    <div className="item__number">24</div>
                    <div className="item__text">Tenants</div>
                  </div>
                  <div className='footer__item'>
                    <div className="item__number">$2500</div>
                    <div className="item__text">/ Month</div>
                  </div>
                </div>
            </List.Item>
          )}
        /> */}
      </div>
    )} 
    />
    <Route exact path="/register-step" component={Register} />
    <Route exact path="/property-step" component={AddProperty} />
    <Route exact path="/unit-step" component={UnitDetails} />
    <Route exact path="/lease-step" component={Lease} />
    <Route exact path="/invitations-step" component={Invitations} />
    <Route exact path="/roommates-step" component={Roommates} />
    
    <Route exact path="/unit-details" component={UnitDetailsPage} />
    <Route exact path="/unit/:id" component={SelectedUnit} />
  </>
}

export default Routes
