import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealDetailScreen({ route }) {
  const id = route.params.mealId;
  const mealData = MEALS.find((meal) => meal.id === id);
  return (
    <View>
      <Text>{mealData.steps}</Text>
    </View>
  );
}
