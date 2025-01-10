import { StyleSheet, Dimensions, PixelRatio, Platform } from "react-native";
//constants
import { Colors } from "../../constants/Colors";
import {
  height,
  width,
  isHighDensity,
  isSmallDevice,
  pixelDensity,
} from "../../constants/Device";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  searchContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: height * 0.004,
    flexWrap: "wrap", // Permite que los elementos se ajusten si es necesario
  },

  searchbar: {
    flex: 1,
    height: height * 0.08,
    width: -isSmallDevice ? width * 0.6 : width * 0.7, // Reducir el tamaño en pantallas pequeñas
    marginRight: width * 0.05, // Ajuste de margen
    // paddingHorizontal: width * 0.02,

    marginLeft: -width * 0.022,
    backgroundColor: Colors.lightGrey,
    flexDirection: "row",
    alignItems: "center",
  },

  cameraContainer: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },

  closeButton: {
    position: "absolute",
    top: height * 0.025,
    right: -width * 0.04,
    backgroundColor: "transparent",
    width: width * 0.25,
    height: height * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
  },

  scrollContainer: {
    padding: isSmallDevice ? 15 : 20,
    flexGrow: 1,
    borderRadius: 15,
    paddingBottom: 40, // Espacio adicional al final
    marginTop: -height * 0.02,
  },

  title: {
    fontSize: isSmallDevice ? width * 0.05 : width * 0.055, // Ajuste para dispositivos pequeños
    fontWeight: "bold",
    color: Colors.white,
    backgroundColor: Colors.blue,
    paddingVertical: height * 0.015,
    textAlign: "center",
    borderRadius: 12,
  },

  infoContainer: {
    marginTop: height * 0.01,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.015,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    paddingVertical: height * 0.01,
  },

  label: {
    fontSize: isSmallDevice ? width * 0.035 : width * 0.04, // Escalado para dispositivos pequeños
    fontWeight: "bold",
    color: Colors.lightBlack,
    width: "40%",
  },

  value: {
    fontSize: isSmallDevice ? width * 0.035 : width * 0.04, // Escalado para dispositivos pequeños
    color: Colors.lightBlue,
    width: "60%",
    textAlign: "right",
    // marginTop: height * 0.025
  },

  barcodeButton: {
    marginLeft: -width * 0.04,
    marginRight: -width * 0.025,
    width: width * 0.22,
    height: height * 0.08,
    margin: 10,
    padding: 2,
    // paddingVertical: height * 0.015,

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  searchButton: {
    marginLeft: -width * 0.04,
    marginRight: width * 0.05,
    width: width * 0.22,
    height: height * 0.08,
    margin: 10,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  button: {
    paddingVertical: height * 0.011, // 1.5% de la altura de la pantalla
    marginBottom: -height * 0.004,
    margin: width * 0.025, // 2.5% de la anchura de la pantalla
    height: height * 0.07, // 8% de la altura de la pantalla
    justifyContent: "center",
    alignItems: "center",
  },
});
