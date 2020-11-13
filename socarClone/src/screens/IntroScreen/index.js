import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text,  Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ImageSlider from '../../components/ImageSlider';
import JoinScreen from '../JoinScreen';
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

const IntroScreen = () => (

    <AuthStack.Navigator
        initialRouteName="Intro"
        headerMode="none">
        <AuthStack.Screen
            name="Intro"
            component={Intro}
            options={{title:'로그인'}}  />
        <AuthStack.Screen
            name="Login"
            component={LoginScreen} />
        <AuthStack.Screen
            name="Join"
            component={JoinScreen} />
    </AuthStack.Navigator>
)

const Intro = ({navigation}) => {
  
    return (
        <>
            <ImageSlider images={images} height={windowHeight-70} width={windowWidth} />
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={[styles.bottomBtn, styles.colorLogin]}>
                        <Text 
                            style={styles.txtBtn}
                            onPress={()=> navigation.push("Login")}>
                                로그인
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={[styles.bottomBtn, styles.colorJoin]}>
                        <Text 
                            style={styles.txtBtn}
                            onPress={()=> navigation.push("Join")}>
                            가입하기
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        </>
    )
}


export default IntroScreen;