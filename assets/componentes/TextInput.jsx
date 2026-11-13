import { TextInput as Entrada } from "react-native";
import { colores, entradaTexto } from "../Stylesheet";

export default function TextInput({
  placeholder,
  value,
  onChangeText,
}) {
  return (
    <Entrada
      style={entradaTexto.input}
      placeholder={placeholder || "Buscar receta o planta"}
      placeholderTextColor={colores.placeholder || "#8c968d"}
      value={value}
      onChangeText={onChangeText}
    />
  );
}