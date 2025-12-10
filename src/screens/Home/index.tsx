import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { useAuthStore } from "@store/authStore";

export function Home() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.text}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}
