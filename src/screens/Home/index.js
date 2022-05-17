import React from 'react';
import { View, } from "react-native";
import SearchBar from '../../components/SearchBar';
import UsersList from '../../components/ShowUserCom'

export default function HomeScreen(props) {
    return (
        <View style={{ flex: 1, }}>
            <SearchBar/>
            <UsersList navigation={props.navigation} />
        </View>

    );
};

