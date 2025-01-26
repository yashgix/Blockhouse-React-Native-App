// src/navigation/AppNavigator.js
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import { Svg, Path } from 'react-native-svg';
import { Theme } from '../theme'; 

const Stack = createStackNavigator();

const CustomHeader = () => (
 <View style={Theme.header}>
   <Svg width={24} height={24} viewBox="0 0 100 100">
     <Path
       d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
       fill="#000000"
     />
   </Svg>
   <Text style={Theme.headerText}>Blockhouse</Text>
 </View>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{
        headerTitle: props => <CustomHeader {...props} />,
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        },
        headerLeft: () => null,
        headerTitleContainerStyle: {
          left: 0,
          right: 0
        }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);


export default AppNavigator;