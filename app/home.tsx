import { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Platform, StatusBar, Dimensions, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';

const PHOTOS = Array.from({ length: 25 }).map((_, i) => `https://unsplash.it/300/300/?random&__id=${i}`);
// const screenWidth = Dimensions.get('window').width;
// const gutterSpace = 10;
// const marginHorizontal = 20;
// const eachWidth = (screenWidth - (gutterSpace + marginHorizontal)) / 3;

const Home = () => {
  const router = useRouter();
  // const [searchTerm, setSearchTerm] = useState('');

  console.log(PHOTOS);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.grid}>
          {PHOTOS.map((uri) => (
            <View key={uri} style={styles.item}>
              <Image source={{ uri }} style={styles.photo} accessibilityIgnoresInvertColors />
              <Text>Cat name</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      grid: {
        display: 'grid' as 'none',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gridRowGap: '8px',
        gridColumnGap: '8px',
        padding: 8,
      },
      item: {
        width: '100%',
        height: 150,
      },
    },
    // portrait
    default: {
      grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '1%',
        justifyContent: 'space-evenly',
        backgroundColor: '#3B3838',
      },
      item: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
        padding: '1%',
      },
      // Landscape start of implementation
      // default: {
      //   grid: {
      //     flexDirection: 'row',
      //     flexWrap: 'wrap',
      //     padding: '1%',
      //     justifyContent: 'space-evenly',
      //     backgroundColor: 'lightyellow',
      //   },
      //   item: {
      //     height: Dimensions.get('window').width / 4.5,
      //     width: Dimensions.get('window').width / 4.5,
      //     // width: eachWidth,
      //     // margin: marginHorizontal,
      //     padding: '1%',
      //   },
      container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
    },
  }),
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
  fab: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    margin: 16,
  },
});

export default Home;
