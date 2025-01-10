import React, { useState } from "react";
import { View, Text, Alert, Keyboard } from "react-native";
import { useCameraPermissions, CameraView } from "expo-camera";
import { CButton } from "../components/Button/CButton";
import { Searchbar, ActivityIndicator, Icon } from "react-native-paper";
import { rolls } from "../api/rolls";
import { Colors } from "../constants/Colors";
import { styles } from "../screens/home/styles";
import { router } from "expo-router";

import {
  height,
  isHighDensity,
  isSmallDevice,
  pixelDensity,
  width,
} from "../constants/Device";
export default function Home() {
  const [cameraVisible, setCameraVisible] = useState(false);
  const [scannedData, setScannedData] = useState("");
  const [loading, setLoading] = useState(false);
  const [rollData, setRollData] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [hasPosition, setHasPosition] = useState(false);
  const [isValueExisting, setIsValueExisting] = useState(false);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Es necesario otorgar permisos para usar la cámara.
        </Text>
        <CButton
          onPress={requestPermission}
          text="Dar permisos"
          style={styles.permissionButton}
        />
      </View>
    );
  }
  {console.log(JSON.stringify(rollData))}
  const handleBarCodeScanned = async ({ data }) => {
    setCameraVisible(false);
    setScannedData(data);

    Keyboard.dismiss();
    await fetchrollData(data);
  };

  const handleHasPosition = ({ data }) => {
    if (rollData.coordenada) {
      setHasPosition(true);
    }
  };
  const fetchrollData = async (code) => {
    if (!code) {
      Alert.alert("Error", "Por favor, ingresa un código válido.");
      return;
    }

    setLoading(true);
    try {
      const data = await rolls(code);
      if (data.Error === 1) {
        Alert.alert("Rollo No Encontrado", data.Mensaje);
      } else {
        setRollData(data.Data);
        setIsValueExisting(true);
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo obtener la información del rollo.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchrollData(scannedData);
    Keyboard.dismiss();
  };

  const handleAssingPosition = () => {
    router.push({
      pathname: "/assingPositionContainer",
      params: {
        rollData: JSON.stringify(rollData),
      },
    });
  };

  const handleEditPosition = () => {
    router.push({
      pathname: "/editPositionContainer",
      params: {
        rollData: JSON.stringify(rollData),
      },
    });
  };

  const iconSize = isSmallDevice || isHighDensity ? 24 : 30; // Reducir tamaño en dispositivos pequeños o de alta densidad

  return (
    <View style={styles.container}>
      {!cameraVisible ? (
        <View>
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Buscar código"
              onChangeText={(text) => setScannedData(text)}
              value={scannedData}
              style={styles.searchbar}
              iconColor={Colors.blue}
            />
            <CButton
              buttonColor={Colors.blue}
              mode="contained"
              textColor="white"
              style={styles.searchButton}
              onPress={handleSearch}
            >
              <Icon source="magnify-scan" size={iconSize} color="white" />
            </CButton>
            <CButton
              buttonColor={Colors.blue}
              mode="contained"
              textColor="white"
              onPress={() => setCameraVisible(true)}
              style={styles.barcodeButton}
            >
              <Icon source="barcode-scan" size={iconSize} color="white" />
            </CButton>
          </View>

          {loading && (
            <ActivityIndicator
              size="large"
              color={Colors.darkGrey}
              style={{ paddingTop: 12 }}
            />
          )}

          {rollData && (
            <View
              style={styles.scrollContainer}
              // keyboardShouldPersistTaps="handled"
              // keyboardDismissMode="on-drag"
              // showsVerticalScrollIndicator={false}
            >
              <Text style={styles.title}>
                Rollo No: {rollData.codigo || "N/A"}
              </Text>
              <View style={styles.infoContainer}>
                <View style={styles.row}>
                  <Text style={styles.label}>BL</Text>
                  <Text style={styles.value}>{rollData.bl || "N/A"}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Buque</Text>
                  <Text style={styles.value}>{rollData.Buque || "N/A"}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Viaje</Text>
                  <Text style={styles.value}>
                    {rollData.numero_viaje || "N/A"}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Medida 1</Text>
                  <Text style={styles.value}>{rollData.medida1 || "N/A"}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Medida 2</Text>
                  <Text style={styles.value}>{rollData.medida2 || "N/A"}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Peso Neto</Text>
                  <Text style={styles.value}>
                    {rollData.peso_neto || "N/A"}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Peso Bruto</Text>
                  <Text style={styles.value}>
                    {rollData.peso_bruto || "N/A"}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Ubicación Actual</Text>
                  <Text style={styles.value}>
                    {rollData.coordenada || "N/A"}
                  </Text>
                </View>
                {rollData.coordenada ? (
                  <CButton
                    icon="update"
                    mode="contained"
                    buttonColor={Colors.warning}
                    text="Actualizar Posición"
                    style={styles.button}
                    onPress={handleEditPosition}
                  />
                ) : (
                  <CButton
                    icon="content-save"
                    mode="contained"
                    // disabled={isValueExisting}
                    buttonColor={Colors.green}
                    text="Asignar Posición"
                    style={styles.button}
                    onPress={handleAssingPosition}
                  />
                )}
              </View>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            facing="back"
            onBarcodeScanned={handleBarCodeScanned}
          >
            <CButton
              style={styles.closeButton}
              onPress={() => setCameraVisible(false)}
              mode="text"
              rippleColor="transparent"
            >
              <Icon source="close" size={iconSize * 1.2} color={Colors.white} />{" "}
              {/* Ícono más grande en cámara */}
            </CButton>
          </CameraView>
        </View>
      )}
    </View>
  );
}
