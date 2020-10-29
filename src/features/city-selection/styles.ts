import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#080b24',
    height: '100%',
  },
  search: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    flex: 2,
    height: 40,
    color: 'white',
    fontSize: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
  },
  cityOptions: {
    marginTop: 20,
  },
});

export default styles;
