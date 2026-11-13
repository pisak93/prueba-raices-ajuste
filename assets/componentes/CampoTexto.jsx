import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { campoTexto, colores } from "./Stylesheet";

export default function CampoTexto({
  etiqueta,
  valor,
  onChangeText,
  placeholder,
  error,
  esContrasena = false,
  teclado = "default",
  autoCapitalize = "none",
  style,
}) {
  const [enfocado, setEnfocado] = useState(false);
  const [oculta, setOculta] = useState(esContrasena);
  const hayError = Boolean(error);

  return (
    <View style={[campoTexto.contenedor, style]}>
      <Text style={campoTexto.etiqueta}>{etiqueta}</Text>

      <View
        style={[
          campoTexto.fila,
          (hayError || enfocado || !!valor) && campoTexto.fondoBlanco,
          enfocado && campoTexto.enfocado,
          hayError && campoTexto.error,
        ]}
      >
        <TextInput
          value={valor}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colores.textoSecundarioEquipo}
          secureTextEntry={oculta}
          keyboardType={teclado}
          autoCapitalize={autoCapitalize}
          onFocus={() => setEnfocado(true)}
          onBlur={() => setEnfocado(false)}
          accessibilityLabel={etiqueta}
          style={campoTexto.input}
        />

        {esContrasena && (
          <Pressable
            onPress={() => setOculta(!oculta)}
            accessibilityLabel={
              oculta ? "Mostrar contraseña" : "Ocultar contraseña"
            }
            style={campoTexto.botonContrasena}
          >
            <Ionicons
              name={oculta ? "eye-outline" : "eye-off-outline"}
              size={26}
              color={colores.verdeEquipo}
            />
          </Pressable>
        )}
      </View>

      {hayError && (
        <View style={campoTexto.filaError}>
          <Ionicons
            name="warning-outline"
            size={18}
            color={colores.rojo}
          />
          <Text style={campoTexto.textoError}>{error}</Text>
        </View>
      )}
    </View>
  );
}