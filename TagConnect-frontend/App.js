import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen.js";
import MapScreen from "./screens/MapScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import SignUpScreen from "./screens/SignUpScreen.js";
import { UserProvider } from "./UserContext.js";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

const TagConnect = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Map"
                    screenOptions={{ headerShown: false, gestureEnabled: false }}
                >
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Map" component={MapScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default TagConnect;
