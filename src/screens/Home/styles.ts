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
    backgroundColor: "#1A1A1A", //GRAY_600
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
  createdConcludedTasks: {
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 24,
  },
  createdTasksText: {
    color: "#4EA8DE", //BLUE
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  createdTasksNumber: {
    color: "#D9D9D9", //GRAY_200
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#333333", //GRAY_400
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  concludedTasksText: {
    marginLeft: 51,
    color: "#8284FA", //PURPLE
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  concludedTasksNumber: {
    color: "#D9D9D9", //GRAY_200
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#333333", //GRAY_400
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  emptyTasks: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: 32,
    paddingHorizontal: 24,
    height: 208,
    borderTopWidth: 1,
    borderTopColor: "#333333", //GRAY_400
    width: 327,
    marginHorizontal: 48,
  },
  clipboardImage: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  emptyTasksTitle: {
    //fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 20,
    textAlign: "center",
    color: "#808080", //GRAY_300
  },
  emptyTasksText: {
    color: "#808080", //GRAY_300
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
});
