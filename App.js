import React from 'react';
import { View } from 'react-native';
import FlashMessage from "react-native-flash-message";
import Navigation from './src/Navigation/Navigation';
import Header from './src/screens/Chats/Components/header';
import Dashboard from './src/screens/Dashboard/index';



export default function App() {
  return (

    <View style={{ flex:1 }}>
      <Navigation />
      <FlashMessage
        position="top" />
    </View>
    // <Dashboard/>
    
  );
};
