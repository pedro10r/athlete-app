import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabNavigator } from "./TabNavigator";
import { NAV } from "./routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={NAV.ROOT.TABS} component={TabNavigator} />
    </Navigator>
  );
}
