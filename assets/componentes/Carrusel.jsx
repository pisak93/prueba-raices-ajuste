import { View } from "react-native";
import { carrusel } from "./Stylesheet";

export default function Carrusel() {
  return (
    <View style={carrusel.container}>
      <View style={carrusel.carruselContainer}>
        <View style={carrusel.itemsRow}>
          <View style={carrusel.imagenVaciaGrande} />
          <View style={carrusel.imagenVaciaPequena} />
          <View style={carrusel.imagenVaciaPequena} />
        </View>
      </View>

      <View style={carrusel.pagination}>
        <View style={[carrusel.dot, carrusel.dotActive]} />
        <View style={carrusel.dot} />
        <View style={carrusel.dot} />
      </View>
    </View>
  );
}