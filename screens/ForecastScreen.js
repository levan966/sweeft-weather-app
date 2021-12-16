import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, ImageBackground } from "react-native";
import axios from "axios";
import CurrentDayForcast from "../components/CurrentDayForcast";
import SevenDayForecast from "../components/SevenDayForecast";
import image from '../assets/1159905.jpg'


const ForecastScreen = (props) => {
    const apikey = "3db2c8433328d3537acdb8b20798d62b";

    const [activeTab, setActiveTab] = useState("currentDay");
    const [weather, setWeather] = useState({
        data: null,
        status: 'idle'
    });
    const city = props.route.params.city;
    // console.log("city", city)
    useEffect(() => {
        setWeather({ data: null, status: 'pending' })
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&exclude=minutely,hourly,alerts&units=metric&lon=${city.lon}&appid=${apikey}`
            )
            .then(
                (response) => {
                    console.log("resp", response.data)
                    setWeather({ data: response.data, status: 'resolved' })
                },
                () => { setWeather({ data: null, status: 'error' }) }
            );
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                {(weather.status === 'pending' || weather.status === 'idle') && <Text style={{ color: "white" }}>Loading</Text>}
                {weather.status === 'error' && <Text style={{ color: "white" }}>Error</Text>}
                {weather.status === 'resolved' && (
                    <>
                        <View>
                            {activeTab === "currentDay"
                                ? <CurrentDayForcast weather={weather.data.current} cityName={city.name} /> : <SevenDayForecast weather={weather.data.daily} cityName={city.name} />}
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <Button
                                title="Current Day Forecast"
                                onPress={() => { setActiveTab("currentDay") }}
                            />
                            <Button
                                title="Weekly Forecast"
                                onPress={() => { setActiveTab("weekly") }}
                            />
                        </View></>)
                }
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-evenly',
        paddingHorizontal: 60,
        paddingBottom: 100,
        padding: 20
    },
});

export default ForecastScreen;
