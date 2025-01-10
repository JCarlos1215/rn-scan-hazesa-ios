import client from "./Client";
import Constants from "expo-constants";
import { Alert } from "react-native";

const { BASE_URL } = Constants.expoConfig?.extra || {};

export const updatePositionContainer = async ({
  coordenada,
  id,
  id_bl,
}: {
  coordenada: string;
  id: number;
  id_bl: number;
}) => {
  if (!BASE_URL) {
    console.error("BASE_URL no está definido. Verifica tu configuración.");
    throw new Error("No se pudo obtener la URL base.");
  }

  try {
    const response = await client.put(
      `${BASE_URL}/App_ActualizaCoordenada`,
      {
        coordenada,
        id,
        id_bl,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic aGF6ZXNhOkYoZkpUSllQYW5oeVFCeQ==', // Asegúrate de que este valor sea correcto
        },
        timeout: 4000,
      }
    );

    console.log("Respuesta completa del servidor:", response);

    // Verifica si la respuesta contiene un error
    if (response.data?.Error === 1) {
      // Muestra el mensaje de error en la interfaz
      Alert.alert(
        "Error",
        `No se pudo actualizar la coordenada ${coordenada}: ${response.data.Mensaje}`
      );
      throw new Error(response.data?.Mensaje || "Error desconocido");
    }

    if (!response || response.data === undefined) {
      throw new Error("Respuesta no válida del servidor.");
    }

    return response.data;
  } catch (error) {
    console.error("Error en la petición:", error.message || error);

    // Si ocurre un error en la solicitud, mostrar un mensaje de alerta
    Alert.alert(
      "Error al actualizar",
      `No se pudo actualizar la posición: ${error.message || "Error desconocido"}`
    );

    throw new Error("No se pudo actualizar la posición.");
  }
};
