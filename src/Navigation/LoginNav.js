import React from "react";
import DrawerCom from "../components/DrawerCom";
import AddUserScreen from "../screens/AddUser/index";

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Drawer"
                component={DrawerCom} 
            />
            
            <Stack.Screen
                name="AddUser"
                component={AddUserScreen}
            />
            
        </>
    )
}