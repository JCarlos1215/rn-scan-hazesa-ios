import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Dialog, Portal, Paragraph } from "react-native-paper";
import { CustomAlertProps } from "./types";
import { styles } from "./styles";
const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  onDismiss,
  title,
  message,
  icon = "check-circle", // Icono por defecto
  confirmText = "Aceptar", // Texto del botón por defecto
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss} style={styles.dialog}>
        <Dialog.Icon icon={icon} size={40} color="green" />
        <Dialog.Title style={styles.title}>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss} labelStyle={styles.buttonLabel}>
            {confirmText}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};


export default CustomAlert;
