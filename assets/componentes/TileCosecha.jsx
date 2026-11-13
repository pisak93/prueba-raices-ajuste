import { Text, View } from "react-native";
import { tileCosecha } from "../Stylesheet";

export default function TileCosecha({ titulo }) {
  return (
    <View style={tileCosecha.card}>
      <View style={tileCosecha.imagenVacia} />

      <Text style={tileCosecha.titulo}>
        {titulo || "Hierbabuena"}
      </Text>
    </View>
  );
}
