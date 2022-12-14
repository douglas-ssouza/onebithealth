import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContent: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    backgroundColor: '#f6f6f6',
    borderRadius: 50,
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0043',
    paddingVertical: 14,
    width: '90%',
    marginLeft: 12,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18,
    color: '#FF0043',
    fontWeight: 'bold',
  },
});

export default styles;
