import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import styles from './styles';

const IntroScreen = () => {

    SplashScreen.hide()

    return (
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
    )
}

export default IntroScreen;