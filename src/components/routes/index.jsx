import React, { useEffect, useState } from 'react'
import { Modal, List, Divider, Pagination, Avatar } from 'antd'
import { Route } from 'react-router-dom'
import { ButtonComponent as Button } from '../common/Button'

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

  return (
    <div>
      <Route exact path="/home" render={() => (
        <>
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
              <List.Item style={{background: '#FFFFFF', padding: 0, borderBottom: 'none', maxWidth: '1000px', borderRadius: '6px', height: 50, display: 'flex', marginBottom: '10px'}} key={item.title}>
                <div style={{ width: '7%', height: '100%', background: '#F8FFEE', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div>101</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '93%', height: '40px' }}>
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
              <List.Item style={{background: '#FFFFFF', padding: 0, borderBottom: 'none', maxWidth: '1000px', borderRadius: '6px', height: 50, display: 'flex', marginBottom: '10px'}} key={item.title}>
                <div style={{ width: '7%', height: '100%', background: '#F8FFEE', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div>101</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '93%', height: '40px' }}>
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

          <List
            dataSource={data}
            renderItem={item => (
              <List.Item style={{background: '#FFFFFF', padding: 0, borderBottom: 'none', maxWidth: '900px', borderRadius: '6px', height: 70, display: 'flex', marginBottom: '10px'}} key={item.title}>
                <div style={{ display: 'flex', alignItems: 'center', height: '60px', width: '100%' }}>
                  <div className="property" style={{ width: '37%' }}>
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: '5px' }}>Cody Fisher</div>
                        <div style={{ fontWeight: 400, fontSize: 12 }}>codyfisher@gmail.com</div>
                      </div>
                  </div>
                  <div className="teenant" style={{ width: '35%' }}>
                    <div className="teenant__title">Benjamin Keller</div>
                    <div className="teenant__sub-title">Benjaminlandlord@gmail.com </div>
                  </div>
                  <div className="lease" style={{ width: '28%' }}>
                    <div className="lease__title">23 May 2020</div>
                  </div>
                </div>
              </List.Item>
            )}
          />
        </>
      )} 
      />
    </div>
  )
}

export default Routes
