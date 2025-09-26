import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "@navigation/app.routes";

export function Navigation() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
