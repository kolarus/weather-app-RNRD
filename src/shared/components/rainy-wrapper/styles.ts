import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#393c50',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    opacity: 0.1,
  },
});

export default styles;
