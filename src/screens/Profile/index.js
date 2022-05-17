import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native'
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

// create a component
const ProfileScreen = () => {

    const [name, setName] = useState('usr1');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('XXXXXXX');

    return (
        <View>
      <View style={{ alignItems: 'center', marginTop: 70, borderWidth: 0.5, width: 104, borderRadius: 50, marginHorizontal: 156,marginBottom:30 }}>
        <Image source={require('../../assets/images/profile2.jpg')} style={{ width: 100, height: 100, borderRadius: 50, }} />
      </View>
      
      <View style={{ marginHorizontal: 27,marginBottom:16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }} >Name</Text>
        <View style={{ borderWidth: 1, height: 43, borderRadius: 9, flexDirection: 'row', alignItems: 'center' }}>
          <IoniconsIcon name="person-circle-outline" style={{ color: 'rgba(63,95,115,1)', fontSize: 23, marginHorizontal: 9}}></IoniconsIcon>
                    
          <TextInput
            // onChangeText={text => setEmail(text)}
            //onChangeText={text => setName(text)}
            value={name}
            placeholder="Enter your name"
            keyboardType="default" />
        </View>
      </View>
      
      <View style={{ marginHorizontal: 27,marginBottom:16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }} >Email</Text>
        <View style={{ borderWidth: 1, height: 43, borderRadius: 9, flexDirection: 'row', alignItems: 'center' }}>
          <IoniconsIcon name="mail" style={{color: 'rgba(63,95,115,1)',fontSize: 21,marginHorizontal:10}}></IoniconsIcon>
                    
          <TextInput
            //onChangeText={text => setEmail(text)}
            value={"User1@gmail.com"}
            editable={false} />
        </View>
      </View>
      
      <View style={{ marginHorizontal: 27,marginBottom:16 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }} >Password</Text>
        <View style={{ borderWidth: 1, height: 43, borderRadius: 9, flexDirection: 'row', alignItems: 'center' }}>
          <IoniconsIcon name="key" style={{ color: 'rgba(63,95,115,1)', fontSize: 21, marginHorizontal: 10}}></IoniconsIcon>
                    
          <TextInput
            //onChangeText={text => setPassword(text)}
            value={password}
            editable={false} />
        </View>
      </View>
    </View>
    );
};

export default ProfileScreen;
