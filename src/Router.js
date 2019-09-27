import React from 'react';
import {Scene,Router} from 'react-native-router-flux'
import LoginForm from '../component/LoginForm';
import {EmployeeList} from '../component/EmployeeList'
const RouterComponent = () => {
    return(
     <Router sceneStyle={{paddingTop:25}}>
         <Scene key="root" hideNavBar>
                <Scene key="Auth">
                <Scene key="login"
                component={LoginForm}
                title="Please Login"
                initial />
                </Scene>
            
                <Scene key="Main">
                <Scene key="employee"
                component={EmployeeList}
                title="Employee List"/>
                </Scene>
         
        </Scene>
      </Router>
);
}
export default RouterComponent;
