import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("ItemListCategories", {category})}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#c9b977",
    borderRadius: 10,
    color:"#ffffff"
  },
  text: {
    fontFamily: "InterBold",
    fontSize: 20,
  },
});
