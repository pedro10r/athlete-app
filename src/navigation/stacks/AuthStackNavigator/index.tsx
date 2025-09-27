import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "@navigation/types";
import { NAV } from "@navigation/routes";

import { Login } from "@screens/Login";
import { Register } from "@screens/Register";

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={NAV.AUTH_STACK.LOGIN} component={Login} />
      <Screen name={NAV.AUTH_STACK.REGISTER} component={Register} />
    </Navigator>
  );
}
