
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function ChatMessages  () {
    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', zIndex: 99, top: 2, backgroundColor: "#fff", paddingHorizontal: 16 }}>
                <Text style={{ color: '#000' }}>{"User1 Joined"}</Text>
            </View>
            <View style={{ position: 'absolute', zIndex: 99, bottom: 6, backgroundColor: "#fff", paddingHorizontal: 16 }}>
                <Text style={{ color: '#000' }}>{"User1 Left"}</Text>
            </View>
            <View style={styles.chats}>
                <View style={{ justifyContent: 'flex-start', }} >
                    <View style={styles.Sendre}>
                        <Image
                            source={require('../assets/images/profile2.jpg')}
                            style={{ width: 34, height: 34, marginRight: 7 }}
                        />
                        <View style={{ backgroundColor: '#C7C8C8', paddingHorizontal: 23, paddingVertical: 7, borderRadius: 18 }}>
                            <Text style={{ color: '#000' }}>{"Hello Giriraj Digital."}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.receiver}>
                    <View style={{ backgroundColor: '#C7C8C8', paddingHorizontal: 23, paddingVertical: 7, borderRadius: 18 }}>
                        <Text style={{ color: '#000' }}>{"How may i help you ?"}</Text>
                    </View>
                    <Image
                        source={require('../assets/images/profile2.jpg')}
                        style={{ width: 34, height: 34, marginLeft: 7 }}
                    />
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 14
    },
    chats: {
        backgroundColor: '#fff',
        width: "100%",
        height: 250,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    Sendre: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 'auto',
        marginVertical: 3,
        marginTop: 10,
        marginBottom: 9,
        alignItems: 'center',

    },

    receiver: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        textAlign: 'right',
        width: "auto",
        marginVertical: 3,
        marginTop: 10,
        marginBottom: 9,
        alignItems: 'center',
    },
});
