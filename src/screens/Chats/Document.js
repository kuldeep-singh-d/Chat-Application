import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ChatBar from '../../components/ChatBar';
import DocumentComp from '../../components/DocumentCom';

export default function DocumentScreen(props) {

    return (
        <View style={{ flex: 1 }}>

            <View>
                <ChatBar navigation={props.navigation} />
            </View>
            <View style={{ position: "absolute", marginTop:"16.4%", height:"auto", width:"100%" }}>
                <DocumentComp />
            </View>

        </View>
    );
};

