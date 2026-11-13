import { useState } from "react";
import { Stack } from "expo-router";
// 1. Quitamos ScrollView e importamos FlatList
import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Receta from "./Receta";
import Filtro from "./Filtro";
import TextInput from "./TextInput";
import BarraNavegacion from "./BarraNavegacion";
import { explorarRecetas, remediosCaseros } from "../Stylesheet";

const recetas = [
  {
    titulo: "Aromática de manzanilla y hierbabuena",
    categoria: "Aromáticas",
    beneficio: "Digestión",
    tiempo: "10 min",
    guardada: true,
  },
  {
    titulo: "Jarabe de limón, miel y jengibre",
    categoria: "Remedios",
    beneficio: "Tos",
    tiempo: "10 min",
  },
  {
    titulo: "Batido verde de espinaca y pepino",
    categoria: "Batidos",
    beneficio: "Energía",
    tiempo: "5 min",
  },
  {
    titulo: "Jugo de mora",
    categoria: "Jugos",
    beneficio: "Defensas",
    tiempo: "5 min",
    guardada: true,
  },
  {
    titulo: "Aromática de toronjil",
    categoria: "Aromáticas",
    beneficio: "Dormir",
    tiempo: "10 min",
    faltante: "Toronjil",
  },
  {
    titulo: "Batido de banano y mora",
    categoria: "Batidos",
    beneficio: "Defensas",
    tiempo: "5 min",
  },
  {
    titulo: "Batido de fresa y banano",
    categoria: "Batidos",
    beneficio: "Energía",
    tiempo: "5 min",
    faltante: "Fresa",
  },
  {
    titulo: "Batido de mango y jengibre",
    categoria: "Batidos",
    beneficio: "Digestión",
    tiempo: "5 min",
    faltante: "Mango",
  },
  {
    titulo: "Limonada de hierbabuena",
    categoria: "Jugos",
    beneficio: "Refresca",
    tiempo: "5 min",
    ingredientes: "limón",
  },
  {
    titulo: "Jugo de pepino y limón",
    categoria: "Jugos",
    beneficio: "Hidrata",
    tiempo: "5 min",
  },
  {
    titulo: "Jugo de naranja y zanahoria",
    categoria: "Jugos",
    beneficio: "Vista y defensas",
    tiempo: "5 min",
    faltante: "Naranja",
  },
  {
    titulo: "Limoncillo con jengibre",
    categoria: "Aromáticas",
    beneficio: "Gripa",
    tiempo: "15 min",
  },
  {
    titulo: "Hierbabuena con limón",
    categoria: "Aromáticas",
    beneficio: "Refrescante",
    tiempo: "10 min",
  },
  {
    titulo: "Té de romero",
    categoria: "Aromáticas",
    beneficio: "Circulación",
    tiempo: "10 min",
  },
  {
    titulo: "Vapor de hierbabuena",
    categoria: "Remedios",
    beneficio: "Nariz tapada",
    tiempo: "10 min",
  },
  {
    titulo: "Manzanilla tibia",
    categoria: "Remedios",
    beneficio: "Digestión",
    tiempo: "10 min",
  },
];

function normalizar(texto) {
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function ExplorarRecetas({
  titulo,
  subtitulo,
  categoria,
  busquedaInicial = "",
  filtroInicial = "Todas",
}) {
  const [busqueda, setBusqueda] = useState(busquedaInicial);
  const [filtro, setFiltro] = useState(filtroInicial);

  const esCatalogo = !categoria;
  const consulta = normalizar(busqueda);

  const visibles = recetas.filter((item) => {
    if (categoria && item.categoria !== categoria) return false;
    if (filtro === "Guardadas" && !item.guardada) return false;
    if (filtro === "Aromáticas" && item.categoria !== "Aromáticas") return false;

    const texto = [
      item.titulo,
      item.categoria,
      item.beneficio,
      item.ingredientes || "",
    ].join(" ");

    return normalizar(texto).includes(consulta);
  });

  function mostrarTodas() {
    setBusqueda("");
    setFiltro("Todas");
  }

  return (
    <SafeAreaView style={explorarRecetas.safeArea} edges={["bottom"]}>
      <Stack.Screen options={{ title: titulo }} />

      <FlatList
        contentContainerStyle={explorarRecetas.container}
        keyboardShouldPersistTaps="handled"
        data={visibles}
        keyExtractor={(item) => item.titulo}
        /* ListHeaderComponent reemplaza todo lo que iba antes de la lista de recetas */
        ListHeaderComponent={
          <>
            <View style={explorarRecetas.headerContainer}>
              <Text style={explorarRecetas.titulo}>{titulo}</Text>
              <Text style={explorarRecetas.subtitulo}>{subtitulo}</Text>
            </View>

            {esCatalogo && (
              <View style={explorarRecetas.headerContainer}>
                <TextInput
                  placeholder="Buscar receta, planta o malestar"
                  value={busqueda}
                  onChangeText={setBusqueda}
                />

                <View style={remediosCaseros.filtrosContainer}>
                  {/* 2. Filtros creados manualmente sin usar .map */}
                  <Filtro
                    texto="Todas"
                    activo={filtro === "Todas"}
                    onPress={() => setFiltro("Todas")}
                  />
                  <Filtro
                    texto="Guardadas"
                    activo={filtro === "Guardadas"}
                    onPress={() => setFiltro("Guardadas")}
                  />
                  <Filtro
                    texto="Aromáticas"
                    activo={filtro === "Aromáticas"}
                    onPress={() => setFiltro("Aromáticas")}
                  />
                </View>
              </View>
            )}

            {consulta !== "" && visibles.length > 0 && (
              <View style={explorarRecetas.listaRecetas}>
                <Text style={explorarRecetas.subtitulo}>
                  {visibles.length} {visibles.length === 1 ? "resultado" : "resultados"}
                  {" para “"}
                  {busqueda.trim()}
                  {"”"}
                </Text>
              </View>
            )}
          </>
        }
        /* renderItem reemplaza la función del .map */
        renderItem={({ item }) => (
          <View style={explorarRecetas.listaRecetas}>
            <Receta
              titulo={item.titulo}
              // 3. Reemplazamos los template literals (${}) por la suma de textos con +
              beneficio={
                esCatalogo
                  ? item.categoria + " · " + item.beneficio
                  : item.beneficio
              }
              tiempo={item.tiempo}
              faltante={item.faltante}
            />
          </View>
        )}
        /* ListEmptyComponent reemplaza tu validación de "visibles.length === 0" */
        ListEmptyComponent={
          <View style={explorarRecetas.listaRecetas}>
            <Text style={explorarRecetas.titulo}>No encontramos recetas</Text>
            <Text style={explorarRecetas.subtitulo}>
              Prueba con una planta o fruta de tu huerta, como hierbabuena o limón.
            </Text>
            <Filtro texto="Ver todas las recetas" onPress={mostrarTodas} />
          </View>
        }
      />

      <BarraNavegacion activo="Recetas" />
    </SafeAreaView>
  );
}