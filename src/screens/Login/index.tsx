import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { TextInput } from "@components/TextInput";
import { styles } from "./styles";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido").nonempty("O e-mail é obrigatório"),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function Login() {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login com:", data);
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

      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
