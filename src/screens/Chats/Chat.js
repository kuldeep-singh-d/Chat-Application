import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import ChatMessages from '../../components/ChatMsg';

import ChatBar from '../../components/ChatBar';


export default function Chatscreen(props) {
    const { navigation } = props;

    return (
        <View >
            <View>
                <ChatBar navigation={props.navigation} />
            </View>

            <View style={{ position: "absolute", marginTop:"16.4%", height:"auto", width:"100%" }}>
                <ChatMessages />
            </View>


            <TouchableOpacity
                // onPress={() => { alert('Done'); }}
                onPress={() => { navigation.navigate("Dashboard")}}
                style={{ top: 480, marginHorizontal: 25 }}>
                <View style={{ backgroundColor: "#3F5F73", paddingVertical: 10, alignItems: 'center', borderRadius: 7 }}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500' }}>JOIN</Text>
                </View>
            </TouchableOpacity>


        </View>
    );
};


