import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.text}>Cargando Realidad Aumentada...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20
  }
});
