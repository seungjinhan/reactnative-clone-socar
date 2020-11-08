import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import styles from './styles';


const images = [
    {
        image: 'https://business.socar.kr/static/images/service-company3-1.jpg',
        name: 'han',
    },
    {
        image: 'https://business.socar.kr/static/images/service-company3-2.jpg',
        name: 'han3',
    }
]


const IntroScreen = () => {

    SplashScreen.hide()

    return (
        <>
            <FlatList
                data={images}
                keyExtractor={({ name }) => name}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Image
                    style={styles.image}
                    source={{ uri: item.image }} />}
            />
            <View style={styles.container}>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={[styles.bottomBtn, styles.colorLogin]}>
                        <Text style={styles.txtBtn}>로그인</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.bottomBtn, styles.colorJoin]}>
                    <Text style={styles.txtBtn}>회원가입</Text>
                </TouchableOpacity>

            </View >
        </>
    )
}


export default IntroScreen;