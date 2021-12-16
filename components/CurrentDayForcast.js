import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import moment from 'moment';

export default function CurrentDayForcast({ weather, cityName }) {
    // const city = route.params.city
    console.log(weather.dt)
    return (
        <View style={styles.container}>
            <View style={styles.basicInfo}>
                <Text style={styles.today}>today</Text>
                <Text style={styles.date}>{moment.unix(weather.dt).format('LL')}</Text>
                <Text style={styles.degree}>{weather.temp}<MaterialCommunityIcons name="temperature-celsius" size={50} color="#e42100" /></Text>
                <Text style={styles.location}>{cityName}, georgia</Text>
                {/* <Text style={styles.locationCountry}>Georgia</Text> */}
            </View>
            <View style={styles.moreInfo}>
                <View style={styles.moreInfoItems}>
                    <View style={styles.moreInfoItem}>
                        <Text style={styles.iteminfo}>Day</Text>
                        <Text style={styles.itemInfoValue}> 928743 <MaterialCommunityIcons name="temperature-celsius" size={18} color="white" /></Text>
                    </View>
                    <View style={styles.moreInfoItem}>
                        <Text style={styles.iteminfo}>Night</Text>
                        <Text style={styles.itemInfoValue}>17<MaterialCommunityIcons name="temperature-celsius" size={18} color="white" /></Text>
                    </View>
                    <View style={styles.moreInfoItem}>
                        <Text style={styles.iteminfo}>Humidity</Text>
                        <Text style={styles.itemInfoValue}>5.5</Text>
                    </View>
                    <View style={styles.moreInfoItem}>
                        <Text style={styles.iteminfo}>Pressure</Text>
                        <Text style={styles.itemInfoValue}>17.3</Text>
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({


    basicInfo: {
        marginTop: 10,
        alignItems: 'center',
    },
    today: {
        color: '#92c4c4',
        fontSize: 42,
        textTransform: 'capitalize'
    },
    date: {
        color: '#a3cdcd',
        fontSize: 18,
        marginVertical: 5,
    },
    degree: {
        color: '#327bfb',
        fontSize: 90
    },
    location: {
        textTransform: 'capitalize',
        color: '#a3cdcd',
        fontSize: 16,
    },
    moreInfo: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    moreInfoItems: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 5,
        marginTop: 30,
        opacity: 0.9,
    },
    moreInfoItem: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iteminfo: {
        fontSize: 18,
        alignItems: 'center',
        color: '#a3cdcd'
    },
    itemInfoValue: {
        fontSize: 18,
        color: '#a3cdcd',
        marginLeft: 10
    },
});
