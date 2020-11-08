import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    bottomBtn: {
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width / 2,
        height: 50,
    },

    colorLogin: {
        backgroundColor: "#333233"
    },

    colorJoin: {
        backgroundColor: '#3a92fc'
    },

    txtBtn: {
        fontWeight: "bold",
        color: '#ffffff',
        fontSize: 20,
    }



})

export default styles;