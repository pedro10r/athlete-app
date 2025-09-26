import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../../screens/Profile";
import { NAV } from "../routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function ProfileStackNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={NAV.PROFILE_STACK.PROFILE} component={Profile} />
    </Navigator>
  );
}
