import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text,  Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ImageSlider from '../../components/ImageSlider';
import LoginScreen from '../LoginScreen';

import styles from './styles';

const images = [
    {
        uri: require('../../assets/images/intro/1.jpg'),
    },
    {
        uri: require('../../assets/images/intro/2.jpg')
    },
]

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const AuthStack = createStackNavigator();

const IntroStackScreen = () => {
    <AuthStack.Navigator>
        <AuthStack.Screen
            name={LoginScreen}
            options={{title:'로그인'}} />
    </AuthStack.Navigator>
}
const IntroScreen = () => {
  
    return (
        <>
            <ImageSlider images={images} height={windowHeight-70} width={windowWidth} />
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={[styles.bottomBtn, styles.colorLogin]}>
                        <Text style={styles.txtBtn}>로그인</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={[styles.bottomBtn, styles.colorJoin]}>
                    <Text style={styles.txtBtn}>회원가입</Text>
                </TouchableOpacity>
            </View >
        </>
    )
}


export default IntroScreen;