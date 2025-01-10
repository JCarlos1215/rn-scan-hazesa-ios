import React from "react";
import { Chip } from "react-native-paper";
import { styles } from "./styles";
import { ChipComponentProps } from "./types";
import { Colors } from "../../constants/Colors";

export const CChip = ({
  text,
  isSelected = false, // El estado de selección es controlado externamente
  onSelect,
  onPress,
  children,
  icon = "check", // Ícono predeterminado
  iconColor = "#ffffff",
  style,
}: ChipComponentProps) => {
  const handlePress = () => {
    onSelect?.(text || ""); // Llama al callback pasando el texto asociado
    onPress?.(); // Ejecuta cualquier lógica adicional al presionar
  };

  return (
    <Chip
      onPress={handlePress}
      style={[
        styles.chip,
        style,
        { backgroundColor: isSelected ? Colors.darkBlue : "#f5f5f5" }, // Cambia el color del fondo
      ]}
      textStyle={{ color: isSelected ? "#ffffff" : "#000000" }} // Cambia el color del texto
      icon={isSelected ? icon : undefined} // Muestra el ícono solo si está seleccionado
    >
      {children || text}
    </Chip>
  );
};
