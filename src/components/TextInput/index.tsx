import React from "react";
import {
  View,
  TextInput as RNTextInput,
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface TextInputProps<TFieldValues extends FieldValues>
  extends RNTextInputProps {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
}

export function TextInput<TFieldValues extends FieldValues>({
  control,
  name,
  ...textInputProps
}: TextInputProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <RNTextInput
            style={[styles.input, error && styles.inputError]}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...textInputProps}
          />

          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  inputError: {
    borderColor: "#dc3545",
  },
  errorText: {
    color: "#dc3545",
    marginTop: 4,
    marginLeft: 4,
    fontSize: 12,
  },
});
