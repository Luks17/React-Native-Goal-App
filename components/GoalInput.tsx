import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface Props {
  addGoalHandler: (goalInput: string) => void;
}

export default function GoalInput({ addGoalHandler }: Props) {
  const [goalInput, setGoalInput] = useState<string>("");

  function goalInputHandler(enteredText: string) {
    setGoalInput(enteredText);
  }

  function onAddGoalPress() {
    addGoalHandler(goalInput);
    setGoalInput("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={goalInput}
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add goal" onPress={onAddGoalPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
