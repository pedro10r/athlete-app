import React, { useState, useEffect } from "react";
import { Button, View, Text, ActivityIndicator, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as LocalAuthentication from "expo-local-authentication";

import { TextInput } from "@components/TextInput";
import { useAuthStore } from "@store/authStore";
import { styles } from "./styles";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido").nonempty("O e-mail é obrigatório"),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  const login = useAuthStore((state) => state.login);
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  // 1. Verifica suporte a Hardware ao montar a tela
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const fakeResponse = {
        token: "token-jwt-manual-123",
        user: {
          name: "Usuário Teste",
          email: data.email,
        },
      };

      login(fakeResponse.user, fakeResponse.token);
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível fazer login.");
    } finally {
      setIsLoading(false);
    }
  };

  // 3. Função de Login com Biometria
  const handleBiometricLogin = async () => {
    try {
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!isEnrolled) {
        return Alert.alert(
          "Ops",
          "Nenhuma biometria cadastrada neste aparelho."
        );
      }

      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Acesse com sua biometria",
        fallbackLabel: "Usar senha",
      });

      if (auth.success) {
        Alert.alert("Sucesso", "Biometria confirmada!");

        login(
          {
            name: "Usuário Biometria",
            email: "biometria@teste.com",
          },
          "token-jwt-biometrico-999"
        );
      }
    } catch (error) {
      Alert.alert("Erro", "Falha na autenticação biométrica");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 32 }}>Login</Text>

      <TextInput
        control={control}
        name="email"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        control={control}
        name="password"
        placeholder="Senha"
        secureTextEntry
      />

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={{ width: "100%", gap: 10, alignItems: "center" }}>
          <Button title="Entrar com senha" onPress={handleSubmit(onSubmit)} />

          <Text>Ou</Text>

          {/* Só mostra o botão se tiver hardware compatível */}
          {isBiometricSupported && (
            <Button
              title="Entrar com Biometria 🆔"
              onPress={handleBiometricLogin}
              color={"green"}
            />
          )}
        </View>
      )}
    </View>
  );
}
