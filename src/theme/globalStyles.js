/* Global Styles
  Defines reusable styles for components across the app */

  import { StyleSheet } from 'react-native';
  import { Theme } from './index';
  
  export const globalStyles = StyleSheet.create({
   // Container styles
   container: {
     flex: 1,
     backgroundColor: Theme.colors.background,
     padding: Theme.spacing.lg,
     justifyContent: 'center'
   },
  
   // Input field styles
   input: {
     height: 56,
     borderColor: '#000000',
     borderWidth: 0.7,
     borderRadius: 8,
     marginBottom: Theme.spacing.md,
     paddingHorizontal: Theme.spacing.md,
     fontSize: Theme.typography.sizes.medium,
     color: '#000000'
   },
  
   // Button styles
   button: {
     backgroundColor: Theme.colors.primary,
     padding: Theme.spacing.md,
     borderRadius: 30,
     width: '100%',
     height: 56,
     justifyContent: 'center',
     alignItems: 'center'
   },
   buttonText: {
     color: Theme.colors.white,
     fontSize: Theme.typography.sizes.medium,
     fontWeight: '700'
   },
  
   // Typography styles
   title: {
     fontSize: Theme.typography.sizes.large,
     fontWeight: Theme.typography.weights.bold,
     textAlign: 'center',
     marginBottom: Theme.spacing.xl,
     color: Theme.colors.text
   },
   errorText: {
     color: Theme.colors.error,
     fontSize: Theme.typography.sizes.small,
     marginBottom: Theme.spacing.sm
   },
   linkText: {
     color: Theme.colors.primary,
     fontSize: Theme.typography.sizes.medium,
     textAlign: 'center',
     marginTop: Theme.spacing.xl,
     fontWeight: '500'
   },
  
   // Home screen specific styles
   homeContainer: {
     flex: 1,
     padding: Theme.spacing.lg,
     justifyContent: 'space-between'
   },
   contentContainer: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   bottomContainer: {
     width: '100%'
   },
   userEmail: {
     fontSize: Theme.typography.sizes.medium,
     marginBottom: Theme.spacing.md,
     textAlign: 'center'
   },
   homeTitle: {
     fontSize: 24,
     fontWeight: 'bold',
     textAlign: 'center',
     color: Theme.colors.text
   },
   logoutButton: {
     backgroundColor: '#8ee5f9'
   }
  });