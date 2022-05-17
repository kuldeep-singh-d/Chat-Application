import React from "react";
import LoginScreen from "../screens/Login/index";
import DrawerCom from "../components/DrawerCom";
import AddUserScreen from "../screens/AddUser/index";
import Chatscreen from  "../screens/Chats/Chat";
import Detailscreen from "../screens/Chats/Detail";
import Contectscreen from "../screens/Chats/Contact";
import Documentscreen from "../screens/Chats/Document";
import Conversations from "../screens/Chats/Conversations";
import Dashboard from "../screens/Dashboard";
import Header from "../screens/Chats/Components/header";




export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Login'}}
            />
            <Stack.Screen
                name="Drawer"
                component={DrawerCom} 
            />
            <Stack.Screen
                name="AddUser"
                component={AddUserScreen} 
            />
            <Stack.Screen
                name="Chat"
                component={Chatscreen}
                options={{ title: 'Chat', headerShown: true, headerTitleAlign: 'center'  }} 
            />
            <Stack.Screen
                name="Detail"
                component={Detailscreen} 
                options={{ title: 'Detail', headerShown: true, headerTitleAlign: 'center'   }} 
            />
            <Stack.Screen
                name="Contect"
                component={Contectscreen} 
                options={{ title: 'Contect', headerShown: true, headerTitleAlign: 'center'   }} 
            />
            <Stack.Screen
                name="Document"
                component={Documentscreen} 
                options={{ title: 'Document', headerShown: true, headerTitleAlign: 'center'   }} 
            />
            <Stack.Screen
                name="Conversations"
                component={Conversations} 
                //options={{ title: 'Conversations', headerShown: true, headerTitleAlign: 'Left'   }} 
                options={{ headerShown: true, header: () => <Header title="Conversation" icon="close" /> }} 
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard} 
                options={{ headerShown: true, header: () => <Header title="Dashboard" icon="message1" /> }} 
            />
        </>
    )
}

