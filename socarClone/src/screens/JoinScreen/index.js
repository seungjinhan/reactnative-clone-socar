import React from 'react';
import  { View, Text, Button } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainScreen from '../MainScreen';
import styles from './styles';

const JoinScreen = () => (

    <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.bodyView1}>
                <Text style={styles.bodyText1}>쏘카와 함께</Text>
                <Text style={styles.bodyText1}>카세어링을</Text>
                <Text style={styles.bodyText1}>시작하세요</Text>
            </View>
            <View style={styles.bodyView2}>
                <Text style={styles.bodyText2}>쏘카는 만 21세 이상부터 이용 가능합니다.</Text>
                <Text style={styles.bodyText2}>운전면허 취득 1년 이상부터 이용 가능합니다.</Text>
                <Text style={styles.bodyText2}>결제카드와 운전면허증을 준비해주세요.</Text>
            </View>
            <View style={styles.bodyView3}>
                <TouchableOpacity style={styles.joinBup}>
                    <Text style={styles.joinBupText}>
                        법인 회원으로 가입하기
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyView4}>
                <TouchableOpacity 
                    style={styles.bodyView4Button} 
                    onPress={MainScreen}> 
                    <Text 
                        style={styles.bodyView4ButtonText}
                        >
                        가입하기
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default JoinScreen;