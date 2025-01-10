import React from "react";
import { StyleSheet, View, StyleProp, TextStyle } from "react-native";
/// rn
import { Button } from "react-native-paper";

import { CButtonProps } from "./types";

export const CButton = ({
  text,
  buttonColor,
  mode,
  enable,
  dark,
  textColor,
  rippleColor,
  icon,
  onPress,
  children,
  style,
  disabled = false,
}: CButtonProps) => {
  return (
    <Button
      mode={mode}
      icon={icon}
      dark={dark}
      disabled={disabled}
      textColor={textColor}
      buttonColor={buttonColor}
      rippleColor={rippleColor}
      onPress={onPress}
      style={style}
    >
      {children || text || null}
    </Button>
  );
};
