import { StyleSheet, Text, View } from "react-native";

export default function GoalItem({ goal }: { goal: string }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
