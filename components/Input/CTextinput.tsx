
//react
import React from "react";
//react-native
import { View } from "react-native";
//react-native-paper
import { TextInput } from "react-native-paper";
//interfaces
import { CTextInputProps } from "./types";

//styles
import { styles } from "./styles";

export const CTextInput = ({
  label,
  value,
  containerStyle,
  mode = "outlined",
  style,
  keyboardType = "default",
  disable = false,
  onChangeText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  secureTextEntry,
  activeUnderlineColor,
  underlineColor,
  activeOutlineColor,
}: CTextInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode={mode}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        disabled={disable}
        activeOutlineColor={activeOutlineColor}
        underlineColor={underlineColor}
        activeUnderlineColor={activeUnderlineColor}
        style={[styles.input, style]}
        left={
          leftIcon ? <TextInput.Icon icon={leftIcon} size={20} /> : undefined
        }
        right={
          rightIcon ? (
            <TextInput.Icon
              icon={rightIcon}
              onPress={onRightIconPress}
              size={20}
              style={styles.icon}
            />
          ) : undefined
        }
      />
    </View>
  );
};

