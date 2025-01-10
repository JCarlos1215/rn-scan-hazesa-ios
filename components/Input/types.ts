import React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface CTextInputProps {
  label?: string;
  value?: string;
  mode?: "flat" | "outlined";
  keyboardType?:
    | "default"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad";
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disable?: boolean;
  onChangeText?: (text: string) => void;
  leftIcon?: string; // Cambiar a nombre de ícono como string
  rightIcon?: string; // Cambiar a nombre de ícono como string
  onRightIconPress?: () => void; // Acción para el ícono derecho
  underlineColor?: string;
  activeOutlineColor?: string;
  activeUnderlineColor?: string;
  secureTextEntry?: boolean;
}
