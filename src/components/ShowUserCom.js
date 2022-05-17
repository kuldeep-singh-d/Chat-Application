import { Text, View, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react';
import Users from '../redux/Data';

export default function ShowUserCom(props) {

  const { navigation } = props;
  const [count, setCount] = useState("4")
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
        <View style={styles.container} >

          <TouchableOpacity onPress={() => { navigation.navigate("Chat") }}
            style={{ flexDirection: "row", }}>
            <View style={{ width: 330 }}>
              <View style={{height: "auto", flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginBottom: 5, marginTop: 5, paddingHorizontal: 10, paddingVertical: 10}}>
                <View style={{borderWidth: .5, borderRadius: 25, width: 35, height: 35, marginLeft: 5, marginRight: 7, alignItems: 'center', justifyContent: 'center', paddingVertical: 16}}>
                  <Image source={require('../assets/images/profile2.jpg')}
                    style={{ width: 30, height: 30, borderRadius: 10, borderRadius: 25 }} />
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold' }}> {item.username}</Text>
                  {/* <Text > {item.email}</Text> */}
                  <Text>{count} messages, {"2"} minute</Text>
                </View>
              </View>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#fff", marginVertical: 5,width:"auto", paddingBottom:0,paddingHorizontal:5 }}>
              <TouchableOpacity onPress={() => { alert("*") }}
                style={styles.OnOff}>
                <View style={{paddingHorizontal:5}}>
                  <Text style={{color:"#FB9E1F",fontSize:15, fontWeight:"bold" }}>Open</Text>
                </View>
              </TouchableOpacity>
              <Text style={{fontSize:12}}>{"November 15"}</Text>
            </View>

          </TouchableOpacity>

        </View>
      )} />
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginHorizontal: 0,
  },

  // tuchable
  OnOff: {
    height: "auto",
    width: "auto",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderRadius:5,
    borderColor:"#FB9E1F"
  },

})
