import React, { useRef, useState, useEffect } from "react";
import { View, Text, ScrollView, Alert, SafeAreaView } from "react-native";
import { List } from "react-native-paper";
import { useLocalSearchParams,router } from "expo-router";
import { CButton } from "@/components/Button/CButton";
import { CChip } from "../components/Chip/CChip";
import { Colors } from "../constants/Colors";
import { FlashList } from "@shopify/flash-list";
import { getAllPositions } from "../api/positionsContainer";
import { styles } from "./../screens/assing-position-container/styles";

import {updatePositionContainer} from "../api/updatePositionContainer"
const editPositionContainer = () => {
  const { rollData } = useLocalSearchParams();
  console.log("Parámetros recibidos:", rollData);
   const parsedrollData = rollData ? JSON.parse(rollData) : null;
  //  console.log(parsedrollData)
   useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllPositions("someCode"); // Cambiar "someCode" por el valor real.
        setData(result);
      } catch (err) {
        setError(err.message || "Error al obtener los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

   const [data, setData] = useState({
     rows: [],
     layers: [],
     positions: [],
   });
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [expanded, setExpanded] = useState<number | null>(null);
   const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
 
   const scrollViewRef = useRef<ScrollView>(null);
 

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
       // Si el chip seleccionado ya está activo, se desmarca
       setSelectedPosition(null);
     } else if (selectedPosition) {
       // Si ya hay otro chip seleccionado, bloquea la acción
       Alert.alert(
         "Selección única",
         "Solo puedes seleccionar un chip a la vez. Desmarca el actual para seleccionar otro."
       );
     } else {
       // Marca el chip como seleccionado
       setSelectedPosition(position);
       console.log("Posición seleccionada:", position);
     }
   };
 
   const handleResetPosition = () => {
     setSelectedPosition(null);
     console.log("Posición seleccionada reiniciada");
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
           isSelected={isSelected} // Prop externa para determinar el estado
           onSelect={() => handleChipPress(position)} // Maneja la selección
           style={[
             styles,
             isSelected ? styles.selectedChip : null, // Estilos condicionales
           ]}
           icon={isSelected ? "check" : undefined} // Ícono de check al estar seleccionado
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
         <View style={styles.selectedInfo}>
           <Text style={styles.selectedText}>
             Posición Actual: {parsedrollData?.coordenada || "No disponible"}
           </Text>
           <Text style={styles.selectedText}>
             Posición seleccionada: {selectedPosition || "No seleccionada"}
           </Text>
           {/* <CButton
             text="Reiniciar selección"
             textColor="white"
             buttonColor={Colors.warning}
             onPress={handleResetPosition}
             style={styles.resetButton}
             icon="refresh"
           /> */}
         </View>

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

         <CButton
           icon="content-save"
           mode="contained"
           buttonColor={Colors.green}
           text="Actualizar Posición"
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
                         const result = await updatePositionContainer(payload);
                         Alert.alert(
                           "Posición guardada",
                           `Se actualizo correctamente la posición: ${JSON.stringify(
                             payload
                           )}`
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

export default editPositionContainer;
