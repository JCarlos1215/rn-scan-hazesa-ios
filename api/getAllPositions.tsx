import client from "./Client";

export const getAllPositions = async () => {
    try {
      const [positions, rows, layers] = await Promise.all([
        getPositions(),
        getRows(),
        getLayers(),
      ]);
  
      return {
        positions,
        rows,
        layers,
      };
    } catch (error) {
      console.error("Error en la petición de todas las posiciones:", error);
      throw new Error("No se pudieron obtener todas las posiciones.");
    }
  };
  