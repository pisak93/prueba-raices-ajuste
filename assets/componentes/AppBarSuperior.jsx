import { Image, Pressable, Text, View } from "react-native";
import iconoNotificacion from "../../assets/images/Notificaciones.png";
import { appBar } from "../Stylesheet";


function AppBarSuperior({
  tipo = "saludo",
  nombre = "Lara",
  titulo = "Crear cuenta",
  notificaciones = 0,
  paso = 1,
  total = 4,
  onVolver,
  onSalir,
  onNotificaciones,
}) {
  let porcentaje = 0;

  if (total > 0) {
    porcentaje = Math.min(100, Math.max(0, (paso / total) * 100));
  }

  return (
    <View style={appBar.contenedor}>
      {tipo === "saludo" && (
        <View style={appBar.fila}>
          <Text style={appBar.saludo}>Hola, {nombre}</Text>

          <Pressable
            onPress={onNotificaciones}
            style={appBar.botonNotificaciones}
            accessibilityLabel="Notificaciones"
          >
            <Image 
          source={iconoNotificacion} 
          style={{ width: 52, height: 52, resizeMode: "contain" }} 
        />

            {notificaciones > 0 && (
              <View style={appBar.contador}>
                <Text style={appBar.numero}>
                  {notificaciones}
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      )}

      {tipo === "volver" && (
        <View>
          <Pressable
            onPress={onVolver}
            style={appBar.botonVolver}
            accessibilityLabel="Volver"
          >
            <Text style={appBar.flecha}>←</Text>
          </Pressable>

          <Text style={appBar.titulo}>{titulo}</Text>
        </View>
      )}

      {tipo === "pasos" && (
        <View>
          <View style={appBar.fila}>
            <Pressable onPress={onSalir} style={appBar.botonSalir}>
              <Text style={appBar.salir}>× Salir</Text>
            </Pressable>

            <Text style={appBar.paso}>
              Paso {paso} de {total}
            </Text>
          </View>

          <View style={appBar.fondoProgreso}>
            <View
              style={[
                appBar.progreso,
                { width: porcentaje + "%" },
              ]}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default AppBarSuperior;