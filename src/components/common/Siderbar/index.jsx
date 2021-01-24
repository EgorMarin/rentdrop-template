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
      {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" >
          nav 1
        </Menu.Item>
        <Menu.Item key="2">
          nav 2
        </Menu.Item>
        <Menu.Item key="3">
          nav 3
        </Menu.Item>
        <Menu.Item key="4">
          nav 4
        </Menu.Item>
        <Menu.Item key="5">
          nav 5
        </Menu.Item>
        <Menu.Item key="6">
          nav 6
        </Menu.Item>
        <Menu.Item key="7" >
          nav 7
        </Menu.Item>
      </Menu> */}
      <div className="steps-wrapper">
        <Steps size="small" current={currentStep} onChange={onStepChange} direction="vertical">
          <Step title="Property" />
          <Step title="Unit Details" />
          <Step title="Add Lease" />
        </Steps>
      </div>
    </Sider>
  )
}

export default Sidebar
