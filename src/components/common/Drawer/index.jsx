import React, { useState } from 'react'
import { Avatar, Drawer } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const units = ['#101', '#102']

const DrawerComponent = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(true)
  const [unitCount, setUnitCount] = useState(2)

  const onUnitChange = (unit) => {
    console.log('unit', unit);
    //dispatch № of selected unit for preloading data in inputs and etc.
  }

  return (
    <Drawer
      width={340}
      placement="right"
      closable={false}
      onClose={() => setVisibleDrawer(false)}
      visible={true}
      mask={false}
    >
      <div className="drawer-body">
        {/* <div className='drawer-body-header'>
          <div className="title">Add Units</div>
          <div className="sub-title">Number Of Units</div>
        </div>
        <div className='unit-actions'>
          <Button 
            onClick={() => setUnitCount(unitCount + 1)}
            type="primary" 
            shape="circle" 
            icon={<PlusOutlined />} 
            className="unit-actions__btn"
          />
          <div className="unit-actions__count">{unitCount}</div>
          <Button 
            onClick={() => setUnitCount(unitCount - 1)}
            type="primary" 
            shape="circle" 
            icon={<MinusOutlined />} 
            className='unit-actions__btn'
          />
        </div>
        {units.map((unit, index) => (
          <div onClick={() => onUnitChange(unit)} className={index === 0 ? "unit-item unit-item--active" : 'unit-item'}>
            <div className='unit-item__title'>{unit}</div>
            {index !== 0 && <div className="unit-item__text">Click to edit</div>}
          </div>
        ))} */}
        <div className="user-header">
          <div className="avatar">
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} size={110}>EM</Avatar>
          </div>
          <div className="name">Benjamin</div>
          <div className="email">Benjaminlandlord@gmail.com</div>
          <div className="info-block">
            <div className="info-block__item">
              <div className="item__number">42</div>
              <div className="item__text">Vacant</div>
            </div>
            <div className="info-block__item">
              <div className="item__number">16</div>
              <div className="item__text">Occupied</div>
            </div>
            <div className="info-block__item">
              <div className="item__number">102</div>
              <div className="item__text">Total</div>
            </div>
          </div>
        </div>
         
      </div>
    </Drawer>
  )
}

export default DrawerComponent
