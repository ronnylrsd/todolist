import { View, Text, Image } from "react-native";
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
        <Text style={styles.title}>Welcome, Gabriel</Text>
      </View>
    </>
  );
}
