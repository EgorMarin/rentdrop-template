import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { Route } from 'react-router-dom'

const Routes = () => {
  const [modalVisible, setModalVisible] = useState(false)

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
              </div>
            </Modal>
          </>
        )} 
      />


    </div>
  )
}

export default Routes
