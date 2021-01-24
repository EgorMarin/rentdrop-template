import React from 'react'
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import SignIn from './components/guestRoutes/SignIn'
import SignUp from './components/guestRoutes/SignUp'
import Sidebar from './components/common/Siderbar';
import DrawerComponent from './components/common/Drawer';
import Routes from './components/routes';

import "antd/dist/antd.css";
import './styles.scss'

const { Content } = Layout;

const App = () => {

  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route render={() => (
        <Layout>
          <Sidebar />
          <Layout style={{ marginLeft: 200 }}>
            <Content style={{ padding: '105px 0px 0px 90px', overflow: 'initial', minHeight: '100vh' }}>
              <Routes />
            </Content>
            <DrawerComponent />
          </Layout>
        </Layout>
      )} />
    </Switch>
  )
}

export default App
