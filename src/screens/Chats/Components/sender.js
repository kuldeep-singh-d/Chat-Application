import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function sender(props) {
  return (
    <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10,}}>
        <Image
        style={styles.img}
        source={require('../../../assets/images/profile3.png')}/>
      <View style={styles.container}>
          {/* <Text style={styles.text}>{'Hello Giriraj Digital.'}</Text> */}
          <Text style={styles.text}>{props.message}</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor:'rgba(63,95,115,1)',
        backgroundColor:'#E8E6E5',
        width:'auto',
        marginHorizontal:10,
        marginVertical:14,
        //borderRadius:14
        borderTopRightRadius:23,
        borderTopLeftRadius:23,
        borderBottomRightRadius:23,
        padding:10,
        maxWidth:300,
    },

    img:{
        width:40, height:40,
        borderRadius:25,
        marginTop:34,
        marginRight:8
    },

    text:{
        color:'#000',
        fontSize:16,
        margin:10
    },
})