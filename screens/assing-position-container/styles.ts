import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { height, isSmallDevice, width } from "../../constants/Device";

export const styles = StyleSheet.create({
  // Contenedor seguro para áreas con notch
  safeContainer: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    // paddingTop: insets?.top || height * 0.02,
  },
  // Contenedor principal
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    paddingHorizontal: isSmallDevice ? width * 0.04 : width * 0.05,
    paddingVertical: isSmallDevice ? height * 0.01 : height * 0.02,
  },
  // Estilo para el título
  // title: {
  //   fontSize: isSmallDevice ? 18 : 22,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   marginBottom: height * 0.02,
  //   color: Colors.darkBlue,
  // },
  // Botón genérico
  button: {
    paddingVertical: height * 0.011, // 1.5% de la altura de la pantalla
    marginBottom: -height * 0.004,
    margin: width * 0.025, // 2.5% de la anchura de la pantalla
    height: height * 0.07, // 8% de la altura de la pantalla
    justifyContent: "center",
    alignItems: "center",
  },
  // Botón de acción
  actionButton: {
    marginVertical: height * 0.01,
    paddingVertical: isSmallDevice ? 10 : 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: Colors.green,
    elevation: 2,
  },
  // Contenedor de la barra de búsqueda
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.02,
  },
  // Estilo de la barra de búsqueda
  searchbar: {
    flex: 1,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: Colors.white,
    elevation: 2,
  },
  // Botón del escáner de código de barras
  barcodeButton: {
    marginLeft: 8,
    height: isSmallDevice ? 40 : 48,
    width: isSmallDevice ? 40 : 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: Colors.blue,
    elevation: 2,
  },
  // Indicador de carga
  activityIndicator: {
    paddingTop: height * 0.02,
  },
  // Contenedor de la cámara
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    // top: insets?.top || 24,
    right: 16,
    zIndex: 2,
  },
  infoContainer: {
    marginTop: height * 0.02,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.white,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: "bold",
    color: Colors.darkGrey,
  },
  value: {
    fontSize: isSmallDevice ? 14 : 16,
    color: Colors.black,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: height * 0.02,
  },
  selectedText: {
    fontSize: isSmallDevice ? 18 : 16,
    fontWeight: "bold",
    color: Colors.blue,
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: isSmallDevice ? width * 0.05 : width * 0.055, // Ajuste para dispositivos pequeños
    fontWeight: "bold",
    color: Colors.white,
    backgroundColor: Colors.blue,
    paddingVertical: height * 0.015,
    textAlign: "center",
    borderRadius: 12,
    marginBottom: height * 0.02,
  },
});
