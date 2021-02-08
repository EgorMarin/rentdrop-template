import React, { useState } from 'react'
import { Layout, Menu, Steps  } from 'antd';
import { useHistory } from 'react-router-dom';

const { Sider } = Layout;
const { Step } = Steps;


const Sidebar = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const history = useHistory()

  const onStepChange = (key) => {
    const steps = ['property', 'unit', 'home']
    setCurrentStep(key)
    history.push(`/${steps[key]}`)
  }

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <span className="menu-logo"/>
        <Menu.Item key="1" >
          <span className="menu-icon menu-icon--home"/>
          Home
        </Menu.Item>
        <Menu.Item key="2">
          <span className="menu-icon menu-icon--property"/>
          Property
        </Menu.Item>
        <Menu.Item key="3">
          <span className="menu-icon menu-icon--unit"/>
          Unit Details
        </Menu.Item>
        <Menu.Item key="4">
          <span className="menu-icon menu-icon--tenants"/>
          Tenants
        </Menu.Item>
        <Menu.Item key="5">
          <span className="menu-icon menu-icon--account"/>
          Account
        </Menu.Item>
        <Menu.Item key="6">
          <span className="menu-icon menu-icon--applications"/>
          Applications
        </Menu.Item>
        <Menu.Item key="7" >
          <span className="menu-icon menu-icon--settings"/>
          Settings
        </Menu.Item>
      </Menu>
      {/* <div className="steps-wrapper">
        <Steps size="small" current={currentStep} onChange={onStepChange} direction="vertical">
          <Step title="Property" />
          <Step title="Unit Details" />
          <Step title="Add Lease" />
        </Steps>
      </div> */}
    </Sider>
  )
}

export default Sidebar
