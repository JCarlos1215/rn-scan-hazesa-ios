#!/bin/bash

echo "Instalando dependencias principales..."
npm install @craftzdog/react-native-buffer@^6.0.5 \
  @expo/vector-icons@^14.0.2 \
  @react-native-async-storage/async-storage@1.23.1 \
  @react-navigation/bottom-tabs@^7.0.0 \
  @react-navigation/native@^7.0.0 \
  axios@^1.7.9 \
  babel-plugin-transform-inline-environment-variables@^0.4.4 \
  dotenv@^16.4.7 \
  expo@~52.0.20 \
  expo-blur@~14.0.1 \
  expo-camera@~16.0.10 \
  expo-constants@~17.0.3 \
  expo-device@~7.0.1 \
  expo-font@~13.0.1 \
  expo-haptics@~14.0.0 \
  expo-image@~2.0.3 \
  expo-linking@~7.0.3 \
  expo-local-authentication@~15.0.1 \
  expo-notifications@~0.29.11 \
  expo-router@~4.0.15 \
  expo-splash-screen@~0.29.18 \
  expo-status-bar@~2.0.0 \
  expo-symbols@~0.2.0 \
  expo-system-ui@~4.0.6 \
  expo-web-browser@~14.0.1 \
  react@18.3.1 \
  react-dom@18.3.1 \
  react-native@0.76.5 \
  react-native-gesture-handler@~2.20.2 \
  react-native-linear-gradient@^2.8.3 \
  react-native-paper@^5.12.5 \
  react-native-quick-base64@^2.1.2 \
  react-native-reanimated@~3.16.1 \
  react-native-safe-area-context@4.12.0 \
  react-native-screens@~4.4.0 \
  react-native-vector-icons@^10.2.0 \
  react-native-web@~0.19.13 \
  react-native-webview@13.12.5

echo "Instalando dependencias de desarrollo..."
npm install --save-dev @babel/core@^7.25.2 \
  @types/jest@^29.5.12 \
  @types/react@~18.3.12 \
  @types/react-native@^0.72.8 \
  @types/react-test-renderer@^18.3.0 \
  jest@^29.2.1 \
  jest-expo@~52.0.2 \
  react-native-dotenv@^3.4.11 \
  react-test-renderer@18.3.1 \
  typescript@^5.7.2

echo "Configuración completada. ¡Listo para empezar!"
