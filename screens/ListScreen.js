import React, { useState } from 'react';
import { Alert, View, Text, StyleSheet, Button, Modal, SafeAreaView, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons } from '@expo/vector-icons'; 
import CatInfo from '../components/CatInfo';
import AddCats from '../components/AddCats';
import EditCats from '../components/EditCats';
import { useCats } from '../context/CatContext';

const ListScreen = () => {
    // Initializes the useCats hook
    const { cats, removeCat, sortCats, clearAllCats } = useCats();

    // Initializes the state variables for editing and adding
    const [editingCat, setEditingCat] = useState(null);
    const [showAddCat, setShowAddCat] = useState(false);

    // The modal for adding and editing a cat
    const [modalVisible, setModalVisible] = useState(false);

    // Function for the editing cat functions 
    const startEditing = (cat) => {
        setEditingCat(cat);
        setModalVisible(true);
    };

    const stopEditing = () => {
        setEditingCat(null);
        setModalVisible(false);
    };

    // If the list is empty, the empty list will be shown for instructions
    const EmptyList = () => (
        <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>You don't have any cats yet.</Text>
            <Text style={styles.emptyListText}>Tap on the "+" button to add your first cat.</Text>
        </View>
    );

    // The hidden buttons warnings for editing and removing a cat
    const renderHiddenItem = (data, rowMap) => {
        return (
            <View style={styles.rowBack}>
                <Button title="Remove" onPress={() =>
                    Alert.alert(
                        "Delete Cat",
                        "Are you sure you want to delete this cat?",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            {
                                text: "OK", onPress: async () => {
                                    await removeCat(data.item.id);
                                    if (rowMap[data.item.id]) {
                                        rowMap[data.item.id].closeRow();
                                    }
                                }
                            }
                        ]
                    )
                } />
                <Button title="Edit" onPress={() => {
                    startEditing(data.item);
                    if (rowMap[data.item.id]) {
                        rowMap[data.item.id].closeRow();
                    }
                }} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Using the AddCats function to add a cat to the list */}
            <AddCats visible={showAddCat} close={() => setShowAddCat(false)} />

            {/* Buttons to sort the list */}
            <View style={styles.sortButtonsContainer}>
                <Button title="Sort by Name" onPress={() => sortCats('name')} />
                <Button title="Sort by Date" onPress={() => sortCats('created_at')} />
            </View>

            {/* Showing the current state of the Cat profiles */}
            <SwipeListView
                data={cats}
                renderItem={({ item }) => <CatInfo {...item} />}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={90}
                rightOpenValue={-90} 
                ListEmptyComponent={EmptyList} 
            />
            {/* Having the modal to slide the profile to the right or left for editing or delete */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}>
                {editingCat && <EditCats cat={editingCat} onEdit={stopEditing} />}
            </Modal>
            
            {/* In case there is more than one cat, show the clear button */}
            {cats.length >= 1 && (
                // Clear button to clear all cats
                <TouchableOpacity style={styles.clearButton} onPress={() =>

                    // Alert to confirm the user wants to clear all cats
                    Alert.alert(
                    "Clear All Cats",
                    "Are you sure you want to clear all cats?",
                    [
                        {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                        },
                        {
                        text: "OK", onPress: async () => {
                            await clearAllCats();
                        }
                        }
                    ]
                    )
                }>
                    {/* Icon for trash */}
                    <MaterialIcons name="delete" size={24} color="white" />
                </TouchableOpacity>
            )}

            {/* Button for add cat function */}
            <TouchableOpacity style={styles.addButton} onPress={() => setShowAddCat(true)}>
                <MaterialIcons name="add" size={24} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // Background for listscreen
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // Styling for the swipe list options
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    // Styling for the add button
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        backgroundColor: 'blue',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Container for sorting buttons
    sortButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomColor: 'black',
        borderWidth: 0.3,
    },

    // Styling for the empty list container
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    // Styling for the empty list text
    emptyListText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    
    // Styling for the clear button
    clearButton: {
        position: 'absolute',
        left: 30,
        bottom: 30,
        backgroundColor: 'red',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },      
});

export default ListScreen;
