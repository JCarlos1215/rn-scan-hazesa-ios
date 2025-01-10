import client from "./Client";
import Constants from "expo-constants";

const { BASE_URL } = Constants.expoConfig?.extra || {};

export const getAllPositions = async (code: string) => {
  if (!BASE_URL) {
    console.error("BASE_URL no está definido. Verifica tu configuración.");
    throw new Error("No se pudo obtener la URL base.");
  }

  try {
    const [positions, rows, layers] = await Promise.all([
      client.post("/App_get_posiciones", { code }),
      client.post("/App_get_filas", { code }),
      client.post("/App_get_capas", { code }),
    ]);

    // Procesar positions: extraer solo id_posicion
    const positionsData = Array.isArray(positions.data?.Data)
      ? positions.data.Data.map((item) => item.id_posicion)
      : [];

    // Procesar rows: extraer solo id_fila
    const rowsData = Array.isArray(rows.data?.Data)
      ? rows.data.Data.map((item) => item.id_fila)
      : [];

    // Procesar layers: extraer id_capa y descripcion como pares
    const layersData = Array.isArray(layers.data?.Data)
      ? layers.data.Data.map((item) => ({
          id: item.id_capa,
          description: item.descripcion,
        }))
      : [];

    const transformedData = {
      positions: positionsData, // Arreglo de id_posicion
      rows: rowsData, // Arreglo de id_fila
      layers: layersData, // Arreglo de objetos con id y description
    };

    console.log("Transformed Data:", transformedData);

    return transformedData;
  } catch (error) {
    console.error("Error en la petición:", error.response || error.message);
    throw new Error("No se pudo obtener los datos de posiciones.");
  }
};
