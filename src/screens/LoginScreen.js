/* LoginScreen Component
  Handles user authentication with email/password 
  and navigation to Home screen on successful login */

  import React from 'react';
  import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert 
  } from 'react-native';
  import { Theme, globalStyles } from '../theme';
  import { Formik } from 'formik';
  import * as Yup from 'yup';
  import { useDispatch, useSelector } from 'react-redux';
  import { loginSuccess, loginFailure } from '../redux/authSlice';
  
  // Form validation schema for login
  const LoginSchema = Yup.object().shape({
  email: Yup.string()
    //.email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    //.min(8, 'Password must be at least 8 characters')
    .required('Password is required')
  });
  
  const LoginScreen = ({ navigation }) => {
   const dispatch = useDispatch();
   const registeredUsers = useSelector(state => state.auth.registeredUsers);
  
   // Handle login form submission
   const handleLogin = (values) => {
     if (!registeredUsers[values.email] || registeredUsers[values.email] !== values.password) {
       dispatch(loginFailure('Invalid email or password'));
       Alert.alert('Login Failed', 'Invalid email or password');
       return;
     }
  
     dispatch(loginSuccess({ email: values.email }));
     navigation.replace('Home');
   };
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ 
          handleChange, 
          handleBlur, 
          handleSubmit, 
          values, 
          errors, 
          touched 
        }) => (
          <View>
            {/* Email input field */}
            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              placeholderTextColor={Theme.colors.secondary}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={globalStyles.errorText}>{errors.email}</Text>
            )}
            
            {/* Password input field */}
            <TextInput
              style={globalStyles.input}
              placeholder="Password"
              placeholderTextColor={Theme.colors.secondary}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={globalStyles.errorText}>{errors.password}</Text>
            )}
            
            {/* Login button */}
            <TouchableOpacity 
              style={globalStyles.button} 
              onPress={handleSubmit}
            >
              <Text style={globalStyles.buttonText}>Login</Text>
            </TouchableOpacity>
            
            {/* Navigation to signup */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={{
                textAlign: 'center', 
                marginTop: Theme.spacing.md,
                color: Theme.colors.primary,
                fontSize: Theme.typography.sizes.medium
              }}>
                Don't have an account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
  };
  
  export default LoginScreen;