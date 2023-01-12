import { Dispatch, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

type Props = {
  name: string;
  setCount: Dispatch<React.SetStateAction<number>>;
  onRemove: () => void;
};

export function Task({ name, setCount, onRemove }: Props) {
    const [isConclued, setIsConclued] = useState(false);

    function handleConcluedTask(command: boolean) {
    if (command) {
      setIsConclued(true);
      setCount((prevState) => prevState + 1);
    } else {
      setIsConclued(false);
      setCount((prevState) => prevState - 1);
    }
  };

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => handleConcluedTask(!isConclued)}>
          <Image style={styles.buttonImage} source={isConclued ? require("../../assets/checkedButton.png") : require("../../assets/uncheckedButton.png")} />
        </TouchableOpacity>

        <Text style={isConclued ? styles.checkedName : styles.uncheckedName}>{name}</Text>

        <TouchableOpacity style={styles.removeButton} onPress={onRemove} >
        <Image
                style={styles.removeButtonImage}
                source={require("../../assets/trash.png")}
              />
        </TouchableOpacity>
      </View>
    );
  }