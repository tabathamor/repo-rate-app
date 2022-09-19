import React from 'react';
import { FlatList, View, Text } from 'react-native';
import repositories from '../data/repositories'
import RepoItem from './RepoItem.jsx';

const RepoList = () => {
    return (
        <FlatList data={repositories}
        ItemSeparatorComponent={()=> {  <Text>  </Text> }}
            renderItem={({ item: repo }) => (
            <RepoItem {...repo}/>
            )}
        />
    )
}

export default RepoList;

