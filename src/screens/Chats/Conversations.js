import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Sender from './Components/sender';
import Receiver from './Components/receiver';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase(
  {
    name: 'MessageDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

export default function Conversations(props) {
  const [showTheThing, setShowTheThing] = useState(false);
  const [message, setMessage] = useState();
  const [msgs, setMsgs] = useState([]);

  // FOR DB
  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Messages ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Message TEXT);',
        [],
        () => {
          console.log('table created successfully');
        },
        error => {
          console.log('Error: ' + error.message);
        },
      );
    });
  };

  function sendMessage() {
    // Alert.alert('Message sent');
    setShowTheThing(true);
    if (!message) {
      alert('Type Message');
      return false;
    }
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO Messages (Message) VALUES (?)`,
        [message],
        (sqlTxn, res) => {
          console.log(`${message} < message added successfully`);
          getMsgs();
          setMessage('');
        },
        error => {
          console.log('error on adding message ' + error.message);
        },
      );
    });
  }

  const getMsgs = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM Messages ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('message retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({id: item.id, Message: item.Message});
            }
            setMsgs(results);
          }
        },
        error => {
          console.log('error on getting message ' + error.message);
        },
      );
    });
  };

  const MessageView = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          justifyContent: 'flex-end',
        }}>
        <View style={styles.container}>
          <Text style={styles.text}>{item.Message}</Text>
        </View>
      </View>
    );
  };

  useEffect(async () => {
    await createTable();
    await getMsgs();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container2}>
        {/* <Sender message="Hello, I'm Darius. what can i help you with?" /> */}
        {/* <Receiver /> */}
        {/* { showTheThing &&
              <Receiver message={message} />
          } */}
        <FlatList data={msgs} renderItem={MessageView} key={cat => cat.id} />

        <View style={styles.inputview}>
          <TextInput
            style={styles.input}
            // onChangeText={text => setValue(text)}
            onChangeText={setMessage}
            placeholder={'Message..'}
          />
          <TouchableOpacity style={{marginRight: 34}} onPress={sendMessage}>
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
  container2: {
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
  container: {
    justifyContent: 'flex-end',
    backgroundColor: '#f06f2d',
    width: 'auto',
    marginHorizontal: 10,
    marginVertical: 14,
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
