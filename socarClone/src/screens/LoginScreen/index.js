import React, { createContext, useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


import { AuthContext } from '../../context/AuthContext'

import styles from './styles';


const LoginScreen = ({ navigation }) => {

    const { signIn } = useContext(AuthContext);

    return (
        <View
            style={styles.container}>
            <View
                style={styles.topContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={require('../../assets/images/icons/arrow_left.png')}
                        style={styles.arrow}
                    />
                </TouchableOpacity>
                <Text></Text>
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.loginContainer} >
                    <Text style={styles.loginText}>로그인</Text>
                    <TextInput style={styles.loginTextInput} placeholder='가입한 이메일 주소' />
                    <TextInput style={styles.loginTextInput} placeholder='비밀번호 입력' />
                    <TouchableOpacity style={styles.loginButton}
                        activeOpacity={0.9}
                        onPress={() => signIn()}>
                        <Text style={styles.loginButtonText}>
                            로그인하기
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginFindInfoButton}>
                        <Text style={styles.loginFindInfoButtonText}>
                            가입정보 찾기
                    </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.snsLoginContainer}>
                    <Image
                        style={styles.snsLoginImage}
                        source={require('../../assets/images/snsIcon/kakao.png')} />
                    <Image
                        style={styles.snsLoginImage}
                        source={require('../../assets/images/snsIcon/naver.png')} />
                    <Image
                        style={styles.snsLoginImage}
                        source={require('../../assets/images/snsIcon/facebook.jpg')} />
                </View>
            </View>
        </View>
    )
}

export default LoginScreen;