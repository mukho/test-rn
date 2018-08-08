// @flow
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  logoSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  fullWidth: {
    width: '100%',
  },
  logo: {
    paddingVertical: 7,
  },
  title: {
    color: '#465b64',
    fontSize: 38,
    fontWeight: 'bold',
  },
  textSection: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#465b64',
    paddingTop: 26,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  textSectionContent: {
    alignItems: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  paragraph: {
    color: '#8fa2aa',
    textAlign: 'center',
    marginBottom: 50,
  },
  haveAccount: {
    color: '#8fa2aa',
    marginTop: 30,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bodyCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default styles;
