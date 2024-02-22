import { Text, View, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Categories from "../Components/Categories";

function Inicio({navigation}) {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation}/>
    </View>
  );
}

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor:"#19191a",
  

  },
});
