import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { UrlWebview, HtmlWebView} from '../../components/RWebView';
import sytles from './styles'

const MainScreen = () => (
    
    <View>
        <View>
            <TextInput placeholder='주소를 넣으시오'/>
        </View>
        <View>
        </View>
    </View>
)

export default MainScreen;