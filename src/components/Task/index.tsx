import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

type Props = {
  name: string;
  onConclued: () => void;
  onRemove: () => void;
};

export function Task({ name, onConclued, onRemove }: Props) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.checkedButton} onPress={onConclued}>
        </TouchableOpacity>

        <Text style={styles.name}>{name}</Text>

        <TouchableOpacity style={styles.removeButton} onPress={onRemove} >
        <Image
                style={styles.removeButtonImage}
                source={require("../../assets/trash.png")}
              />
        </TouchableOpacity>
      </View>
    );
  }