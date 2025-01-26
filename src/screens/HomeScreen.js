/* HomeScreen Component
  Displays welcome message and user email
  Handles user logout functionality */

  import React from 'react';
  import { View, Text, TouchableOpacity } from 'react-native';
  import { globalStyles } from '../theme';
  import { useSelector, useDispatch } from 'react-redux';
  import { logout } from '../redux/authSlice';
  
  const HomeScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  
  // Handle user logout
  const handleLogout = () => {
    dispatch(logout());
    navigation.replace('Login');
  };
  
  return (
    <View style={globalStyles.homeContainer}>
      {/* Welcome message container */}
      <View style={globalStyles.contentContainer}>
        <Text style={globalStyles.homeTitle}>
          Welcome to the Blockhouse Assignment App!
        </Text>
      </View>
  
      {/* User info and logout section */}
      <View style={globalStyles.bottomContainer}>
        <Text style={globalStyles.userEmail}>
          Logged in as: {user?.email}
        </Text>
        <TouchableOpacity 
          style={[globalStyles.button, globalStyles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={globalStyles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  };
  
  export default HomeScreen;