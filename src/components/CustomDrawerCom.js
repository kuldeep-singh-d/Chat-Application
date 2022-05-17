import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer  (props) {
    const { navigation } = props;
    const unserName = 'User1';
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 0, alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginTop: 70, borderWidth: 0.5, width: 80, borderRadius: 50, marginBottom: 10 }}>
                    <Image source={require('../assets/images/profile2.jpg')}
                        style={{ width: 78, height: 80, borderRadius: 50, }} />
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 23, color: '#000' }}>{unserName}</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <TouchableOpacity onPress={() => { navigation.navigate("Login")}}>
                    <View style={{marginHorizontal:10, marginVertical:5, backgroundColor:'#fff', paddingVertical:12,paddingHorizontal:9,borderRadius:2}}>
                        <Text style={{fontWeight:"500"}}>Logout</Text>
                    </View>
                </TouchableOpacity>


            </DrawerContentScrollView>

        </View>

    );
};
