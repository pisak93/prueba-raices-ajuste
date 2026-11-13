import { Pressable, View } from "react-native";
import { interruptor } from "./Stylesheet";

function Interruptor({ valor = false, cambiarValor }) {
  function cambiar() {
    if (cambiarValor) {
      cambiarValor(!valor);
    }
  }

  return (
    <Pressable
      onPress={cambiar}
      style={interruptor.area}
      accessibilityRole="switch"
      accessibilityLabel="Activar avisos"
      accessibilityState={{ checked: valor }}
    >
      <View
        style={[
          interruptor.fondo,
          valor && interruptor.encendido,
        ]}
      >
        <View style={interruptor.circulo} />
      </View>
    </Pressable>
  );
}

export default Interruptor;