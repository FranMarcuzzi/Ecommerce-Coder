import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Inicio from "../Screens/Inicio"
import ItemDetail from "../Screens/ItemDetail";
import ItemListCategories from "../Screens/ItemListCategories";
import Header from "../Components/Header";

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={({ route }) => ({
          header: () => {
            return (
              <Header
                title={
                  route.name === "Inicio"
                    ? "Categorias"
                    : route.name === "ItemListCategories"
                    ? route.params.category
                    : "Detalle"
                }
              />
            );
          },
        })}
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
