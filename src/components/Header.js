// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../theme';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Blockhouse</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: Theme.colors.headerBackground,
    padding: 16,
    alignItems: 'center'
  },
  headerText: {
    color: Theme.colors.headerText,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Header;