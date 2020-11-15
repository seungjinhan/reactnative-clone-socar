import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    inputAddressContainer: {
        position: "absolute",
        left: 20,
        top: 20,
        width: '90%',
        height: 60,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
    },

    inputAddressMenuIcon: {
        paddingLeft: 10,
        color: 'gray'
    },

    inputTextAddressView: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10
    },

    inputTextAddress: {
        fontSize: 18,
        color: 'gray'
    },

    mapView: {
        width: '100%',
        height: '100%'
    }


})

export default styles;