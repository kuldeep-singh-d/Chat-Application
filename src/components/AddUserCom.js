import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function AddUserComponent  (props) {

    const { navigation } = props;

    // console.log("navigation = > ", navigation)
    
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("AddUser") }}>
            <View style={{ marginHorizontal: 16, }}>
                <Image source={require('../assets/images/addIcon.png')}
                    style={{ width: 25, height: 25 }} />
            </View>
        </TouchableOpacity>
    )
}


