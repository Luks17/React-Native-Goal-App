import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

interface Props {
  addGoalHandler: (goalInput: string) => void;
  closeModal: () => void;
  isModalVisible: boolean;
}

export default function GoalInput({
  addGoalHandler,
  closeModal,
  isModalVisible,
}: Props) {
  const [goalInput, setGoalInput] = useState<string>("");

  function goalInputHandler(enteredText: string) {
    setGoalInput(enteredText);
  }

  function onAddGoalPress() {
    addGoalHandler(goalInput);
    setGoalInput("");
  }

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.closeBtnContainer}>
          <Button title="Cancel" onPress={closeModal} color="#f31282" />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/goal.png")}
            style={styles.imgStyling}
          />
          <TextInput
            value={goalInput}
            style={styles.textInput}
            placeholder="Your course goal!"
            onChangeText={goalInputHandler}
          />
          <Button title="Add goal" onPress={onAddGoalPress} color="#b180f0" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  closeBtnContainer: {
    flex: 1,
    justifyContent: "center",
    width: "20%",
  },
  inputContainer: {
    flex: 7,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    rowGap: 10,
  },
  imgStyling: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "60%",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 3,
    marginRight: 8,
    padding: 8,
  },
});
