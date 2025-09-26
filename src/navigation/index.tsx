import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Navigation() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
