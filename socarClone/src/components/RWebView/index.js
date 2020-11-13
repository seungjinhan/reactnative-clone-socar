import React from 'react';
import {WebView} from 'react-native-webview'

const UrlWebview = ({uri, styles}) => (

    <WebView
        source={{uri:uri}}
        style={styles} />
)

const HtmlWebView = ( {html}) => (
    <WebView
        originWhitelist={['*']}
        source={{html: html}} />
)

export {UrlWebview, HtmlWebView};