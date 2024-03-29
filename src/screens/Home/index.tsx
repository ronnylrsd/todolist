import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Task } from "../../components/Task";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [concludedTasksCount, setConcludedTasksCount] = useState(0);

  function handleAddNewTask() {
    if (tasks.includes(taskName)) {
      return Alert.alert(
        "Tarefa já cadastrada",
        "Você não pode cadastrar uma tarefa com o mesmo nome"
      );
    }
    setTasks((prevState) => [...prevState, taskName]);
    setTaskName("");
  }

  function handleRemoveTask(name: string) {
    setTasks((prevState) => prevState.filter((task) => task !== name));
  }

  function handleRemoveSelectedTask(name: string) {
    Alert.alert("Remover", `Remover a tarefa ${name}?`, [
      {
        text: "Sim",
        onPress: () => handleRemoveTask(name),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/rocket.png")}
        />
        <Text style={styles.logoTo}>to</Text>
        <Text style={styles.logoDo}>do</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080" //GRAY300
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
            <Text style={styles.buttonText}>
              <Image
                style={styles.logoImage}
                source={require("../../assets/addButtonSign.png")}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createdConcludedTasks}>
          <Text style={styles.createdTasksText}>Tarefas criadas</Text>
          <Text style={styles.createdTasksNumber}>{tasks.length}</Text>
          <Text style={styles.concludedTasksText}>Tarefas concluídas</Text>
          <Text style={styles.concludedTasksNumber}>{concludedTasksCount}</Text>
        </View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              key={item}
              name={item}
              setCount={setConcludedTasksCount}
              onRemove={() => handleRemoveSelectedTask(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyTasks}>
              <Image
                style={styles.clipboardImage}
                source={require("../../assets/clipboard.png")}
              />
              <Text style={styles.emptyTasksTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyTasksText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}
