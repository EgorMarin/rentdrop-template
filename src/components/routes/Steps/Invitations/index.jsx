import React from 'react'
import { Avatar, List } from 'antd'
import { ButtonComponent as Button } from '../../../common/Button'

const data = [1, 2, 3, 4, 5]

const Invitations = () => {
  return (
    <div className="container">
      <div className="invitations-step-page">
        <div className="title">Pending Invitations</div>
        <div className="invite-text">
          You have no pending invitations. 
        </div>
        <div className='invite-text'>
          No worries, enter the details of where you are renting on the next screen and start taking advantage of RentDrop today!
        </div>
        <List 
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1,
            xxl: 2,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.title}>
              <div className="item-block">
                <div className="list__item--square-invitations">
                  <div className="wrapper">
                    <div className="header">
                      <div className="header__title">Hereford St</div>
                      <div className="header__number">Unit 101</div>
                    </div>
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
                </div>
                <div className="button-group">
                  <div className="button-group__btn button-group__btn--accept">Accept Invitation</div>
                  <div className="button-group__btn button-group__btn--decline">Don’t Accept Invitation</div>
                </div>
              </div>
            </List.Item>
            )}
          />
        <div className="footer">
          <Button type="text">Cancel</Button>
          <Button isBlue={true} hasCircle={true}>Add Unit Details</Button>
        </div>
      </div>
    </div>
  )
}

export default Invitations
