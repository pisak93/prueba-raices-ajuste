
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Importación de componentes y estilos centralizados
import AppBarSuperior from "../../assets/componentes/AppBarSuperior";
import BarraNavegacion from "../../assets/componentes/BarraNavegacion";
import Receta from "../../assets/componentes/Receta";
import { remediosCaseros } from "../../assets/Stylesheet";

export default function RemediosScreen() {
  const [pestanaActiva, setPestanaActiva] = useState("Inicio");
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("Todos");

  const filtros = [
    { id: "Todos", label: "Todos" },
    { id: "Dormir", label: "🌙 Dormir" },
    { id: "Gripa", label: "🌡️ Gripa y tos" },
    { id: "Digestion", label: "🍽️ Digestión" },
  ];

  return (
    <SafeAreaView style={remediosCaseros.safeArea} edges={["top"]}>
      {/* AppBar Superior en modo volver */}
      <AppBarSuperior
          tipo=" "
          nombre=""
         notificaciones={null}
       />

      <ScrollView contentContainerStyle={remediosCaseros.container} showsVerticalScrollIndicator={false}>
        {/* Encabezado */}
        <View style={remediosCaseros.headerContainer}>
          <Text style={remediosCaseros.titulo}>Remedios caseros</Text>
          <Text style={remediosCaseros.subtitulo}>Para tu cuerpo: elige qué necesitas</Text>
        </View>

        {/* Chips de Filtro */}
        <View style={remediosCaseros.filtrosContainer}>
          {filtros.map((filtro) => {
            const activo = filtroSeleccionado === filtro.id;
            return (
              <Pressable
                key={filtro.id}
                style={[
                  remediosCaseros.chipFiltro,
                  activo && remediosCaseros.chipActivo,
                ]}
                onPress={() => setFiltroSeleccionado(filtro.id)}
              >
                <Text
                  style={[
                    remediosCaseros.textoChip,
                    activo && remediosCaseros.textoChipActivo,
                  ]}
                >
                  {filtro.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Lista de Recetas / Remedios */}
        <View style={remediosCaseros.listaRecetas}>
          <Receta
            titulo="Jarabe de limón, miel y jengibre"
            beneficio="Gripa y tos"
            tiempo="10 min"
            onPress={() => console.log("Ver remedio 1")}
          />

          <Receta
            titulo="Vapor de hierbabuena"
            beneficio="Nariz tapada"
            tiempo="10 min"
            onPress={() => console.log("Ver remedio 2")}
          />

          <Receta
            titulo="Aromática de toronjil"
            beneficio="Dormir mejor"
            tiempo="10 min"
            faltante="Toronjil"
            onPress={() => console.log("Ver remedio 3")}
          />

          <Receta
            titulo="Manzanilla tibia"
            beneficio="Digestión"
            tiempo="10 min"
            onPress={() => console.log("Ver remedio 4")}
          />
        </View>
      </ScrollView>

      {/* Barra de Navegación Inferior */}
      <BarraNavegacion activo={pestanaActiva} onChange={setPestanaActiva} />
    </SafeAreaView>
  );
}