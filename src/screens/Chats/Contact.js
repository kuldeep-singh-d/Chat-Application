import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ChatBar from '../../components/ChatScreenComponent/ChatBar';
import ContacuUserList from '../../components/ChatScreenComponent/ContactUserList';



export default function ContectScreen (props) {

    return (
        <View style={{ flex: 1 }}>
            <ChatBar navigation={props.navigation}  />
            <ContacuUserList navigation={props.navigation}/>
        </View>
    );
};
