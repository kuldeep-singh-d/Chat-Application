import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TextInput, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    return (
        <View style={styles.searchBarContainer}>
            <Icon style={{marginLeft: '3%'}}
                  name={'ios-search'} color={'black'} size={25}/>
            <TextInput style={styles.searchBar} onChangeText={props.onChangeText} value={props.value}
                       placeholder={props.placeholder ?
                           props.placeholder : 'Start Searching...'}/>
            {props.editing ? <TouchableOpacity onPress={props.onClear} style={{marginRight: '7%'}}><Text
                style={{color: '#0078b0'}}>Clear</Text></TouchableOpacity> : null}
            {props.loading ? <ActivityIndicator style={{marginRight: '5%'}}
                                                size={'small'}
                                                animating={true} color={'#0078b0'}/> : null}
        </View>
    );
};


SearchBar.propType = {
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    onClear: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        paddingVertical:5,
        paddingLeft: 25,
        fontWeight: '300',
        backgroundColor: '#fff',
        borderRadius:25,
        margin:1
    },
    searchBarContainer: {
        borderColor: '#909194',
        backgroundColor: '#fff',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:5,
        alignSelf: 'center',
        marginTop: 1,
        borderRadius:25,
        paddingVertical:3,
        paddingHorizontal:2
    },
});
export default SearchBar;
