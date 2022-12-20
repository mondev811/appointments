import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Main} from './src/Main';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
