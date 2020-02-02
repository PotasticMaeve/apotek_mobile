import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';


import Sidemenu from './Sidemenu'
import Menu from './pages/Menu';
import Supplier from './pages/Supplier';
import User from './pages/User';

const Routes = () => (
    <Router>
        <Scene key="root">
            {/* <Drawer
                hideNavBar={true}
                key="sidemenu"
                Component={Sidemenu}
                drawerPosition="right"
            > */}
            {/* </Drawer> */}
            
                <Scene hideNavBar={true} key="menu" component={Menu} title="Main Menu" />
                <Scene key="supplier" component={Supplier} title="Supplier Data" />
                <Scene key="user" component={User} title="User Data" />
            
        </Scene>
    </Router>
)

export default Routes;
