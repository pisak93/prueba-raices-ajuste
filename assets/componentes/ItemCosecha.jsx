import { Image, Pressable, Text, View } from "react-native";
import iconoBasura from "../../assets/images/Basura.png";
import { itemCosecha } from "../Stylesheet";

export default function ItemCosecha({
  titulo = "Manzanilla",
  subtitulo = "Hierbas aromáticas",
  onEliminar,
}) {
  return (
    <View style={itemCosecha.contenedor}>
      <View style={itemCosecha.filaInfo}>
        <View style={itemCosecha.contenedorImagen} />

        <View style={itemCosecha.textosContainer}>
          <Text style={itemCosecha.titulo}>{titulo}</Text>
          <Text style={itemCosecha.subtitulo}>{subtitulo}</Text>
        </View>
      </View>

     
      <Pressable style={itemCosecha.botonEliminar} onPress={onEliminar}>
        <Image 
          source={iconoBasura} 
          style={{ width: 20, height: 20, resizeMode: "contain" }} 
        />
      </Pressable>
    </View>
  );
}