import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';


export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ComponentA />
        <ComponentB />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
