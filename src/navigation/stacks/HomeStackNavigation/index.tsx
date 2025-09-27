import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeStackParamList } from "@navigation/types";
import { NAV } from "@navigation/routes";

import { Home } from "@screens/Home";

const { Navigator, Screen } = createNativeStackNavigator<HomeStackParamList>();

export function HomeStackNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={NAV.HOME_STACK.HOME} component={Home} />
    </Navigator>
  );
}
