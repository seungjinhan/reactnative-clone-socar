import React, { useEffect, useState } from 'react';
import { View, PermissionsAndroid, Platform, Text } from 'react-native';
import NaverMapView, { Circle, Marker, Path, Polyline, Polygon } from "react-native-nmap";
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/Feather';

import { Loading } from '../../components/Loading';

import styles from './styles';

async function requestPermission() {

    try {
        if (Platform.OS === 'ios') {
            return await Geolocation.requestAuthorization('always');
        }

        if (Platform.OS === 'android') {
            return await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        }
    } catch (e) {
        console.warn(e);
    }
}

const MainScreen = () => {

    const [location, setLocation] = useState();

    useEffect(() => {
        requestPermission().then(res => {
            console.log({ res });
            if (res === 'granted') {
                Geolocation.getCurrentPosition(
                    pos => {
                        setLocation(pos.coords);
                    },
                    err => {
                        console.warn(err);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 3600,
                        maximumAge: 3600,
                    },
                );
            }
        });
    }, []);

    if (!location) {
        return (
            <Loading />
        );
    }

    return (

        <View style={styles.container}>
            <View>
                <NaverMapView
                    style={styles.mapView}
                    showsMyLocationButton={true}
                    center={{ ...location, zoom: 16 }}
                    onTouch={e => {
                        console.warn('onTouch', JSON.stringify(e.nativeEvent));
                    }}
                    onCameraChange={e => {
                        console.warn('onCameraChange', JSON.stringify(e));
                        setLocation(e);
                    }}
                    onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
                >
                    <Marker coordinate={location} onClick={() => console.warn('onClick! p0')} />
                </NaverMapView>
            </View>
            <View style={styles.inputAddressContainer}>
                <View style={{ justifyContent: 'center' }}>
                    <Icon
                        style={styles.inputAddressMenuIcon}
                        name="menu"
                        back="#000000"
                        size={20} />
                </View>
                <View style={styles.inputTextAddressView}>
                    <Text style={styles.inputTextAddress}>
                        신림동 우리집
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default MainScreen;