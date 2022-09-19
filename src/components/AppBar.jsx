import React from 'react';
import {  View, StyleSheet } from 'react-native';
import theme from '../theme.js';
import StyledText from './StyledText.jsx';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10

    },
    text: {
        color: theme.appBar.textPrimary
    }
}

)

const AppBar = () => {
    return(
        <View style={styles.container} >
            <StyledText fontWeight='bold' style={styles.text}>
                Repositorys
                 </StyledText>
        </View>
    )

}

export default AppBar;