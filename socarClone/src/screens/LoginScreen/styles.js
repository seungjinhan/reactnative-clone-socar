import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    container:{
        flex:1
    },
    
    arrow:{
        marginTop:5,
        marginLeft:10,
        width:25,
        height:25
    },

    topContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    mainContainer:{
        flex:12,
        flexDirection:"column",
        justifyContent:"space-between"
    },
    loginContainer:{
        flex:5,
        paddingTop:10,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'column',
    },
    loginText:{
        fontSize:30,
        fontWeight: "bold",
        marginBottom:10,
        
    },
    loginTextInput:{
        marginTop:10,
        height:50,
        borderColor:'#d1d1d1',
        borderWidth:1,
        padding:15,
    },
    loginButton:{
        marginTop:10,
        alignItems:'center',
        justifyContent: "center",
        height:50,
        width:'100%',
        backgroundColor:'#28a6e0',
    }, 
    loginButtonText:{
        fontSize:15,
        color:'#ffffff'
    },
    loginFindInfoButton:{
        marginTop:1,
        alignItems:'center',
        justifyContent: "center",
        height:50,
        width:'100%',
    }, 
    loginFindInfoButtonText:{
        fontSize:15,
        color:'#878787',
        textDecorationLine:"underline"
    },
    snsLoginContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:"center",
    },
    
    snsLoginImage:{
        width:40,
        height:40,
        marginLeft:10,
        marginRight:10,
    }
    
})

export default styles;