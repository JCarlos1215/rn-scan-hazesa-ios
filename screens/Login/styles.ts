
//react native
import { StyleSheet } from "react-native";

//constants
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      paddingHorizontal: 20,
    },
    logoTop: {
      height: 200,
      width: 200,
    },
  
    formContainer: {
      width: "100%",
      marginBottom: 20,
    },
    input: {
      marginBottom: 15,
    },
    forgotPasswordContainer: {
      alignItems: "flex-end",
      marginBottom: 20,
    },
    forgotPasswordText: {
      color: Colors.blue,
      textDecorationLine: "underline",
    },
    containerButtons: {
      alignItems: "center",
    },
    button: {
      width: "100%",
      paddingVertical: 9,
      // borderRadius: 5,
    },
    footerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  