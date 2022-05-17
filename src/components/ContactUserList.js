import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import Users from '../redux/Data';

export default function ContacuUserList(props) {

  const { navigation } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Users);
  }, [])

  console.log('Done');
  return (

    <FlatList
      data={data}
      renderItem={({ item }) =>
      (
        <TouchableOpacity onPress={() => { navigation.navigate("Chat") }}>
          <View style={{ height: "auto", flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginBottom: 3, marginTop: 5, paddingHorizontal: 10, paddingVertical: 10 }}>
            <View style={{ borderWidth: .5, borderRadius: 25, width: 35, height: 35, marginLeft: 5, marginRight: 7, alignItems: 'center', justifyContent: 'center', paddingVertical: 16 }}>
              <Image source={require('../assets/images/profile2.jpg')} style={{ width: 30, height: 30, borderRadius: 10, borderRadius: 25 }} />
            </View>
            <View >
              <Text style={{ fontWeight: 'bold',fontSize:16, color:'#000' }}>{item.username}</Text>
              <View style={{ flexDirection:"row", justifyContent:'space-between', }}>
                <Text style={{marginRight:200}}>{"40"} minute</Text>
                <Text >{"November 15"}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )} />

  )
}
