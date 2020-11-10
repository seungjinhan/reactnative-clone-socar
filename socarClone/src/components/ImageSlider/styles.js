import { Dimensions, StyleSheet } from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
    },
    pagination: {
        flexDirection: "row",
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText: {
        fontSize: (width / 10),
        color: '#888',
        margin: 3
    },
    pagingActive: {
        fontSize: (width / 10),
        color: '#fff',
        margin: 3
    },
});

export default styles;