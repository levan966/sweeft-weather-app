import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import moment from 'moment'
import image from '../assets/1159905.jpg'


export default function SevenDayForecast({ weather, cityName }) {
    const sevenDaysData = weather.slice(0, 7)
    console.log(sevenDaysData)
    return (
        <>
            <View style={styles.textBlock}>
                <Text style={styles.text}>next 7 days</Text>
                <Text style={styles.text}>{cityName}</Text>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>

                    {sevenDaysData.map((data) => (
                        <View style={styles.forecastBlocks}>
                            <View>
                                <MaterialCommunityIcons name="weather-cloudy" size={60} color="white" />
                                <View  >
                                    <Text style={styles.dayOfWeek}>{moment.unix(data.dt).format('dddd')}</Text>
                                </View>
                            </View>
                            <View style={styles.dayDegree} >
                                <Fontisto name="holiday-village" size={24} color="white" />
                                <Text style={styles.forecastBlockInfo} >Day</Text>
                                <Text style={styles.forecastBlockInfo}>{data.temp.day}<MaterialCommunityIcons name="temperature-celsius" size={20} color="white" /></Text>
                            </View>
                            <View style={styles.dayDegree}>
                                <MaterialCommunityIcons name="weather-night" size={24} color="white" />
                                <Text style={styles.forecastBlockInfo}>Night</Text>
                                <Text style={styles.forecastBlockInfo}>{data.temp.night}<MaterialCommunityIcons name="temperature-celsius" size={20} color="white" /></Text>
                            </View>
                        </View>
                    ))}

                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    textBlock: {
        flex: 1,
        top: 10,
        left: '25%',
        position: 'absolute',
        alignItems: 'center',
    },
    text: {
        marginBottom: 20,
        textTransform: 'capitalize',
        fontWeight: 'normal',
        fontSize: 24,
        color: '#f3fafe',
    },
    scroll: {
        marginTop: 100
    },
    forecastBlocks: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#7fc5ef',
        backgroundColor: '#136698',
    },
    forecastBlockInfo: {
        color: 'white',
        fontSize: 14,
    },
    dayOfWeek: {
        color: 'white',
        borderRadius: 10,
    },
    dayDegree: {
        justifyContent: 'flex-start'
    }
});
