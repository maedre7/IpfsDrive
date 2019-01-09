import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class App extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React-Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
