import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Intro = () => {

    
    const [cats, setCats] = useState([{}]);
    const [cat, setCat] = useState({name:"", breed:"", desc:""})
    const [id, setId] = useState(0);

    const handleNameChange = (text) => {
        setCat({...cat, name: text});
    }

    const handleBreedChange = (text) => {
        setCat({...cat, breed: text});
    }
    const handleDescriptionChange = (text) => {
        setCat({...cat, desc: text});
    }
    const handleSubmit = async()=> {
        setCats([...cats, {name: cat.name, breed:cat.breed, desc : cat.desc, id:id}]);
        setId(id+1); 
       await AsyncStorage.setItem('cat', JSON.stringify(cats))
       setCat({name:"", breed:"", desc:""}); 
    }

    const deleteCat = (id) => {
        const newCat = cats.filter((cat) => cat.id != id); 
        setCats(newCat);
        // console.log(cats)
    }

    const editCat = (id) => {
        const updateCat = cats.find((cat) => cat.id ==id)
        setCat({name:updateCat.name, breed:updateCat.breed, desc:updateCat.desc})
        const newCat = cats.filter((cat) => cat.id != id); 
        setCats(newCat);
    }
    return (
<View style={{padding:50}}> 
      <Text
      style ={{textAlign: "center",
              fontSize:15,
              fontWeight:"bold",
              marginBottom:20,
              marginTop:20
              }}>
      Hello Jack, this is your Cat Track App
      </Text>

      <TextInput 
        style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                marginBottom:15,
                paddingLeft:5}} 
        placeholder="Cat's Name"
        onChangeText={(text) => handleNameChange(text)}
        value={cat.name}
        />

      <TextInput 
        style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                marginBottom:15,
                paddingLeft:5}} 
        placeholder="Breed" 
        onChangeText={(text) => handleBreedChange(text)}
        value={cat.breed}
        />

      <TextInput 
        style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                marginBottom:15,
                paddingLeft:5}} 
        placeholder="Short Description" 
        onChangeText={(text) => handleDescriptionChange(text)}
        value={cat.desc}
        />
      
      <TextInput 
        style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                marginBottom:15,
                paddingLeft:5}} 
        placeholder="Image will come here" />
      <View 
      style={{alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10}} >
      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text>Add Cat to the List</Text>
      </TouchableOpacity>
      </View>
      
      <Text
      style ={{textAlign: "center",
              fontSize:15,
              fontWeight:"bold",
              marginBottom:20,
              marginTop:40
              }}>
      List of Your Cats
      </Text>
      {cats.map((cat) => {
        if(cat.name == "" || cat.breed == "" || cat.desc == "" || cat.name == undefined){
            return;
        }

        return(
        <View>
            <View
            style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                paddingLeft:5,
                flexDirection:"row",
                justifyContent:"space-between"}} >
                <Text>Name: {cat.name}</Text> 
                <Text>Breed:{cat.breed}</Text>
            </View>

            <View
            style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                marginBottom:15,
                paddingLeft:5,
                flexDirection:"row",justifyContent:"space-between"}}>
                <Text>Description:{cat.desc}</Text>
                <TouchableOpacity onPress={() => editCat(cat.id)}>
                    <MaterialIcons name="edit" size={20}></MaterialIcons>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteCat(cat.id)}>
                    <MaterialIcons name="delete" size={20}></MaterialIcons>
                </TouchableOpacity>
            </View>
        </View>
            );
      })}


      

    </View>
    )
}


  
export default Intro;

