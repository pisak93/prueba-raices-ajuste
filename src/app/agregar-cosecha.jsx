import { useState } from "react";
import { useRouter } from "expo-router";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBarSuperior from "../../assets/componentes/AppBarSuperior";

// Cosechas que ya existen en la huerta
const COSECHAS_EXISTENTES = [
  "hierbabuena",
  "manzanilla",
  "limoncillo",
  "limon",
  "mora",
  "banano",
];

// Opciones disponibles
const COSECHAS = [
  { id: "hierbabuena", nombre: "Hierbabuena", categoria: "Hierbas aromáticas", icono: "🌿" },
  { id: "manzanilla", nombre: "Manzanilla", categoria: "Hierbas aromáticas", icono: "🌼" },
  { id: "limoncillo", nombre: "Limoncillo", categoria: "Hierbas aromáticas", icono: "🌱" },
  { id: "limon", nombre: "Limón", categoria: "Frutas", icono: "🍋" },
  { id: "mora", nombre: "Mora", categoria: "Frutas", icono: "🫐" },
  { id: "banano", nombre: "Banano", categoria: "Frutas", icono: "🍌" },
  { id: "toronjil", nombre: "Toronjil", categoria: "Hierbas aromáticas", icono: "🌿" },
  { id: "romero", nombre: "Romero", categoria: "Hierbas aromáticas", icono: "🌱" },
  { id: "fresa", nombre: "Fresa", categoria: "Frutas", icono: "🍓" },
  { id: "tomate", nombre: "Tomate", categoria: "Verduras", icono: "🍅" },
];

export default function AgregarCosecha() {
  const router = useRouter();
  const [nuevas, setNuevas] = useState([]);

  function tocar(cosecha) {
    if (COSECHAS_EXISTENTES.includes(cosecha.id)) {
      Alert.alert(
        "Ya está en tu huerta",
        `${cosecha.nombre} ya hace parte de tus cosechas.`,
      );
      return;
    }

    setNuevas((lista) =>
      lista.includes(cosecha.id)
        ? lista.filter((id) => id !== cosecha.id)
        : [...lista, cosecha.id],
    );
  }

  function agregar() {
    if (nuevas.length === 0) return;

    const nombres = COSECHAS
      .filter((c) => nuevas.includes(c.id))
      .map((c) => c.nombre)
      .join(", ");

    Alert.alert(
      "¡Cosechas seleccionadas!",
      `Has seleccionado: ${nombres}`,
      [
        {
          text: "Aceptar",
          onPress: () => router.back(),
        },
      ],
    );
  }

  return (
    <SafeAreaView style={estilos.contenedor} edges={["top"]}>
      <AppBarSuperior
        tipo="volver"
        titulo="Agregar cosecha"
        onVolver={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >
        <Text style={estilos.explicacion}>
          Toca las cosechas que quieres agregar.
          Las que ya tienes aparecen en gris.
        </Text>

        {COSECHAS.map((cosecha) => {
          const existente = COSECHAS_EXISTENTES.includes(cosecha.id);
          const seleccionada = nuevas.includes(cosecha.id);

          return (
            <Pressable
              key={cosecha.id}
              onPress={() => tocar(cosecha)}
              style={[
                estilos.cosecha,
                existente && estilos.desactivada,
                seleccionada && estilos.seleccionada,
              ]}
            >
              <Text style={estilos.icono}>{cosecha.icono}</Text>

              <View style={estilos.info}>
                <Text style={estilos.nombre}>
                  {cosecha.nombre}
                </Text>
                <Text style={estilos.categoria}>
                  {cosecha.categoria}
                </Text>
              </View>

              <Text style={estilos.estado}>
                {existente ? "✓" : seleccionada ? "✓" : "+"}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={estilos.pie}>
        <Pressable
          onPress={agregar}
          disabled={nuevas.length === 0}
          style={[
            estilos.boton,
            nuevas.length === 0 && estilos.botonDesactivado,
          ]}
        >
          <Text style={estilos.textoBoton}>
            {nuevas.length === 0
              ? "Elige una cosecha"
              : `Agregar (${nuevas.length})`}
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
  },
  contenido: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  explicacion: {
    fontSize: 15,
    color: "#737c73",
    marginBottom: 20,
    lineHeight: 22,
  },
  cosecha: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E6E1D3",
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
  },
  desactivada: {
    backgroundColor: "#EAEAEA",
    opacity: 0.55,
  },
  seleccionada: {
    borderColor: "#3F7440",
    backgroundColor: "#E8F0DD",
  },
  icono: {
    fontSize: 28,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3C3C3C",
  },
  categoria: {
    fontSize: 13,
    color: "#737c73",
    marginTop: 3,
  },
  estado: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3F7440",
  },
  pie: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  boton: {
    height: 58,
    borderRadius: 20,
    backgroundColor: "#3F7440",
    justifyContent: "center",
    alignItems: "center",
  },
  botonDesactivado: {
    backgroundColor: "#D6D3C9",
  },
  textoBoton: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});