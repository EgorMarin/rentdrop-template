import React from 'react'
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import SignUp from './components/guestRoutes/SignUp'
import CreateAccount from './components/guestRoutes/CreateAccount';
import CheckInbox from './components/guestRoutes/CheckInbox'
import Sidebar from './components/common/Siderbar';
import DrawerComponent from './components/common/Drawer';
import Routes from './components/routes';

import "antd/dist/antd.css";
import './styles.scss'

const { Content } = Layout;

const App = () => {
  const isActiveSteps = true
  // поставить ловитель роут паза и по нужным страницам делать смену background

  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/create-account" component={CreateAccount} />
      <Route exact path="/check-inbox" component={CheckInbox} />
      <Route render={() => (
        <Layout>
          <Sidebar />
          <Layout style={{ marginLeft: 200 }}>
            <Content style={{ overflowY: 'scroll', height: '100vh', backgroundColor: isActiveSteps && '#FFFFFF' }}>
              <Routes />
            </Content>
          </Layout>
          <DrawerComponent />
        </Layout>
      )} />
    </Switch>
  )
}

export default App
