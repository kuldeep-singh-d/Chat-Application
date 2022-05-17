import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ChatBar from '../../components/ChatBar';
import ContacuUserList from '../../components/ContactUserList';
import UsersList from '../../components/ShowUserCom'


export default function ContectScreen (props) {

    return (
        <View style={{ flex: 1 }}>
            <ChatBar navigation={props.navigation}  />
            <ContacuUserList navigation={props.navigation}/>
        </View>
    );
};
