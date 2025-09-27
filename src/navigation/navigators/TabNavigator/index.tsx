import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NAV } from "@navigation/routes";
import { HomeStackNavigation } from "@navigation/stacks/HomeStackNavigation";
import { ProfileStackNavigation } from "@navigation/stacks/ProfileStackNavigation";

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
