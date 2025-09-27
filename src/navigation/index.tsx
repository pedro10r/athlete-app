import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./navigators/RootNavigator";

export function RootNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
