import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, Text, View } from "react-native";
import { colores, lightbox } from "./Stylesheet";

export default function Lightbox({
  visible,
  icono = "trash-outline",
  titulo,
  mensaje,
  textoConfirmar = "Sí, continuar",
  textoCancelar = "Cancelar",
  onConfirmar,
  onCancelar,
}) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancelar}
    >
      <View style={lightbox.fondo}>
        <View style={lightbox.tarjeta}>
          <View style={lightbox.fondoIcono}>
            <Ionicons
              name={icono}
              size={34}
              color={colores.rojo}
            />
          </View>

          <Text style={lightbox.titulo}>{titulo}</Text>

          {mensaje ? (
            <Text style={lightbox.mensaje}>{mensaje}</Text>
          ) : null}

          <Pressable
            onPress={onConfirmar}
            accessibilityRole="button"
            style={({ pressed }) => [
              lightbox.confirmar,
              pressed && lightbox.presionado,
            ]}
          >
            <Text style={lightbox.textoConfirmar}>
              {textoConfirmar}
            </Text>
          </Pressable>

          <Pressable
            onPress={onCancelar}
            accessibilityRole="button"
            style={({ pressed }) => [
              lightbox.cancelar,
              pressed && lightbox.presionado,
            ]}
          >
            <Text style={lightbox.textoCancelar}>
              {textoCancelar}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}