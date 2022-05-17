import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNav from './AuthNav';
import LoginNav from './LoginNav';

const Stack = createNativeStackNavigator();

export default function Navigation() {

  const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null); 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        
        { false ? LoginNav(Stack) : AuthNav(Stack)   }
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};




















// import LoginScreen from '../screens/LoginScreen';
// import AddUserScreen from '../screens/AddUserScreen';
// import DrawerCom from '../components/DrawerCom';

// <NavigationContainer>
//   <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
//     <Stack.Screen name="Drawer" component={DrawerCom}/>
//     <Stack.Screen name="AddUser" component={AddUserScreen}/>
//   </Stack.Navigator>
// </NavigationContainer>

