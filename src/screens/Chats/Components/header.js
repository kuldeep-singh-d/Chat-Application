import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function header(props) {
  //const { navigation } = props;
  return (
    <View>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity>
          <View style={styles.closeBtn}>
            <AntDesign
              name={props.icon}
              style={{fontSize: 27, color: '#000'}}></AntDesign>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: 16}}>
        <Text style={{color: '#000', fontWeight: 'bold', fontSize: 25}}>
          {props.title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeBtn: {
    backgroundColor: '#E8E6E5',
    padding: 7,
    width: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 15,
    marginTop: 15,
  },
});
