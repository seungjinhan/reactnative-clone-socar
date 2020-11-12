import React from 'react';
import  { View, Text, Button } from "react-native";

const JoinScreen = ({ navigation}) => (

    <View>
        <Button  title="back"  onPress={()=>navigation.goBack()} />
        <Text>회원가입</Text>
    </View>
);

export default JoinScreen;