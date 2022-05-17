import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function receiver(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        justifyContent: 'flex-end'
      }}>
      <View style={styles.container}>
        {/* <Text style={styles.text}>{'How may i help you ?'}</Text> */}
        <Text style={styles.text}>{props.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    // backgroundColor: 'rgba(63,95,115,1)',
    backgroundColor:'#f06f2d',
    width: 'auto',
    marginHorizontal: 10,
    marginVertical: 14,
    //borderRadius: 14,
    borderTopRightRadius:23,
    borderTopLeftRadius:23,
    borderBottomLeftRadius:23,
    padding:10,
    maxWidth:300,
    
  },

  text: {
    color: '#fff',
    fontSize: 16,
    margin: 10,
  },
});
