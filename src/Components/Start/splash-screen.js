import React from 'react';
import {Image, View, StyleSheet} from "react-native";

const SplashScreen = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.iconLogo} source={require('../../../assets/icon-logo.png')}/>
            <Image style={styles.textLogo} source={require('../../../assets/text-logo.png')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
    },
    iconLogo: {
        flex: 7,
        width: 450,
        resizeMode: 'contain',
        //borderWidth: 10,
        //borderColor: '#AAAAAA'
    },
    textLogo: {
        flex: 1,
        width: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        //borderWidth: 10,
        //borderColor: '#AAAAAA',
    }
});

export default SplashScreen;
