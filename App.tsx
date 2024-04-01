import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState<string[]>([]);

  function addGoalHandler(goalInput: string) {
    setGoals((oldCourses) => [...oldCourses, goalInput]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(_, index) => index.toString()}
          renderItem={(goalData) => <GoalItem goal={goalData.item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 6,
  },
});
