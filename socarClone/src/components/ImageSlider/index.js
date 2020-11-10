import React, { useState } from 'react';
import { View, Image, ScrollView, Dimensions, Text, Animated } from 'react-native';
import styles from './styles';

const ImageSlider = ({ images, width, height }) => {

    const [state, setState] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== state) {
            setState(slide);
        }
    }
    
    return (
        <View style={[styles.container, {width, height}]}>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={[styles.scroll, {width, height}]}>
                {
                    images.map((image, index) => (
                        <Image
                            key={index}
                            resizeMode="stretch"
                            source={image.uri}
                            style={{width, height}} />
                    ))
                }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    images.map((i, k) => (
                        <Text key={k} style={k === state ? styles.pagingActive : styles.pagingText}>●</Text>
                    ))
                }
            </View>
        </View>
    );
};



export default ImageSlider;
