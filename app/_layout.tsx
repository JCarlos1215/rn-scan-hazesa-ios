import React, { useState } from "react";

// React Native
import {
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
  StyleSheet,
} from "react-native";

// Expo
import { StatusBar } from "expo-status-bar";
import { Stack, useRouter } from "expo-router";

// Constants
import { Colors } from "../constants/Colors";

// Components
import { CButton } from "../components/Button/CButton";

// React Native Paper
import {
  Provider as PaperProvider,
  IconButton,
  DefaultTheme,
  MD3DarkTheme,
} from "react-native-paper";

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.blue,
    accent: Colors.lightBlue,
    background: Colors.white,
    surface: Colors.lightGrey,
    text: Colors.black,
    disabled: Colors.darkGrey,
    placeholder: Colors.grey,
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: Colors.darkBlue,
    accent: Colors.lightBlue,
    background: Colors.black,
    surface: Colors.lightBlack,
    text: Colors.white,
    disabled: Colors.grey,
    placeholder: Colors.lightGrey,
  },
};

const RootLayout = () => {
  const router = useRouter();

  const [isDarkTeme, setIsDarkTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTeme);
  };

  return (
    // <PaperProvider theme={theme}>
    <PaperProvider theme={isDarkTeme ? darkTheme : lightTheme}>
      <SafeAreaView style={styles.container}>
        <Stack
          screenOptions={{
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: Colors.blue,
              // height: Platform.OS === "ios" ? 100 : 80, // Adjust height for iOS/Android
              
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              // title: "Index Screen",
              headerShown: false,
              statusBarTranslucent: true,
            }}
          />
          <Stack.Screen
            name="home"
            options={{
              title: "Escanear",
              headerBackVisible: false,
              headerRight: () => (
                <CButton
                  onPress={() => router.push("./")}
                  mode="text"
                  dark
                  rippleColor="transparent"
                >
                  <IconButton
                    icon="exit-to-app"
                    size={24}
                    color={Colors.white}
                  />
                </CButton>
              ),
            }}
          />
          <Stack.Screen
            name="assingPositionContainer"
            options={{
              title: "Asignar posición",
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name="editPositionContainer"
            options={{
              title: "Editar Posición",
              headerBackVisible: true,
            }}
          />
        </Stack>
        <StatusBar style="light" backgroundColor={Colors.blue} />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
    backgroundColor: Colors.blue,
  },
});

export default RootLayout;
