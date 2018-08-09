// @flow
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    zIndex: 100,
    paddingHorizontal: 10,
    marginRight: 30,
  },
  menu: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: '#fff',
    width: 235,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 1,
  },
});

export default styles;
