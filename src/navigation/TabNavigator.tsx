import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NAV } from "./routes";
import { ProfileStackNavigation } from "./stacks/ProfileStackNavigation";
import { HomeStackNavigation } from "./stacks/HomeStackNavigation";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={NAV.TABS.HOME_STACK} component={HomeStackNavigation} />
      <Screen
        name={NAV.TABS.PROFILE_STACK}
        component={ProfileStackNavigation}
      />
    </Navigator>
  );
}
