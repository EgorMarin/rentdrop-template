import { Drawer } from 'antd'
import React, { useState } from 'react'

const units = ['#101', '#102']

const DrawerComponent = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(true)

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
      visible={visibleDrawer}
    >
      <div style={{ fontWeight: 700, fontSize: 18, lineHeight: '23px' }}>Add Units</div>
      <div style={{ fontWeight: 400, fontSize: 16, lineHeight: '20px', marginBottom: 15 }}>Number Of Units</div>
      {units.map(unit => (
        <div onClick={() => onUnitChange(unit)} style={{ border: '2px solid #5E8D93', boxSizing: 'border-box', borderRadius: 6, marginBottom: 15, padding: 14 }}>
          <div>{unit}</div>
        </div>
      ))}
      
    </Drawer>
  )
}

export default DrawerComponent
