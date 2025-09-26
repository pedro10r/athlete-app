import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAV } from "../routes";
import { Home } from "../../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function HomeStackNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={NAV.HOME_STACK.HOME} component={Home} />
    </Navigator>
  );
}
