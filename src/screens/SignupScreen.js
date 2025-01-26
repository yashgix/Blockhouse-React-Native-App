/* SignupScreen Component
  Handles user registration with email/password validation
  and navigation to Home screen on successful signup */

  import React from 'react';
  import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
  import { globalStyles, Theme } from '../theme';
  import { Formik } from 'formik';
  import * as Yup from 'yup';
  import { useDispatch, useSelector } from 'react-redux';
  import { signupSuccess, loginSuccess, loginFailure } from '../redux/authSlice';
  
  // Form validation schema
  const SignupSchema = Yup.object().shape({
   email: Yup.string()
     .email('Invalid email')
     .required('Email is required'),
   password: Yup.string()
     .min(8, 'Password must be at least 8 characters') 
     .required('Password is required'),
   confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
     .required('Confirm password is required')
  });
  
  const SignupScreen = ({ navigation }) => {
   const dispatch = useDispatch();
   const registeredUsers = useSelector(state => state.auth.registeredUsers);
  
   // Handle form submission
   const handleSignup = (values) => {
     if (registeredUsers[values.email]) {
       Alert.alert('Signup Failed', 'Email already registered');
       return;
     }
  
     dispatch(signupSuccess({ email: values.email, password: values.password }));
     dispatch(loginSuccess({ email: values.email }));
     navigation.replace('Home');
   };
  
   return (
     <View style={globalStyles.container}>
       <Text style={globalStyles.title}>Sign Up</Text>
       <Formik
         initialValues={{ email: '', password: '', confirmPassword: '' }}
         validationSchema={SignupSchema}
         onSubmit={handleSignup}
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
  
             {/* Confirm password input field */}
             <TextInput
               style={globalStyles.input}
               placeholder="Confirm Password"
               placeholderTextColor={Theme.colors.secondary}
               secureTextEntry
               onChangeText={handleChange('confirmPassword')}
               onBlur={handleBlur('confirmPassword')}
               value={values.confirmPassword}
             />
             {errors.confirmPassword && touched.confirmPassword && (
               <Text style={globalStyles.errorText}>{errors.confirmPassword}</Text>
             )}
             
             {/* Signup button */}
             <TouchableOpacity 
               style={globalStyles.button} 
               onPress={handleSubmit}
             >
               <Text style={globalStyles.buttonText}>Sign Up</Text>
             </TouchableOpacity>
             
             {/* Navigation to login */}
             <TouchableOpacity 
               onPress={() => navigation.navigate('Login')}
             >
               <Text style={{
                 textAlign: 'center',
                 marginTop: Theme.spacing.md,
                 color: Theme.colors.primary,
                 fontSize: Theme.typography.sizes.medium
               }}>
                 Already have an account? Login
               </Text>
             </TouchableOpacity>
           </View>
         )}
       </Formik>
     </View>
   );
  };
  
  export default SignupScreen;