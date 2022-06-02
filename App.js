import React from 'react';
import { View } from 'react-native';
import FlashMessage from "react-native-flash-message";
import Navigation from './src/Navigation/Navigation';

export default function App() {
  return (

    <View style={{ flex:1 }}>
      <Navigation />
      <FlashMessage
        position="top" />
    </View>

  );
};
