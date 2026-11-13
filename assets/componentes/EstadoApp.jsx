import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { estadoApp, tiposEstado } from "./Stylesheet";

export default function EstadoApp({
  tipo = "exito",
  titulo,
  mensaje,
  textoBoton = "Continuar",
  onPress,
  textoEnlace,
  onEnlace,
}) {
  const t = tiposEstado[tipo] ?? tiposEstado.exito;

  return (
    <SafeAreaView
      style={[estadoApp.pantalla, { backgroundColor: t.fondo }]}
    >
      <View style={estadoApp.contenido}>
        <Ionicons name={t.icono} size={100} color={t.color} />

        <Text style={estadoApp.titulo}>{titulo}</Text>
        <Text style={estadoApp.mensaje}>{mensaje}</Text>

        <Pressable
          onPress={onPress}
          accessibilityRole="button"
          style={({ pressed }) => [
            estadoApp.boton,
            pressed && estadoApp.presionado,
          ]}
        >
          <Text style={estadoApp.textoBoton}>{textoBoton}</Text>
        </Pressable>

        {textoEnlace && (
          <Pressable onPress={onEnlace} style={estadoApp.enlace}>
            <Text style={estadoApp.textoEnlace}>
              {textoEnlace}
            </Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}