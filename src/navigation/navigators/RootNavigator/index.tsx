import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "@navigation/types";
import { NAV } from "@navigation/routes";
import { TabNavigator } from "../TabNavigator";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={NAV.ROOT.TABS} component={TabNavigator} />
    </Navigator>
  );
}
