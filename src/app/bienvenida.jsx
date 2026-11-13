import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Bienvenida() {
  const router = useRouter();

  return (
    <SafeAreaView style={estilos.contenedor}>
      <View style={estilos.logoZona}>
        <Text style={estilos.icono}>🌱</Text>
        <Text style={estilos.marca}>Raíces</Text>
        <Text style={estilos.lema}>
          Recetas naturales de tu huerta
        </Text>
      </View>

      <View style={estilos.botones}>
        <Pressable
          style={estilos.boton}
          onPress={() => router.replace("/")}
        >
          <Text style={estilos.textoBoton}>Comenzar</Text>
        </Pressable>

        <Pressable
          onPress={() =>
            alert("La pantalla de inicio de sesión estará disponible próximamente.")
          }
          style={estilos.enlace}
        >
          <Text style={estilos.textoEnlace}>
            Ya tengo una cuenta
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FFFCF5",
    justifyContent: "space-between",
    padding: 25,
  },
  logoZona: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icono: {
    fontSize: 80,
    marginBottom: 15,
  },
  marca: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#3F7440",
  },
  lema: {
    fontSize: 16,
    color: "#737c73",
    marginTop: 10,
  },
  botones: {
    marginBottom: 35,
  },
  boton: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "#3F7440",
    justifyContent: "center",
    alignItems: "center",
  },
  textoBoton: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  enlace: {
    alignItems: "center",
    padding: 18,
  },
  textoEnlace: {
    color: "#3F7440",
    fontSize: 16,
    fontWeight: "600",
  },
});