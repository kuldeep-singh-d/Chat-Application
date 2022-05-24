import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Sender from './Components/sender';
import Receiver from './Components/receiver';

export default function Conversations(props) {
  const [showTheThing, setShowTheThing] = useState(false);
  // setState({showTheThing: true})  // true to show it    // false to hide it
  const [message, setMessage] = useState();
  const [value, setValue] = useState();

  
  function send() {
    // Alert.alert('Message sent');
    setMessage(value);  
    setShowTheThing(true);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
      <View style={styles.container}>
        <ScrollView>
          <Sender message="Hello, I'm Darius. what can i help you with?" />
          <Receiver message="I have two cases, I will need to increase my internet package and I would like to ask for a new offer, as my contract is about to expire." />
          <Sender message="Of course, which Internet package are you interested in??" />
          {/* <Receiver message={msg} /> */}
          { showTheThing &&
              <Receiver message={message} />
          }
          <Sender message="Darius Typing..." />
        </ScrollView>

        <View style={styles.inputview}>
          <TextInput
            style={styles.input}
            onChangeText={text => setValue(text)}
            // onChangeText={(message) => setMessage({ message })}
            //onChangeText={onChangeNumber}
            //value={}
            placeholder={'Message..'}
          />
          <TouchableOpacity style={{marginRight: 34}} onPress={send}>
            <View style={styles.Send}>
              <Text
                style={{
                  // color: 'rgba(63,95,115,1)',
                  color:'#f06f2d',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Send
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {},
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
  },

  inputview: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 34,
    marginHorizontal: 10,
    marginVertical: 18,
    borderColor:'#5e5e5e'
  },
  input: {
    width: 290,
    fontSize: 18,
    marginLeft: 14,
    marginVertical: 7,
  },
  Send: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
