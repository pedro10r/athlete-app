import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProfileStackParamList } from "@navigation/types";
import { NAV } from "@navigation/routes";
import { Profile } from "@screens/Profile";

const { Navigator, Screen } =
  createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStackNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={NAV.PROFILE_STACK.PROFILE} component={Profile} />
    </Navigator>
  );
}
