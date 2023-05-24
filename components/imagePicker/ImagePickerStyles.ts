import { StyleSheet } from 'react-native';
import { SPACING } from '../../common/constants';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING,
  },
  button: {
    marginTop: SPACING,
    marginBottom: SPACING,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
});

export default styles;
