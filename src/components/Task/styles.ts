import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "89%",
    height: 64,
    backgroundColor: "#262626", //GRAY_500
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 24,
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#333333", //GRAY_400
    borderRadius: 8,
  },
  name: {
    fontSize: 14,
    paddingVertical: 12,
    paddingRight: 48,
    marginLeft: 16,
    lineHeight: 20,
    color: "#F2F2F2", //GRAY_100
  },
  checkedButton: {
    width: 24,
    height: 24,
    borderRadius: 50,
    marginLeft: 12,
    borderColor: '#4EA8DE', //BLUE
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  removeButton: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingLeft: 220,
    paddingVertical: 16,
  },
  removeButtonImage: {
    width: 12,
    height: 14,
    top: -1,
  },
});