import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import theme from '../theme.js';
import RepositoryStats from './RepoStats.jsx';
import StyledText from './StyledText.jsx';

const RepoItemHeader = ({ownerUrl, fullName, description, language }) => {

return <View style={{ flexDirection: 'row', paddingBottom: 2}}>
    <View style={{paddingRight: 10}}>
        <Image style={styles.image} source={{uri: ownerUrl}}/>
    </View>

        <View style={{ flex: 1}}>
        <StyledText  fontWeight='bold'>Full name: {fullName}</StyledText>
        <StyledText color='secondary'> {description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View> 
}


const RepoItem =(props) => {
    return(
        <View key={props.id} style={styles.container}>
        <RepoItemHeader { ...props } />
        <RepositoryStats {  ...props } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-starts',
        borderRadius: 4,
        overflow: 'hidden',
        marginTop: 4,
        marginBottom: 4
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 4
    }
})

export default RepoItem;