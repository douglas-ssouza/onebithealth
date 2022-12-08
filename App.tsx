import { StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Title from './src/components/Title';
import Main from './src/components/Main';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Title />
        <Main />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
