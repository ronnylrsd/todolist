import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <>
      <View style={styles.header}>
        <Image style={styles.logoImage} source={require("../../assets/rocket.png")} />
        <Text style={styles.logoTo}>to</Text>
        <Text style={styles.logoDo}>do</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.form}>
        <TextInput 
        style={styles.input} placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080" //GRAY300 
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}><Image style={styles.logoImage} source={require("../../assets/addButtonSign.png")} /></Text>
        </TouchableOpacity>
      </View>
        
      </View>
    </>
  );
}
