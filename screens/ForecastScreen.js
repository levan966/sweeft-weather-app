import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, ImageBackground, TouchableOpacity } from "react-native";
import axios from "axios";
import CurrentDayForcast from "../components/CurrentDayForcast";
import SevenDayForecast from "../components/SevenDayForecast";
import image from '../assets/1159905.jpg'

const ForecastScreen = (props) => {
    const apikey = "3db2c8433328d3537acdb8b20798d62b";
    const [activeTab, setActiveTab] = useState("currentDay");
    const [weather, setWeather] = useState({
        data: null,
        status: null
    });
    const city = props.route.params.city;
    useEffect(() => {
        setWeather({ data: null, status: 'pending' })
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&exclude=minutely,hourly,alerts&units=metric&lon=${city.lon}&appid=${apikey}`
            )
            .then(
                (response) => {
                    setWeather({ data: response.data, status: 'resolved' })
                },
                () => { setWeather({ data: null, status: 'error' }) }
            );
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                {(weather.status === 'pending' || weather.status === null) && <Text style={styles.loading}>Please Wait</Text>}
                {weather.status === 'error' && <Text style={{ color: "white" }}>Error</Text>}
                {weather.status === 'resolved' && (
                    <>
                        <View>
                            {activeTab === "currentDay"
                                ? <CurrentDayForcast
                                    weather={weather.data.current}
                                    cityName={city.name} />
                                : <SevenDayForecast
                                    weather={weather.data.daily}
                                    cityName={city.name} />}
                        </View>
                        <View style={styles.touch}>
                            <TouchableOpacity
                                style={styles.touchable}
                                title="Current Day Forecast"
                                onPress={() => { setActiveTab("currentDay") }}>
                                <Text style={styles.text}>current</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.touchable}
                                title="Weekly Forecast"
                                onPress={() => { setActiveTab("weekly") }}>
                                <Text style={styles.text}> 7 days forecast</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
                }
            </ImageBackground>
        </View >
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
    touch: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignSelf: 'center',
        position: 'absolute',
        bottom: 22,
    },
    touchable: {
        width: 150,
        height: 55,
        backgroundColor: '#5cb8f1',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#136698'

    },
    text: {
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    loading: {
        fontSize: 50,
        color: 'white'
    }
});

export default ForecastScreen;
