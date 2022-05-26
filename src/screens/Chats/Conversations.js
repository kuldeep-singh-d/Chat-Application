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
import React, {useState, useEffect} from 'react';
import Sender from './Components/sender';
import Receiver from './Components/receiver';

export default function Conversations(props) {
  const [showTheThing, setShowTheThing] = useState(false);
  const [message, setMessage] = useState();
  const [value, setValue] = useState();

  function send() {
    // Alert.alert('Message sent');
    setMessage(value);
    setShowTheThing(true);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <ScrollView>
          <Sender message="Hello, I'm Darius. what can i help you with?" />
          <Receiver />
          {/* { showTheThing &&
              <Receiver message={message} />
          } */}
        </ScrollView>

        <View style={styles.inputview}>
          <TextInput
            style={styles.input}
            onChangeText={text => setValue(text)}
            placeholder={'Message..'}
          />
          <TouchableOpacity style={{marginRight: 34}} onPress={send}>
            <View style={styles.Send}>
              <Text
                style={{color: '#f06f2d', fontWeight: 'bold', fontSize: 20}}>
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
    borderColor: '#5e5e5e',
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
