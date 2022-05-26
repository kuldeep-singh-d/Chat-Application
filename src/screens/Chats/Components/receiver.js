import {StyleSheet, Text, View,FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Receiver from '../../../redux/data/messages';

export default function receiver(props) {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Receiver);
  }, []);
  console.log('Done.Receiver');

  return (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={{ flexDirection: 'row',alignItems: 'center',marginHorizontal: 10,justifyContent: 'flex-end',}}>
                <View style={styles.container}>
                  <Text style={styles.text}>{item.message}</Text>
                </View>
              </View>
            )}
          />

    // <View
    //   style={{
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginHorizontal: 10,
    //     justifyContent: 'flex-end'
    //   }}>
    //   <View style={styles.container}>
    //     {/* <Text style={styles.text}>{'How may i help you ?'}</Text> */}
    //     <Text style={styles.text}>{props.message}</Text>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    // backgroundColor: 'rgba(63,95,115,1)',
    backgroundColor: '#f06f2d',
    width: 'auto',
    marginHorizontal: 10,
    marginVertical: 14,
    //borderRadius: 14,
    borderTopRightRadius: 23,
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
    padding: 10,
    maxWidth: 300,
  },

  text: {
    color: '#fff',
    fontSize: 16,
    margin: 10,
  },
});
