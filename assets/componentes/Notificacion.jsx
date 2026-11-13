import { Pressable, Text, View } from "react-native";
import { notificacion } from "./Stylesheet";

function Notificacion({
  titulo = "Hora de tu aromática",
  mensaje = "Te recomendamos una manzanilla.",
  tiempo = "Hace 10 min",
  leida = false,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        notificacion.contenedor,
        leida && notificacion.leida,
      ]}
    >
      <View style={notificacion.fondoIcono}>
        <Text style={notificacion.icono}>☕</Text>
      </View>

      <View style={notificacion.contenido}>
        <View style={notificacion.encabezado}>
          <Text style={notificacion.titulo}>{titulo}</Text>
          {!leida && <View style={notificacion.punto} />}
        </View>

        <Text style={notificacion.mensaje}>{mensaje}</Text>
        <Text style={notificacion.tiempo}>{tiempo}</Text>
      </View>
    </Pressable>
  );
}

export default Notificacion;