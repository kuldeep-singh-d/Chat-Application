import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NetworkInfo } from 'react-native-network-info';
import ChatBar from '../../components/ChatBar';

export default function DetailScreen (props) {

    const [currentDate, setCurrentDate] = useState('');
    const [ipAddress, setIpAddress] = useState('');

    NetworkInfo.getIPAddress().then(ipAddress => { 
        setIpAddress(ipAddress);
    });

    useEffect(() => {
        var hours = new Date().getHours();
        var min = new Date().getMinutes();

        setCurrentDate(hours + ':' + min);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ChatBar navigation={props.navigation} />
            
            <View style={{marginTop:34}}>
                <View style={{marginHorizontal:20, marginBottom:7}}>
                    <Text>Name</Text>
                    <Text style={{fontSize:18, color:'#000'}}>{"G235464"}</Text>
                </View>
                
                <View style={{marginHorizontal:20, marginBottom:7, marginTop:7}}>
                    <Text>Email</Text>
                    <Text style={{fontSize:18, color:'#000'}}>{"user1@gmail.com"}</Text>
                </View>
                
                <View style={{marginHorizontal:20, marginBottom:7, marginTop:7}}>
                    <Text>Add a note here</Text>
                    <Text style={{fontSize:18, color:'#000'}}>{"Please contact me once any come Online..."}</Text>
                </View>
            </View>
            
            <View style={{ borderBottomColor: '#b2babb', borderBottomWidth: 1, marginVertical:14, marginHorizontal:12 }}/>

            <View>
                <View style={{flexDirection:'row' , justifyContent:'space-between', marginHorizontal:20, marginBottom:14}}>
                    <Text style={{fontSize:18}}>Last Visit</Text>
                    <Text style={{fontSize:18}}>{currentDate}</Text>
                </View>
                
                <View style={{flexDirection:'row' , justifyContent:'space-between', marginHorizontal:20, marginBottom:14}}>
                    <Text style={{fontSize:18}}>Chats</Text>
                    <Text style={{fontSize:18}}>{"0"}</Text>
                </View>
                
                <View style={{flexDirection:'row' , justifyContent:'space-between', marginHorizontal:20, marginBottom:14}}>
                    <Text style={{fontSize:18}}>IP</Text>
                    <Text style={{fontSize:18}}>{ipAddress}</Text>
                </View>
                
                <View style={{flexDirection:'row' , justifyContent:'space-between', marginHorizontal:20, marginBottom:14}}>
                    <Text style={{fontSize:18}}>Duration</Text>
                    <Text style={{fontSize:18}}>{"00.26.23"}</Text>
                </View>
                
                <View style={{flexDirection:'row' , justifyContent:'space-between', marginHorizontal:20, marginBottom:14}}>
                    <Text style={{fontSize:18}}>Device</Text>
                    <Text style={{fontSize:18}}>{ }</Text>
                </View>
                
                <View style={{flexDirection:'row' , justifyContent:'space-between', marginHorizontal:20, marginBottom:14}}>
                    <Text style={{fontSize:18}}>Location</Text>
                    <Text style={{fontSize:18}}>{"Ahmedabad,Indai"}</Text>
                </View>
            </View>


        </View>
    );
};
