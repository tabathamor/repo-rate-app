import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../theme.js'


const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeight.normal
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },

    colorSecondary: {
        color: theme.colors.textSecondary
    },

    bold: {
        fontWeight: theme.fontWeight.bold,
    },
   
    subHeading: {
        fontSize: theme.fontSize.subheading,
    },
     
})

export default function StyledText({ children, color, fontSize, fontWeight, style, ...restOfProps}){

    const textStyle = [
       styles.text,
       color === 'primary' && styles.colorPrimary,
       color === 'secondary' && styles.colorSecondary,
       fontSize === 'subheading' && styles.subHeading,
       fontWeight === 'bold' && styles.bold, 
       style

    ]

    return(
        <Text style={textStyle} {...restOfProps}>
             {children}
        </Text>
    )
}