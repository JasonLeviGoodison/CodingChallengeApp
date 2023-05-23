import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
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
        placeholder="Cat's Name"/>

      <TextInput 
        style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                marginBottom:15,
                paddingLeft:5}} 
        placeholder="Breed" />

      <TextInput 
        style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                marginBottom:15,
                paddingLeft:5}} 
        placeholder="Short Description" />
      
      <TextInput 
        style={{borderWidth:1 , 
                borderColor:"black",
                height:25,
                marginBottom:15,
                paddingLeft:5}} 
        placeholder="Image will come here" />
      <View style={styles.button} >
      <TouchableOpacity >
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});
