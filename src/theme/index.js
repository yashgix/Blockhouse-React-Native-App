// src/theme/index.js

// Export the Theme object which contains various theme-related properties
export const Theme = {
  //Color palette for the theme
  colors: {
    primary: '#FFA100',
    secondary: '#b7b7b7',
    background: '#FFFFFF',
    text: '#000000',
    white: '#FFFFFF',
    error: '#FF0000',
    inputBorder: '#A1EAFB',
    headerBackground: '#FFFFFF',
    headerText: '#000000'
  },

  // Typography properties for the theme
  typography: {
    fontFamily: 'System',
    sizes: {
      small: 14,
      medium: 16,
      large: 24
    },
    weights: {
      regular: 'normal',
      bold: '600'
    }
  },
  // Spacing values for the theme
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },

  // Styles for the header component
  header: {
    backgroundColor: '#FFFFFF',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: '100%'
  },

  // Styles for the header text
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 8,
    textAlign: 'center'
  },

  // Styles for the header container
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
 };
 
 export { globalStyles } from './globalStyles';