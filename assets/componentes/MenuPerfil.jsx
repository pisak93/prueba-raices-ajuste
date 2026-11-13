import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { colores, menuPerfil } from "./Stylesheet";

export default function MenuPerfil({
  icono,
  texto,
  onPress,
  destructivo = false,
  style,
}) {
  const colorPrincipal = destructivo
    ? colores.rojo
    : colores.verdeEquipo;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        menuPerfil.contenedor,
        pressed && menuPerfil.presionado,
        style,
      ]}
    >
      <View
        style={[
          menuPerfil.circulo,
          destructivo && menuPerfil.circuloPeligro,
        ]}
      >
        <Ionicons name={icono} size={22} color={colorPrincipal} />
      </View>

      <Text
        style={[
          menuPerfil.texto,
          destructivo && menuPerfil.textoPeligro,
        ]}
      >
        {texto}
      </Text>

      {!destructivo && (
        <Ionicons
          name="chevron-forward"
          size={22}
          color={colores.textoSecundarioEquipo}
        />
      )}
    </Pressable>
  );
}