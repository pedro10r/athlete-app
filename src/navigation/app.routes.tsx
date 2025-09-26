import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./routes";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={Routes.HOME} component={Home} />
    </Navigator>
  );
}
