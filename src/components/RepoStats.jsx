import React from 'react';
import { View } from 'react-native';
import StyledText from './StyledText.jsx';


const ParseNumber = value => {
    return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}


const RepositoryStats = props => {
    return(
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
            <StyledText fontWeight='bold'>{ParseNumber(props.starts)}</StyledText>
            <StyledText >Stars</StyledText>
            </View>
            <View>
            <StyledText fontWeight='bold'>{ParseNumber(props.forks)}</StyledText>
            <StyledText >Fork</StyledText>
            </View>
            <View>
            <StyledText fontWeight='bold'>{props.review}</StyledText>
            <StyledText >Review</StyledText>
            </View>

    </View>
    )
 
}

export default RepositoryStats;