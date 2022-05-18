import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export default function DocumentComp() {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var hours = new Date().getHours();
    var min = new Date().getMinutes();

    setCurrentDate(hours + ':' + min);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', padding: 7, alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            height: 'auto',
            paddingHorizontal: 10,
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 30,
            paddingVertical: 7,
          }}>
          <IoniconsIcon
            name="time-outline"
            style={{color: '#000', fontSize: 21}}></IoniconsIcon>
          <Text>{currentDate}</Text>
        </View>
        <View style={{padding: 7, width: 300, flexDirection: 'row'}}>
          <Text style={{color: '#000'}}>
            {'Visitor navigated to '}
            <Text style={{color: '#D140A5'}}>
              {
                'Enterprise Web\nApp Dvelopment Company | Umbraco Registered Partner'
              }
            </Text>
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', padding: 7}}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            height: 'auto',
            paddingHorizontal: 10,
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 7,
          }}>
          <IoniconsIcon
            name="time-outline"
            style={{color: '#000', fontSize: 21}}></IoniconsIcon>
          <Text>{currentDate}</Text>
        </View>
        <View style={{padding: 7, width: 300}}>
          <Text style={{color: '#000'}}>{'Chat stared'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
