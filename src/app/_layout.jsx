import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="agregar-cosecha" />
      <Stack.Screen name="aromaticas" />
      <Stack.Screen name="Batidos" />
      <Stack.Screen name="bienvenida" />
      <Stack.Screen name="huerto" />
      <Stack.Screen name="Juegos" />
      <Stack.Screen name="mis-cosechas" />
      <Stack.Screen name="perfil" />
      <Stack.Screen name="recetas" />
      <Stack.Screen name="remedios" />
    </Stack>
  
  )
}
