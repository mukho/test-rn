import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ebebeb',
    padding: 25,
    paddingTop: 35,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#465b64',
    fontSize: 26,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    top: 40,
    left: 30,
    color: '#c2c3c2',
  },
  content: {
    padding: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  linkedinLogo: {
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 5,
  },
  contentTitle: {
    color: '#7a939c',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  disclaimer: {
    color: '#e2e2e2',
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  formSection: {
    alignItems: 'center',
  },
  haveAccount: {
    color: '#8fa2aa',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#e2e2e2',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  signinLogo: {
    marginVertical: 10,
  },
  cnooseMethodTitle: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Helvetica',
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  inRow: {
    flexDirection: 'row',
  },
});

export default styles;
