import { useRouter } from "expo-router";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppBarSuperior from "../../assets/componentes/AppBarSuperior";
import { perfil } from "../../assets/Stylesheet";

export default function Perfil() {
  const router = useRouter();

  const opciones = [
    {
      icono: "✏️",
      texto: "Editar mis datos",
      accion: () =>
        Alert.alert("Próximamente", "Esta opción estará disponible próximamente."),
    },
    {
      icono: "🌿",
      texto: "Mis cosechas",
      accion: () => router.push("/mis-cosechas"),
    },
   {
  icono: "♡",
  texto: "Mis recetas guardadas",
  accion: () =>
    router.push({
      pathname: "/recetas",
      params: { filtro: "Guardadas" },
    }),
},
    {
      icono: "👥",
      texto: "Comunidad",
      accion: () =>
        Alert.alert("Próximamente", "Esta opción estará disponible próximamente."),
    },
    {
      icono: "Aa",
      texto: "Tamaño de letra",
      accion: () => router.push("/tamano-letra"),
    },
    {
      icono: "❔",
      texto: "Ayuda",
      accion: () =>
        Alert.alert("Próximamente", "Esta opción estará disponible próximamente."),
    },
  ];

  function salir() {
    Alert.alert(
      "¿Cerrar sesión?",
      "Podrás volver a entrar con tu correo y contraseña.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sí, cerrar sesión",
          onPress: () => router.replace("/bienvenida"),
        },
      ],
    );
  }

  return (
    <SafeAreaView style={perfil.contenedor} edges={["top"]}>
      <AppBarSuperior
        tipo="titulo" 
        titulo="Mi perfil"
      />

      <ScrollView
        contentContainerStyle={perfil.contenido}
        showsVerticalScrollIndicator={false}
      >
        <View style={perfil.filaPerfil}>
          <View style={perfil.foto}>
            <Text style={perfil.inicial}>L</Text>
          </View>

          <View style={perfil.datos}>
            <Text style={perfil.nombre}>Lara</Text>
            <Text style={perfil.correo}>
              usuario@ejemplo.com
            </Text>
          </View>
        </View>

        <View style={perfil.menu}>
          {opciones.map((opcion, index) => (
            <Pressable
              key={index}
              style={perfil.opcion}
              onPress={opcion.accion}
            >
              <View style={perfil.iconoCirculo}>
                <Text style={perfil.icono}>
                  {opcion.icono}
                </Text>
              </View>

              <Text style={perfil.textoOpcion}>
                {opcion.texto}
              </Text>

              <Text style={perfil.flecha}>›</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          style={perfil.cerrarSesion}
          onPress={salir}
        >
          <Text style={perfil.iconoCerrar}>↪</Text>
          <Text style={perfil.textoCerrar}>
            Cerrar sesión
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

