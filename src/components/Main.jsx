import React from 'react';
import Constants from 'expo-constants';
import { View, Text } from 'react-native';
import RepoList from '../components/RepoList';
import AppBar from './AppBar.jsx';

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <AppBar />
            <RepoList />
        </View>
    )
}

export default Main;