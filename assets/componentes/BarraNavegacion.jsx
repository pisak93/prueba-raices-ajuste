import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { navegacion } from "../Stylesheet";

import iconoHuerta from "../../assets/images/IconoHuerta.png";
import iconoInicio from "../../assets/images/IconoInicio.png";
import iconoPerfil from "../../assets/images/IconoPerfil.png";
import iconoRecetas from "../../assets/images/IconoRecetas.png";

const opciones = [
  { nombre: "Inicio", icono: iconoInicio, ruta: "/" },
  { nombre: "Mi huerta", icono: iconoHuerta, ruta: "/huerta" },
  { nombre: "Recetas", icono: iconoRecetas, ruta: "/recetas" },
  { nombre: "Comunidad", icono: "👤", ruta: "/perfil" },
  { nombre: "Perfil", icono: iconoPerfil, ruta: "/perfil" },
];

export default function BarraNavegacion({ activo }) {
  const router = useRouter();

  return (
    <View style={navegacion.contenedor}>
      {opciones.map((opcion) => {
        const seleccionada = activo === opcion.nombre;

        return (
          <Pressable
            key={opcion.nombre}
            style={navegacion.opcion}
            onPress={() => router.push(opcion.ruta)}
          >
            <View
              style={[
                navegacion.fondoIcono,
                seleccionada && navegacion.fondoActivo,
              ]}
            >
              {/* Evaluamos si el icono es texto (emoji) o una imagen local */}
              {typeof opcion.icono === "string" ? (
                <Text style={navegacion.icono}>{opcion.icono}</Text>
              ) : (
                <Image
                  source={opcion.icono}
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                />
              )}
            </View>

            <Text
              style={[
                navegacion.texto,
                seleccionada && navegacion.textoActivo,
              ]}
            >
              {opcion.nombre}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}