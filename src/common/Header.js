import {useNavigation} from '@react-navigation/native'; // If using React Navigation
import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Header = () => {
  const navigation = useNavigation(); // Hook to access navigation

  const handleBackPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<'} Back</Text>
      </TouchableOpacity>
      {/* <Text style={styles.headerText}>Header</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background color
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#1663e8', // Customize button text color
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Header;
