import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabParamList } from "@navigation/types";
import { NAV } from "@navigation/routes";
import { HomeStackNavigation } from "@navigation/stacks/HomeStackNavigation";
import { ProfileStackNavigation } from "@navigation/stacks/ProfileStackNavigation";

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>();

export function TabNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={NAV.TABS.HOME_STACK}
        component={HomeStackNavigation}
        options={{ title: "Home" }}
      />
      <Screen
        name={NAV.TABS.PROFILE_STACK}
        component={ProfileStackNavigation}
        options={{ title: "Profile" }}
      />
    </Navigator>
  );
}
