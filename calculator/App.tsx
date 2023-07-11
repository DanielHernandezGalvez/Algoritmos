import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Calculator from './Calculator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
