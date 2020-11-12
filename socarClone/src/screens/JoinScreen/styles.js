import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container:{
        flex:1
    },
    body:{
        flex:1,
        width:'100%',
        height:1,
    },
    bodyView1:{
        flex:5,
        paddingLeft:10,
        width:150,
        height:100,
        justifyContent:"flex-end"
    },
    bodyText1:{
        fontSize:25,
    },
    bodyView2:{
        flex:1,
        paddingTop:20,
        paddingLeft:10,
        width:300,
        height:100,
    },
    bodyText2:{
        fontSize:13,
    },
    bodyView3:{
        flex:6,
        paddingTop:25,
        paddingLeft:10,
        justifyContent:"flex-start"
    },
    joinBupText:{
        fontSize:13,
        color:'#5781ff',
        textDecorationLine:"underline"
    },
    bodyView4:{
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
    },
    bodyView4Button:{
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#6ba1ff',
    },
    bodyView4ButtonText:{
        color:'#ffffff',
        fontSize:15,
    }
});

export default styles;