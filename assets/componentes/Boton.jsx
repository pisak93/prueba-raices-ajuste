import { Text, TouchableOpacity } from "react-native";
import { boton } from "../assets/Stylesheet";

export default function Boton({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={boton.boton}>
      <Text style={boton.texto}>{label}</Text>
    </TouchableOpacity>
  );
}