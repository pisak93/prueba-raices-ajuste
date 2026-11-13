import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBarSuperior from "../../assets/componentes/AppBarSuperior";
import BarraNavegacion from "../../assets/componentes/BarraNavegacion";
import Categoria from "../../assets/componentes/Categoria";
import TextInput from "../../assets/componentes/TextInput";
import { inicio } from "../../assets/Stylesheet";

import IconoAromaticas from "../../assets/images/IconoAromaticas.png";
import IconoBatidos from "../../assets/images/IconoBatidos.png";
import IconoJugos from "../../assets/images/IconoJugos.png";
import IconoRemedios from "../../assets/images/IconoRemedios.png";


export default function Index() {
  const router = useRouter();
  const [busqueda, setBusqueda] = useState("");

  function buscar() {
    router.push({
      pathname: "/recetas",
      params: { q: busqueda.trim() },
    });
  }

  return (
    <SafeAreaView style={inicio.safeArea} edges={["top"]}>
      <AppBarSuperior
        tipo="saludo"
        nombre="Lara"
        notificaciones={2}
        onNotificaciones={() => console.log("Ver notificaciones")}
      />

      <ScrollView
        contentContainerStyle={inicio.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={inicio.searchContainer}>
          <TextInput
            placeholder="Buscar receta o planta"
            value={busqueda}
            onChangeText={setBusqueda}
            onSubmitEditing={buscar}
          />
        </View>

        <Text style={inicio.seccionTitulo}>¿Qué quieres preparar hoy?</Text>

        <View style={inicio.gridContainer}>
          <Categoria
            titulo="Aromáticas"
            subtitulo="Bebidas calientes"
            backgroundColor="#c8e6c9"
            icono={IconoAromaticas}
            onPress={() => router.push("/aromaticas")}
          />

          <Categoria
            titulo="Batidos"
            subtitulo="Licuados con fruta"
            backgroundColor="#f8bbd0"
            icono={IconoBatidos}
            onPress={() => router.push("/Batidos")}
          />

          <Categoria
            titulo="Remedios caseros"
            subtitulo="Para tu cuerpo"
            backgroundColor="#ffe0b2"
            icono={IconoRemedios}
            onPress={() => router.push("/remedios")}
          />

          <Categoria
            titulo="Jugos naturales"
            subtitulo="Frescos y frutales"
            backgroundColor="#b3e5fc"
            icono={IconoJugos}
            onPress={() => router.push("/Jugos")}
          />
        </View>

        <View style={inicio.cosechaCard}>
          <View style={inicio.cosechaFila}>
            <View style={inicio.imagenCosechaVacia} />
            <Text style={inicio.cosechaTexto}>Tienes 9 cosechas</Text>
          </View>
          <Text style={inicio.cosechaVer}>Ver</Text>
        </View>
      </ScrollView>

      <BarraNavegacion activo="Inicio" />
    </SafeAreaView>
  );
}