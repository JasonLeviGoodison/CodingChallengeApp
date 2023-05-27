import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CatCard from '../components/CatCard';
import { removeCat } from '../redux/catActions';
import { Button } from 'react-native-elements';

const CatListScreen = ({ navigation }) => {
    const cats = useSelector(state => state.cats);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {cats.length === 0 && (
                <View style={styles.introContainer}>
                    <Text style={styles.welcomeText}>Welcome!</Text>
                    <Button
                        title='Add Your Cats!'
                        onPress={() => navigation.navigate('AddCatScreen')}
                        buttonStyle={styles.addButton}
                    />
                </View>
            )}

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

            {cats.length > 0 && (
                <View style={styles.footerContainer}>
                    <Button
                        title='Add Another Cat'
                        onPress={() => navigation.navigate('AddCatScreen')}
                        buttonStyle={styles.addButton}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#c0def3',
    },
    introContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContainer: {
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    addButton: {
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#ffab40',
    },
});

export default CatListScreen;
