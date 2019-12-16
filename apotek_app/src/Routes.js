import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Menu from './pages/Menu';
import Supplier from './pages/Supplier';
import User from './pages/User';

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="menu" component={Menu} title="Main Menu" initial={true} />
            <Scene key="supplier" component={Supplier} title="Supplier Data" />
            <Scene key="user" component={User} title="User Data" />
        </Scene>
    </Router>
)

export default Routes;
