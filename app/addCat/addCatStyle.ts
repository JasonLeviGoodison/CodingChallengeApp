import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SPACING } from '../../common/constants';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#3B3838',
  },
  container: {
    flex: 1,
    margin: SPACING,
  },
});

export default styles;
