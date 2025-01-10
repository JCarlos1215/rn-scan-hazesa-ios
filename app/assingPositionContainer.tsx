import React, { useRef, useState, useEffect } from "react";
import { View, Text, ScrollView, Alert, SafeAreaView } from "react-native";
import { List } from "react-native-paper";
import { router, useLocalSearchParams } from "expo-router";
import { CButton } from "@/components/Button/CButton";
import { CChip } from "../components/Chip/CChip";
import { Colors } from "../constants/Colors";
import { FlashList } from "@shopify/flash-list";
import { getAllPositions } from "../api/positionsContainer";
import { savePositionContainer } from "../api/savePositionCntainer";
import { styles } from "./../screens/assing-position-container/styles";

const AssingPositionContainer = () => {
  const { rollData } = useLocalSearchParams();
  // console.log("Parámetros recibidos:", rollData);
  const parsedrollData = rollData ? JSON.parse(rollData) : null;
  // console.log(parsedrollData)
  const scrollViewRef = useRef<ScrollView>(null);
  const [data, setData] = useState({
    rows: [],
    layers: [],
    positions: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllPositions("someCode");
        setData(result);
      } catch (err) {
        setError(err.message || "Error al obtener los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePress = (id: number, index: number) => {
    setExpanded(expanded === id ? null : id);
    if (expanded !== id) {
      scrollViewRef.current?.scrollTo({
        y: index * 100,
        animated: true,
      });
    }
  };

  const handleChipPress = (position: string) => {
    if (selectedPosition === position) {
      setSelectedPosition(null);
    } else if (selectedPosition) {
      Alert.alert(
        "Selección única",
        "Solo puedes seleccionar un chip a la vez. Desmarca el actual para seleccionar otro."
      );
    } else {
      setSelectedPosition(position);
    }
  };

  const renderChip = ({
    item,
  }: {
    item: { row: number; layer: string; pos: number };
  }) => {
    const position = `${item.row}${item.layer}${item.pos}`;
    const isSelected = selectedPosition === position;

    return (
      <View key={position} style={{ flex: 1, padding: 5 }}>
        <CChip
          text={position}
          isSelected={isSelected}
          onSelect={() => handleChipPress(position)}
          style={[styles, isSelected ? styles.selectedChip : null]}
          icon={isSelected ? "check" : undefined}
        />
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{`Error: ${error}`}</Text>
      </View>
    );
  }

  const { rows, layers, positions } = data;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView ref={scrollViewRef} style={styles.container}>
        {/* <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}> */}
          <Text style={styles.selectedText}>
            Posición Actual: {parsedrollData?.coordenada || "No disponible"}
          </Text>
          <Text style={styles.selectedText}>
            Posición seleccionada: {selectedPosition || "No seleccionada"}
          </Text>
        {/* </View> */}

        {rows.length > 0 ? (
          rows.map((row, index) => (
            <View key={row}>
              <List.Accordion
                rippleColor={Colors.lightGrey}
                title={`Fila ${row}`}
                expanded={expanded === row}
                onPress={() => handlePress(row, index)}
              >
                <FlashList
                  data={layers.flatMap((layer) =>
                    positions.map((pos) => ({
                      row,
                      layer: layer.description,
                      pos,
                    }))
                  )}
                  keyExtractor={(item) =>
                    `${item.row}-${item.layer}-${item.pos}`
                  }
                  renderItem={renderChip}
                  numColumns={4}
                  estimatedItemSize={50}
                />
              </List.Accordion>
            </View>
          ))
        ) : (
          <Text>No hay filas disponibles.</Text>
        )}
        {/* <View style={styles.footerContainer}>
          <CButton
            mode="contained"
            onPress={() => router.push("/home")}
            style={styles.button}
            buttonColor={Colors.blue}
            text="inicio"
            textColor="white"
          />
        </View> */}
        <CButton
          icon="content-save"
          mode="contained"
          buttonColor={Colors.green}
          text="Guardar Posición"
          style={styles.button}
          disabled={!selectedPosition}
          onPress={async () => {
            try {
              const payload = {
                coordenada: selectedPosition || "",
                id: parsedrollData?.id || 0,
                id_bl: parsedrollData?.id_bl || 0,
              };

              console.log("Datos enviados a la API:", payload);
              const result = await savePositionContainer(payload);
              Alert.alert(
                "Posición guardada",
                `Se guardó la posición: ${JSON.stringify(payload)}`
              );
              router.push("/home");
              setSelectedPosition(null);
            } catch (error) {
              // Alert.alert(
              //   "Error al guardar",
              //   `No se pudo guardar la posición: ${
              //     error.message || "Error desconocido"
              //   }`
              // );
            }
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssingPositionContainer;
