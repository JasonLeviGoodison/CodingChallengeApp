import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList } from 'react-native';

import CatCard from '../components/CatCard';

export default function CatListScreen({ navigation }) {
    const cats = useSelector(state => state.cats);

    return (
        <View>
            <FlatList
                data={cats}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <CatCard cat={item} navigation={navigation} />}
            />
        </View>
    );
}

