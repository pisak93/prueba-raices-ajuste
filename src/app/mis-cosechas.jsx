import { useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBarSuperior from "../../assets/componentes/AppBarSuperior";

const COSECHAS = [
  {
    categoria: "Hierbas aromáticas",
    icono: "🌿",
    elementos: [
      "Hierbabuena",
      "Manzanilla",
      "Limoncillo",
    ],
  },
  {
    categoria: "Frutas",
    icono: "🍋",
    elementos: [
      "Limón",
      "Mora",
      "Banano",
    ],
  },
];

export default function MisCosechas() {
  const router = useRouter();

  const totalCosechas = COSECHAS.reduce(
    (total, categoria) => total + categoria.elementos.length,
    0,
  );

  return (
    <SafeAreaView style={estilos.contenedor} edges={["top"]}>
      <AppBarSuperior
        tipo="volver"
        titulo="Mis cosechas"
        onVolver={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >
        <Text style={estilos.subtitulo}>
          {totalCosechas} cosechas en tu huerta
        </Text>

        {COSECHAS.map((categoria) => (
          <View
            key={categoria.categoria}
            style={estilos.grupo}
          >
            <Text style={estilos.categoria}>
              {categoria.categoria}
            </Text>

            <View style={estilos.lista}>
              {categoria.elementos.map((nombre) => (
                <View
                  key={nombre}
                  style={estilos.chip}
                >
                  <Text style={estilos.icono}>
                    {categoria.icono}
                  </Text>

                  <Text style={estilos.nombre}>
                    {nombre}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <Pressable
          style={estilos.boton}
          onPress={() => router.replace("/huerta")}
        >
          <Text style={estilos.textoBoton}>
            ✏️  Editar mis cosechas
          </Text>
        </Pressable>

        <View style={estilos.separador} />

        <Pressable
          style={estilos.botonSecundario}
          onPress={() => router.push("/agregar-cosecha")}
        >
          <Text style={estilos.textoSecundario}>
            + Agregar cosecha
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#FFFCF5",
  },
  contenido: {
    padding: 20,
    paddingBottom: 35,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
    marginBottom: 25,
  },
  grupo: {
    marginBottom: 25,
  },
  categoria: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#3F7440",
    marginBottom: 12,
  },
  lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F0DD",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 8,
  },
  icono: {
    fontSize: 19,
  },
  nombre: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3C3C3C",
  },
  boton: {
    height: 58,
    backgroundColor: "#3F7440",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  textoBoton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  separador: {
    height: 1,
    backgroundColor: "#E6E1D3",
    marginVertical: 20,
  },
  botonSecundario: {
    height: 58,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#3F7440",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  textoSecundario: {
    color: "#3F7440",
    fontSize: 16,
    fontWeight: "bold",
  },
});