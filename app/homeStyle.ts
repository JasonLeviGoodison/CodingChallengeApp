import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SPACING } from '../common/constants';

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
    },
    default: {
      grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: SPACING,
        justifyContent: 'space-evenly',
      },
    },
  }),
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#3B3838',
  },
  segmentedButtons: {
    marginLeft: SPACING,
    marginRight: SPACING,
  },
});

export default styles;
