import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';

const Intro = ({cats, setCats}) => {

    
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    inputbox :{
        borderWidth:1 , 
        borderColor:"black",
        height:30,
        marginBottom:15,
        paddingLeft:5
    }
  });
    // const [cats, setCats] = useState([{...data}]);
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
        await AsyncStorage.setItem('cat', JSON.stringify([...cats, {...cat, id:id}]))
        await setCats([...cats, {...cat, id:id}]);
       
        
        setId(id+1);
       setCat({name:"", breed:"", desc:""}); 
        
        
       
       
    }

    const deleteCat = async (id) => {
        const newCat = cats.filter((cat) => cat.id != id); 
        await AsyncStorage.setItem('cat', JSON.stringify(newCat))
        setCats(newCat);
        // console.log(cats)
    }

    const editCat = (id) => {
        const updateCat = cats.find((cat) => cat.id ==id)
        setCat({name:updateCat.name, breed:updateCat.breed, desc:updateCat.desc})
        const newCat = cats.filter((cat) => cat.id != id); 
        setCats(newCat);
    }

    const handleClear = () => {
        setCat({name:"", breed:"", desc:""}); 
    }

    const fullDelete = async () => {
        await AsyncStorage.removeItem('cat')
        await setCats([]);
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
        style={styles.inputbox} 
        placeholder="Cat's Name"
        onChangeText={(text) => handleNameChange(text)}
        value={cat.name}
        />

      <TextInput 
       style={styles.inputbox} 
        placeholder="Breed" 
        onChangeText={(text) => handleBreedChange(text)}
        value={cat.breed}
        />

      <TextInput 
        style={styles.inputbox} 
        placeholder="Short Description" 
        onChangeText={(text) => handleDescriptionChange(text)}
        value={cat.desc}
        />
      
      {/* <TextInput 
        style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                marginBottom:15,
                paddingLeft:5}} 
        placeholder="Age" /> */}
      <View 
      style={{
        alignItems: 'center',
            padding: 10,
            // width:160 ,
            borderRadius:50,
            flexDirection:"row",
                justifyContent:"space-between"
            }} >
      
      <Button 
       onPress={() => handleSubmit()}
        title="Add Cat to the List"
        />
     
      <Button
        onPress={() => handleClear()}
        title="Clear List"
        />
      </View>
      <View
      style ={{
      backgroundColor: 'lightblue',
              marginBottom:20,
              marginTop:40,
              paddingTop:10,
              paddingBottom:10,
              borderRadius:5,
              
              }}>
      <Text
      style ={{textAlign: "center",
              fontSize:23,
              fontWeight:"bold",
              
              }}>
      List of Your Cats <FontAwesome5 name="cat" size={24} color="black" />
      </Text>
      </View>
        
      {cats.map((cat) => {
        
        
        if(cat.name == "" || cat.breed == "" || cat.desc == "" || cat.name == undefined){
            return;
        }

        return(
            
        <View 
        style={{borderWidth:1,
            borderRadius:"5%",
        marginBottom:10}} >
            
            <View
            style={{
                
                height:35,
                marginTop:5,
                paddingLeft:5,
                flexDirection:"row",
                justifyContent:"space-between"}} >
                <Text
                style={{
                    fontSize:30,
                    fontWeight:"bold"
                }}>{cat.name}</Text> 
                <View
                style={{flexDirection:"row",
                justifyContent:"space-between",height:35}}
                > 
                <TouchableOpacity onPress={() => editCat(cat.id)}>
                    <MaterialIcons name="edit" size={25} paddingRight={8}></MaterialIcons>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteCat(cat.id)}>
                    <MaterialIcons name="remove-circle-outline" size={25} paddingRight={8}></MaterialIcons>
                </TouchableOpacity>
                </View>
            </View>

            <View>
            <Text
            style={{
                height:15,
                paddingLeft:7,
                fontSize:12,
                flexDirection:"row",
                justifyContent:"space-between",
                fontStyle:'italic'}}>{cat.breed} Breed</Text>
            </View>

            <View>
                <Text
                style={{
                    height:25,
                    fontSize:16,
                    marginTop:5,
                    paddingLeft:7,
                    paddingTop:3,
                    paddingBottom:5,
                    backgroundColor:"pink",
                    
                    }}
                >{cat.desc}</Text>
                
            </View>
            
        </View>
        
            );
      })}


      

{cats.length > 0 && 
    <TouchableOpacity onPress={() => fullDelete()}>
        <MaterialIcons name="delete" size={35} paddingLeft={"45%"}></MaterialIcons>
    </TouchableOpacity>
}
    </View>
    

    
        
    )
}

  
export default Intro;

