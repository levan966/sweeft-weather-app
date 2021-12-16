import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import image from '../assets/1159905.jpg'

const cities = {
    Tbilisi: {
        name: 'Tbilisi',
        lat: '41.715137',
        lon: '44.827095'
    },
    Kutaisi: {
        name: 'Kutaisi',
        lat: '42.843479',
        lon: '-2.667230'
    },
    Batumi: {
        name: 'Batumi',
        lat: '52.180302',
        lon: '21.053579'
    }
}

export default function MainScreen(props) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Tbilisi');
    const [items, setItems] = useState([
        { label: 'Tbilisi', value: 'Tbilisi' },
        { label: 'Batumi', value: 'Batumi' },
        { label: 'Kutaisi', value: 'Kutaisi' }
    ]);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.main} >
                    <Text style={styles.weather} >weather </Text>
                    <Text style={styles.weather} > forecast </Text>
                </View>
                <DropDownPicker
                    style={styles.dropdown}
                    width
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                <TouchableOpacity
                    style={styles.touchable}
                    title='see forecast'
                    onPress={() => { props.navigation.navigate('Forecast', { city: cities[value] }) }}>
                    <Text style={styles.forecast}> see forecast </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
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
    },
    main: {
        alignItems: 'center'
    },
    weather: {
        textTransform: 'uppercase',
        fontWeight: 'normal',
        fontSize: 32,
        color: '#f3fafe',
        marginTop: 20,
    },
    touchable: {
        height: 50,
        marginTop: 10,
        backgroundColor: '#5cb8f1',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forecast: {
        textTransform: 'uppercase',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#f3fafe',
    }
});
