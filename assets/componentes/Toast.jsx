import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { colores, toast } from "./Stylesheet";

export default function Toast({
  visible,
  mensaje,
  icono = "checkmark",
  colorIcono = colores.blanco,
  textoAccion,
  onAccion,
  onCerrar,
  duracion = 4000,
  bottom = 100,
}) {
  const opacidad = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!visible) return;

    Animated.timing(opacidad, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    const temporizador = setTimeout(() => {
      Animated.timing(opacidad, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => onCerrar && onCerrar());
    }, duracion);

    return () => clearTimeout(temporizador);
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        toast.posicion,
        { bottom, opacity: opacidad },
      ]}
    >
      <View style={toast.contenedor}>
        <Ionicons name={icono} size={22} color={colorIcono} />

        <Text style={toast.mensaje}>{mensaje}</Text>

        {textoAccion && (
          <Pressable onPress={onAccion} style={toast.boton}>
            <Text style={toast.accion}>{textoAccion}</Text>
          </Pressable>
        )}
      </View>
    </Animated.View>
  );
}