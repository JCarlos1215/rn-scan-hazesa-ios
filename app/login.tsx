//react
import React, { useState } from "react";
//react native
import { View, Alert, ActivityIndicator, Text } from "react-native";

//expo r
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";

//components
import { CTextInput } from "../components/Input/CTextinput";
import { CButton } from "../components/Button/CButton";
//constants
import { Colors } from "../constants/Colors";

//styles
import { styles } from "../screens/Login/styles";

//utils
import { handleLogin } from "../screens/Login/utils";

export default function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [error, setError] = useState("");

  const onLoginPress = async () => {
    if (!user.trim() || !password.trim()) {
      setError("Por favor, ingresa usuario y contraseña.");
      return;
    }
    setError(""); // Limpiar error previo
    await handleLogin(user, password, setLoading, router).catch((e) => {
      setError("Usuario o contraseña incorrectos."); // Mensaje genérico para errores
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={Colors.darkBlue} />
      {/* Logo */}
      <View>
        <Image
          source={require("../assets/images/logo-header-transformed.png")}
          style={styles.logoTop}
          contentFit="contain"
        />
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <CTextInput
          label="Usuario"
          value={user}
          onChangeText={setUser}
          underlineColor={Colors.blue}
          activeUnderlineColor={Colors.blue}
          activeOutlineColor={Colors.blue}
          style={styles.input}
        />
        <CTextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          underlineColor={Colors.blue}
          activeUnderlineColor={Colors.blue}
          activeOutlineColor={Colors.blue}
          secureTextEntry={hidePass}
          rightIcon={hidePass ? "eye" : "eye-off"}
          onRightIconPress={() => setHidePass(!hidePass)}
        />

        {/* Mostrar mensaje de error */}
        {error ? <Text style={{ color: "red", marginVertical: 8 }}>{error}</Text> : null}

        <View style={styles.containerButtons}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.blue} />
          ) : (
            <CButton
              mode="contained"
              onPress={onLoginPress}
              style={styles.button}
              buttonColor={Colors.blue}
              text="Ingresar"
              textColor="white"
              disabled={loading} // Deshabilitar botón mientras carga
            />
          )}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <CButton
          mode="contained"
          onPress={() => router.push("/home")}
          style={styles.button}
          buttonColor={Colors.blue}
          text="Inicio"
          textColor="white"
        />
      </View>
      <View>
        <Image
          source={require("../assets/images/logo-footer.jpg")}
          style={styles.logoTop}
          contentFit="contain"
        />
      </View>
    </View>
  );
}
