import React, { useState, useEffect, useRef } from "react";
import { View, Text, Platform } from "react-native";
import { useRouter } from "expo-router";
import { SplashScreen } from "expo-router";
import Login from "./login";
import { Colors } from "../constants/Colors";
import { styles } from "../screens/Login/styles";
import { handleLogin } from "../screens/Login/utils";
import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";

const Index = () => {
  const router = useRouter();
  const [isSplashVisible, setSplashVisible] = useState(true);
  const [isAnimationPlaying, setAnimationPlaying] = useState(true); // Estado para controlar la animación
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(() => {
        SplashScreen.hideAsync();
        setSplashVisible(false);
        setAnimationPlaying(false); // Detener la animación después de que el splash se oculte
      }, 3000);
    };

    prepare();
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isAnimationPlaying) {
        animation.current.play(); // Iniciar animación
      } else {
        animation.current.stop(); // Detener animación
      }
    }
  }, [isAnimationPlaying]);

  if (isSplashVisible) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          backgroundColor: Colors.blue,
        }}
      >
        <LottieView
          autoPlay
          loop
          ref={animation}
          style={{
            width: "80%",
            height: "80%",
            marginLeft: "auto", // Ajusta el margen izquierdo si es necesario
            marginRight: "auto", // Ajusta el margen derecho si es necesario
            backgroundColor: Colors.blue,
          }}
          resizeMode="contain"
          source={require("../assets/Animation - 1736377873529.json")}
        />
        <Text style={{ color: "white", fontSize: 24 }}>scaner hazesa</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      
      <StatusBar style="light" backgroundColor={Colors.blue} />
      <Login />
    </View>
  );
};

export default Index;
