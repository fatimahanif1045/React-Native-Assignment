import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Button title="Log In" onPress={() => props.navigation.navigate('SignIn')} />
      <Button title="Sign Up" onPress={() => props.navigation.navigate('SignUp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default WelcomeScreen;
