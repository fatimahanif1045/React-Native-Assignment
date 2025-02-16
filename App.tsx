import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import PositionLayout from './components/PositionLayout';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

//Assignment 1 Task 1

const App = () => {
  return <PositionLayout />; 

};


//Assignment 1 Task 2

interface FormData {
  name: string;
  email: string;
  designation: string;
  organizaion: string;

}
/*
const App = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' , designation: '', organizaion: ''});
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mobile App</Text>

      <Text style={styles.buttonText}>Enter Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name Here"
        value={formData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
            
      <Text style={styles.buttonText}>Enter Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email ID Here"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />

      <Text style={styles.buttonText}>Enter Designation</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Designation Here"
        value={formData.designation}
        onChangeText={(text) => handleInputChange('designation', text)}
      />

      <Text style={styles.buttonText}>Enter Organizaion Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Organizaion Name Here"
        value={formData.organizaion}
        onChangeText={(text) => handleInputChange('organizaion', text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      {submittedData && (
        <View style={styles.result}>
          <Text style={styles.resultText}>{submittedData.name}</Text>
          <Text style={styles.resultText}>{submittedData.email}</Text>
          <Text style={styles.resultText}>{submittedData.designation}</Text>
          <Text style={styles.resultText}>{submittedData.organizaion}</Text>

        </View>
      )}
    </View>
  );
};
*/

//Assignment 2

const Stack = createNativeStackNavigator();
/*
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'powderblue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
  },
});

export default App;
