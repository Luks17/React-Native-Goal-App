import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState<string[]>([]);
  function addGoalHandler(goalInput: string) {
    setGoals((oldCourses) => [...oldCourses, goalInput]);
    closeModal();
  }

  function deleteGoalHandler(itemToDelete: string) {
    setGoals((oldCourses) =>
      oldCourses.filter((goal) => goal !== itemToDelete),
    );
  }

  function handleAddNewGoalBtnPress() {
    setIsModalVisible(true);
  }

  function closeModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="inverted" />
      <View style={styles.appContainer}>
        <View style={styles.addGoalContainer}>
          <Button
            title="Add New Goal"
            color="#a065ec"
            onPress={handleAddNewGoalBtnPress}
          />
        </View>
        <GoalInput
          addGoalHandler={addGoalHandler}
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(_, index) => index.toString()}
            renderItem={(goalData) => (
              <GoalItem
                deleteGoalHandler={deleteGoalHandler}
                goal={goalData.item}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  addGoalContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  goalsContainer: {
    flex: 6,
  },
});
