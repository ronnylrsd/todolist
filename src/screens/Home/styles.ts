import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333", //GRAY_400
  },
  header: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D", //GRAY_700
    flexDirection: "row",
  },
  logoImage: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  logoTo: {
    alignItems: "center",
    justifyContent: "center",
    color: "#4EA8DE",
    fontSize: 30,
    fontWeight: "bold",
  },
  logoDo: {
    alignItems: "center",
    justifyContent: "center",
    color: "#8284FA",
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
