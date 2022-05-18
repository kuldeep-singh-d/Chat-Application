import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ChatBar(props) {
  const {navigation} = props;
  const [bgColor, setBgColor] = useState('#fff');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Conversations')}>
        <View style={{...styles.Tab, backgroundColor: bgColor}}>
          <IoniconsIcon
            name="ios-chatbubbles"
            style={styles.icon1}></IoniconsIcon>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <View style={{...styles.Tab, backgroundColor: bgColor}}>
          <EntypoIcon name="info-with-circle" style={styles.icon2}></EntypoIcon>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Document')}>
        <View style={{...styles.Tab, backgroundColor: bgColor}}>
          <MaterialCommunityIconsIcon
            name="file-document"
            style={styles.icon3}></MaterialCommunityIconsIcon>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contect')}>
        <View style={{...styles.Tab, backgroundColor: bgColor}}>
          <MaterialCommunityIconsIcon
            name="tooltip-account"
            style={styles.icon4}></MaterialCommunityIconsIcon>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function changeColor() {
  console.log('Func Called');
  let color = '#fff';
  return color;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D3D6D7',
    backgroundColor: '#fff',
    paddingHorizontal: 27,
  },

  Tab: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 16,
    marginHorizontal: 0,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#3F5F73',
  },
  img: {
    height: 25,
    width: 25,
  },
  icon1: {
    color: 'rgba(63,95,115,1)',
    fontSize: 25,
  },
  icon2: {
    color: 'rgba(63,95,115,1)',
    fontSize: 25,
  },
  icon3: {
    color: 'rgba(63,95,115,1)',
    fontSize: 25,
  },
  icon4: {
    color: 'rgba(63,95,115,1)',
    fontSize: 25,
  },
});
