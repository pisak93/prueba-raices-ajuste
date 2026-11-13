import { Image, Pressable, Text, View } from "react-native";
import { receta } from "../Stylesheet";

function Receta({
  titulo = "Aromática de manzanilla",
  beneficio = "Digestión",
  tiempo = "10 min",
  imagen,
  faltante = "",
  onPress,
}) {
  let estado = "✓ Tienes todo";

  if (faltante) {
    estado = "Te falta: " + faltante;
  }

  return (
    <Pressable onPress={onPress} style={receta.contenedor}>
      <View style={receta.fondoImagen}>
        {imagen ? (
          <Image
            source={{ uri: imagen }}
            style={receta.imagen}
            resizeMode="cover"
          />
        ) : (
          <Text style={receta.icono}></Text>
        )}
      </View>

      <View style={receta.contenido}>
        <Text numberOfLines={2} style={receta.titulo}>
          {titulo}
        </Text>

        <Text style={receta.detalle}>
          {beneficio} · {tiempo}
        </Text>

        <View
          style={[
            receta.etiqueta,
            faltante !== "" && receta.etiquetaFaltante,
          ]}
        >
          <Text
            style={[
              receta.estado,
              faltante !== "" && receta.textoFaltante,
            ]}
          >
            {estado}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Receta;