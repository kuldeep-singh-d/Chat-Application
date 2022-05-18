import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screens/Home/index';
import ProfileScreen from '../../screens/Profile/index';
import AddUserScreen from '../../screens/AddUser/index';
import CustomDrawer from './CustomDrawerComponent';
import AddUserComponent from '../AddUserComponent/AddUserComponent';

const Drawer = createDrawerNavigator();

export default function DrawerComponent (props) {
    return (

        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: 'center',headerRight: () => <AddUserComponent navigation={props.navigation} /> }} />
            <Drawer.Screen name="Add User" component={AddUserScreen} options={{ headerTitleAlign: 'center' }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerTitleAlign: 'center' }} />
        </Drawer.Navigator>

    );
}

