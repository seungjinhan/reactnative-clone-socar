import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import ImageSliderz from 'react-native-image-slideshow';

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


const dataSouce = [
    {
        url: 'https://www.greenpostkorea.co.kr/news/photo/201905/104639_102144_2822.jpg',
    },
    {
        url: 'https://lh3.googleusercontent.com/proxy/KJM5gauHBOGHvcntMDvVsfUa-wxIBVkBnpiatvkk7NIY2bF1g6lZXwQNC4SEy_GtLT_F9zogoZwfkUQybm4tKbOTGoWJ5-0wLLaVK9mFiO_eH3gwm0IPQgSOSLjLztaFhdF4ZPZcrkTKFaqPNvW8H7HLiG698g6M-3hp26oXkxZIO5G9qZeFGi7mFcH7m1fvV5xgT_MtNJJNJYqe4IZwaNScm7fcy6bZ36pc5LiAOszFy_egI_ER1SwxTIRioQT96FgtbWk8jcblicnGCFVD1ERdU2pB3GY6RjVpypTTqTtElZFLIpDsPjsMspFv',
    }
]

const IntroScreen = () => {

    SplashScreen.hide()

    return (
        <>
            {/* <FlatList
                data={images}
                keyExtractor={({ name }) => name}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Image
                    style={styles.image}
                    source={{ uri: item.image }} />}
            /> */}
            <ImageSliderz 
                height={Dimensions.get('window').height - 70}
                indicatorSize={16}
                dataSource={dataSouce}/>
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