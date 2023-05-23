import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CatCard from '../components/CatCard';
import { removeCat } from '../redux/catActions';

const CatListScreen = ({ navigation }) => {
    const cats = useSelector(state => state.cats);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <FlatList
                data={cats}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <CatCard cat={item} navigation={navigation} />
                        <Button title='Remove Cat' onPress={() => dispatch(removeCat(item.id))} />
                    </View>
                )}
            />
            <Button title='Add Cat' onPress={() => navigation.navigate('AddCat')} />
        </View>
    );
};

const styles = StyleSheet.create({ // 'add cat' is at bottom because of justifyContent: 'center', alignItems: 'center',
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#c0def3',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CatListScreen;



