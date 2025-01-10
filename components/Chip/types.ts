import { StyleProp, TextStyle,ViewStyle} from "react-native";

export interface ChipComponentProps {
  style?: StyleProp<TextStyle>; // Para personalizar los estilos del TextInput
  // Para personalizar los estilos del TextInput
  text?: string; // Hacer opcional el prop text
  isSelected?: boolean;
  onSelect: (label: string) => void;
  onPress?: () => void;
  children?: React.ReactNode; // Agregar children para que se pase el contenido directamente
  icon?: string;
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  iconColor?: string;

}