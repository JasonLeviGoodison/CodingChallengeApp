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
            <View style={styles.buttonContainer}>
                <Button title='Home' onPress={() => navigation.navigate('CatListScreen')} />
            </View>

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
            <View style={styles.buttonContainer}>
                <Button title='Add Cat' onPress={() => navigation.navigate('AddCatScreen')} />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#c0def3',
    },
    buttonContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
    }
});

export default CatListScreen;
