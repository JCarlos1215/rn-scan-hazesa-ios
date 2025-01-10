// app/splashscreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
const SplashScreenComponent = () => {
  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync(); // Impide que la splash se oculte automáticamente

      // Simular tiempo de carga o cualquier otro proceso
      setTimeout(() => {
        SplashScreen.hideAsync(); // Ocultar la splash screen
        router.push('/home'); // Redirigir a la pantalla principal
      }, 3000); // Muestra la splash screen por 3 segundos
    };

    prepare();
  }, [router]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.image} />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // O el color que prefieras
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

export default SplashScreenComponent;
