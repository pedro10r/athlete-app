import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./RootNavigator";

export function RootNavigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
