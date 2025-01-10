import { Alert } from "react-native";
import { useRouter } from "expo-router"; // Asegúrate de tener esto en tu componente

import { loginUser } from "../../api/loginUser";

export const handleLogin = async (
  user: string,
  password: string,
  setLoading: (value: boolean) => void,
  router: ReturnType<typeof useRouter>
) => {
  if (!user || !password) {
    console.log("resultado", user, password);
    Alert.alert("Error", "Ingresa contraseña o usuario válido.");
    return;
  }

  setLoading(true);
  try {
    const result = await loginUser(user, password);
    if (result?.Exito) {
      router.push("/home");
    } else {
      const errorMessage =
        result?.Mensaje || "Usuario o contraseña incorrectos.";
      Alert.alert("Error", errorMessage);
    }
  } catch (error: any) {
    const errorMessage =
      error.message || "Ocurrió un error durante el inicio de sesión.";
    Alert.alert("Error", errorMessage);
  } finally {
    setLoading(false);
  }
};