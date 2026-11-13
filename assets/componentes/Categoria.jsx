import { Image, Pressable, Text, View } from "react-native";
import { categoria } from "../Stylesheet";

export default function Categoria({ titulo, subtitulo, backgroundColor, icono, onPress }) {
  return (
    <Pressable 
      style={[categoria.card, backgroundColor && { backgroundColor }]} 
      onPress={onPress}
    >
      <View style={categoria.imagenVacia}>
        {icono && (
          <Image 
            source={icono} 
            style={{ width: 24, height: 24, resizeMode: "contain" }} 
          />
        )}
      </View>
      
      <View>
        <Text style={categoria.titulo}>{titulo}</Text>
        <Text style={categoria.subtitulo}>{subtitulo}</Text>
      </View>
    </Pressable>
  );
}