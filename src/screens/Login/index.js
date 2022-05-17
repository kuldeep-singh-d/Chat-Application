import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { showError } from '../../Utils/HelperFunction';
import validation from '../../Utils/validation';

export default function LoginScreen({ navigation }) {

    const [state, setState] = useState({
        isLoading: true, //  false,
        email: 'test@gmail.com',
        password: '1234567',
        isSecure: true
    })
    const { isLoading, email, password, isSecure } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validation({
            email, password
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onLogin = () => {

        const checkValid = isValidData()
        if (checkValid) {
             navigation.navigate("Drawer")
            //  navigation.navigate("Dashboard")

        }
    }

    return (
        <View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginTop: 70, marginBottom: 30, width: 300, height: 'auto', }}>
                    <Image source={require('../../assets/images/logo2.png')} style={{ width: 120, height: 120, }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 10,color:'#000' }} >GIRIRAJ DIGITAL</Text>
                </View>
            </View>

            <View style={{ marginHorizontal: 27, marginBottom: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }} >Email</Text>
                <View style={{ borderWidth: 1, height: 43, borderRadius: 7, flexDirection: 'row', alignItems: 'center' }}>
                    <IoniconsIcon name="mail" style={{color: 'rgba(63,95,115,1)',fontSize: 21,marginHorizontal:10}}></IoniconsIcon>
                    <TextInput
                        onChangeText={(email) => updateState({ email })}
                        autoCapitalize="none"
                        // value={email}
                        placeholder="Enter email"
                        keyboardType="default" />
                </View>
            </View>

            <View style={{ marginHorizontal: 27, marginBottom: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }} >Password</Text>
                <View style={{ borderWidth: 1, height: 43, borderRadius: 7, flexDirection: 'row', alignItems: 'center' }}>
                    <IoniconsIcon name="key" style={{ color: 'rgba(63,95,115,1)', fontSize: 21, marginHorizontal: 10}}></IoniconsIcon>
                    <TextInput
                        onChangeText={(password) => updateState({ password })}
                        placeholder="Enter password"
                        keyboardType="default"
                        //isSecure={isSecure}
                        secureTextEntry={true} />
                </View>
            </View>

            <View style={{ marginHorizontal: 27, borderRadius: 4, marginTop: 52, backgroundColor: '#3F5F73' }}>
                {/* onPress={() => { navigation.navigate("Drawer")}}> */}
                <TouchableOpacity onPress={onLogin}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 43 }}>
                        <Text style={{ color: '#fff' }}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
