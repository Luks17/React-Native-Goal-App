import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  deleteGoalHandler: (item: string) => void;
  goal: string;
}

export default function GoalItem({ deleteGoalHandler, goal }: Props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => deleteGoalHandler(goal)}
      >
        <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 4,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
