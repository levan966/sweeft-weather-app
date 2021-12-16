import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import ForecastScreen from "./screens/ForecastScreen";

const NativeStack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NativeStack.Navigator>
            <NativeStack.Screen name="Home" component={MainScreen} />
            <NativeStack.Screen name="Forecast" component={ForecastScreen} />

        </NativeStack.Navigator>
    );
};


export default MainNavigator;
