import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

type Props = {
  name: string;
  onChecked: () => void;
};

export function Task({ name, onChecked }: Props) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.checkedButton} onPress={onChecked}>
        </TouchableOpacity>

        <Text style={styles.name}>{name}sos</Text>

        <TouchableOpacity style={styles.removeButton} >
        <Image
                style={styles.removeButtonImage}
                source={require("../../assets/trash.png")}
              />
        </TouchableOpacity>
      </View>
    );
  }