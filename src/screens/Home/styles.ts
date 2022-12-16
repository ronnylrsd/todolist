import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  container: {
    flex: 0.8,
    backgroundColor: "#333333", //GRAY_400
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626", //GRAY_500
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F", //DARK_BLUE
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    marginTop: -28,
    marginRight: 24,
    marginLeft: 24,
  },
});
