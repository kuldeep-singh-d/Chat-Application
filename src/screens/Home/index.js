import React from 'react';
import { View, } from "react-native";
import SearchBar from '../../components/ChatScreenComponent/SearchBar';
import UsersList from '../../components/ChatScreenComponent/ShowUserComponent';

// import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error) }
// );

export default function HomeScreen(props) {
    
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    
    // useEffect(() => {
    //     createTable();
    //     getData();
    // }, []);

    // const createTable = () => {
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //             "CREATE TABLE IF NOT EXISTS "
    //             + "Users "
    //             + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
    //         )
    //     })
    // }
    
    // const getData = () => {
    //     try {
    //         db.transaction((tx) => {
    //             tx.executeSql(
    //                 "SELECT Name, Age FROM Users",
    //                 [],
    //                 (tx, results) => {
    //                     var len = results.rows.length;
    //                     if (len > 0) {
    //                         navigation.navigate('Home');
    //                     }
    //                 }
    //             )
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    return (
        <View style={{ flex: 1, }}>
            <SearchBar/>
            <UsersList navigation={props.navigation} />
        </View>
    );
};

