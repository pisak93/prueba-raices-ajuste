import { Pressable, Text } from "react-native";
import { filtro } from "../Stylesheet";

function Filtro({ texto = "Hierbas", activo = false, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[filtro.contenedor, activo && filtro.activo]}
      accessibilityRole="button"
      accessibilityState={{ selected: activo }}
    >
      <Text style={[filtro.texto, activo && filtro.textoActivo]}>
        {texto}
      </Text>
    </Pressable>
  );
}

export default Filtro;