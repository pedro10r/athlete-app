import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NAV } from "@navigation/routes";
import { TabNavigator } from "../TabNavigator";

const { Navigator, Screen } = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={NAV.ROOT.TABS} component={TabNavigator} />
    </Navigator>
  );
}
