import { StyleSheet } from "react-native";
//COLORES
export const colores = {
  fondo: "#FFFCF5",
  blanco: "#FFFFFF",

  Primario: "#3F7440",
  PrimarioClaro: "#E8F0DD",

  texto: "#3C3C3C",

  borde: "#E6E1D3",
  bordePrimario: "#3F7440",
  bordeInput: "#b8c2b9",

  campo: "#F8F7F4",
  placeholder: "#8c968d",
  desactivado: "#D6D3C9",

  Error: "#D64545",
  ErrorClaro: "#FBE0DE",
  iconoError: "#E05A5A",

  fondoExito: "#F5EDE0",
  iconoExito: "#3F9E4F",
  fondoAdvertencia: "#FFF3D6",
  iconoAdvertencia: "#E0A526",

  fondoFaltante: "#FBECCB",
  textoFaltante: "#8A5A00",
  notificacionLeida: "#FBF9F2",

  fondoTarjeta: "#b8d0b3",
  imagenVacia: "#d5e4d1",
  imagenCosecha: "#eef2ed",
  puntoCarrusel: "#c7d4c5",

  fondoToast: "#2F3B2F",
  accionToast: "#CDE3AE",
  overlay: "rgba(0,0,0,0.45)",
  transparente: "transparent",
};

// TEXTO
export const tamanos = {
  etiqueta: 16,
  apoyo: 15,
  cuerpoM: 18,
  cuerpoL: 20,
  paso: 28,
  subtitulo: 19,
  titulo: 22,
  tituloS: 28,
  tituloM: 32,
  tituloL: 34,
  Display: 64,
};

export const pesos = {
  normal: "400",
  medio: "500",
  semibold: "600",
  bold: "700",
};

//ESPACIADO
export const espacios = {
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

//FORMAS
export const radios = {
  pequeno: 12,
  imagen: 14,
  tarjeta: 16,
  botonSecundario: 18,
  boton: 20,
  chip: 21,
  modal: 24,
  circulo: 999,
};

//APPBAR SUPERIOR
export const appBar = StyleSheet.create({
  contenedor: {
    width: "100%",
    padding: 20,
    backgroundColor: colores.fondo,
  },
  fila: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: espacios.m,
  },
  saludo: {
    flex: 1,
    fontSize: tamanos.saludo,
    fontWeight: pesos.bold,
    color: colores.Primario,
  },
  botonNotificaciones: {
    width: 52,
    height: 52,
    borderRadius: radios.circulo,
    backgroundColor: colores.blanco,
    alignItems: "center",
    justifyContent: "center",
  },
  campana: {
    fontSize: 26,
  },
  contador: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: colores.rojo,
    borderRadius: radios.pequeno,
    paddingHorizontal: 6,
  },
  numero: {
    color: colores.blanco,
    fontSize: tamanos.contador,
  },
  botonVolver: {
    width: 48,
    minHeight: 44,
    justifyContent: "center",
  },
  flecha: {
    fontSize: tamanos.titulo,
    color: colores.textoAyuda,
  },
  titulo: {
    fontSize: tamanos.titulo,
    fontWeight: pesos.bold,
    color: colores.Primario,
    textAlign: "center",
  },
  botonSalir: {
    minHeight: 44,
    justifyContent: "center",
  },
  salir: {
    fontSize: tamanos.paso,
    color: colores.textoAyuda,
  },
  paso: {
    flexShrink: 1,
    fontSize: tamanos.paso,
    fontWeight: pesos.bold,
    color: colores.Primario,
    textAlign: "right",
  },
  fondoProgreso: {
    height: 10,
    backgroundColor: colores.borde,
    borderRadius: 5,
    marginTop: espacios.m,
    overflow: "hidden",
  },
  progreso: {
    height: 10,
    backgroundColor: colores.Primario,
    borderRadius: 5,
  },
});

//BARRA DE NAVEGACIÓN
export const navegacion = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    width: "100%",
    minHeight: 96,
    backgroundColor: colores.blanco,
    borderTopWidth: 1,
    borderTopColor: colores.bordePrimario,
    paddingVertical: espacios.m,
  },
  opcion: {
    flex: 1,
    alignItems: "center",
  },
  fondoIcono: {
    width: 56,
    height: 40,
    borderRadius: radios.boton,
    alignItems: "center",
    justifyContent: "center",
  },
  fondoActivo: {
    backgroundColor: colores.PrimarioClaro,
  },
  icono: {
    fontSize: 26,
    color: colores.Primario,
  },
  texto: {
    fontSize: tamanos.apoyo,
    marginTop: 5,
    textAlign: "center",
    color: colores.textoSecundario,
  },
  textoActivo: {
    color: colores.Primario,
    fontWeight: pesos.bold,
  },
});

//BOTÓN
export const boton = StyleSheet.create({
  boton: {
    width: 338,
    height: 64,
    borderRadius: radios.boton,
    backgroundColor: colores.PrimarioBoton,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  texto: {
    fontSize: tamanos.cuerpo,
    fontWeight: pesos.bold,
    color: colores.blanco,
  },

  
});
export const entradaTexto = StyleSheet.create({
  input: {
    width: "100%",
    height: 56,
    borderWidth: 1.5,
    borderColor: "#b8c2b9",
    borderRadius: 28,
    paddingHorizontal: 25,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#ffffff",
  },
});
export const inicio = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  searchContainer: {
    marginVertical: 10,
  },
  seccionTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginVertical: 15,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  card: {
    width: "47%",
    height: 180,
    borderRadius: 24,
    padding: 16,
    justifyContent: "space-between",
  },
  iconoPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 2,
  },
  cardSubtitulo: {
    fontSize: 13,
    color: "#556b55",
  },
  cosechaCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: "#e2e8e0",
    borderRadius: 20,
    padding: 14,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cosechaFila: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  imagenCosechaVacia: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#d5e4d1",
  },
  cosechaTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e3b2e",
  },
  cosechaVer: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3b6e44",
  },
});

export const explorarRecetas = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fcf8f2", 
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginTop: 8,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
  },
  listaRecetas: {
    gap: 15, // Espaciado entre las tarjetas de receta
  },
  fondolmagen: {
  width: 60,
  height: 60,
  borderRadius: 12,
  backgroundColor: "#d5e4d1",
}
});
// Tarjeta de recetas
export const receta = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    backgroundColor: colores.blanco,
    borderWidth: 1.5,
    borderColor: colores.borde,
    borderRadius: 20,
    padding: 14,
    alignItems: "center",
    gap: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  fondoImagen: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colores.imagenVacia,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  imagen: {
    width: "100%",
    height: "100%",
  },
  icono: {
    fontSize: 26,
  },
  contenido: {
    flex: 1,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.texto || "#2e3b2e",
    marginBottom: 2,
  },
  detalle: {
    fontSize: 13,
    color: "#737c73",
    marginBottom: 8,
  },
  etiqueta: {
    alignSelf: "flex-start",
    backgroundColor: colores.PrimarioClaro,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  etiquetaFaltante: {
    backgroundColor: colores.fondoFaltante || "#FBECCB",
  },
  estado: {
    fontSize: 12,
    fontWeight: "bold",
    color: colores.Primario,
  },
  textoFaltante: {
    color: colores.textoFaltante || "#8A5A00",
  },
});
export const remediosCaseros = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginTop: 8,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
  },
  filtrosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 18,
    marginBottom: 20,
  },
  chipFiltro: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: "#e2e8e0",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  chipActivo: {
    backgroundColor: "#3F7440",
    borderColor: "#3F7440",
  },
  textoChip: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3c3c3c",
  },
  textoChipActivo: {
    color: "#ffffff",
  },
  listaRecetas: {
    gap: 15,
  },
});

// ITEM COSECHA
export const itemCosecha = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    backgroundColor: colores.blanco,
    borderWidth: 1.5,
    borderColor: colores.borde,
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  filaInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  // Contenedor de la imagen vacío 
  contenedorImagen: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: colores.imagenCosecha || "#eef2ed",
    justifyContent: "center",
    alignItems: "center",
  },
  textosContainer: {
    justifyContent: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.texto || "#2e3b2e",
    marginBottom: 2,
  },
  subtitulo: {
    fontSize: 13,
    color: "#737c73",
  },
  botonEliminar: {
    width: 44,
    height: 44,
    borderRadius: radios.circulo,
    backgroundColor: colores.ErrorClaro || "#FBE0DE",
    justifyContent: "center",
    alignItems: "center",
  },
  iconoEliminar: {
    fontSize: 18,
    color: colores.Error || "#D64545",
  },
});
export const miHuerta = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fcf8f2",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#737c73",
  },
  botonAgregar: {
    width: "100%",
    height: 56,
    backgroundColor: "#3F7440",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textoBotonAgregar: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  filtrosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  chipFiltro: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: "#e2e8e0",
  },
  chipActivo: {
    backgroundColor: "#3F7440",
    borderColor: "#3F7440",
  },
  textoChip: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3c3c3c",
  },
  textoChipActivo: {
    color: "#ffffff",
  },
  listaCosechas: {
    gap: 12,
  },
});

// PANTALLA DE PERFIL
export const perfil = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colores.fondo,
  },

  contenido: {
    padding: 20,
    paddingBottom: 35,
  },

  filaPerfil: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    marginBottom: 35,
  },

  foto: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: colores.PrimarioClaro,
    justifyContent: "center",
    alignItems: "center",
  },

  inicial: {
    fontSize: 35,
    fontWeight: pesos.bold,
    color: colores.Primario,
  },

  datos: {
    marginLeft: 18,
    flex: 1,
  },

  nombre: {
    fontSize: 21,
    fontWeight: pesos.bold,
    color: colores.texto,
  },

  correo: {
    fontSize: 14,
    color: "#737C73",
    marginTop: 5,
  },

  menu: {
    backgroundColor: colores.blanco,
    borderRadius: radios.botonSecundario,
    paddingHorizontal: 15,
  },

  opcion: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: espacios.l,
    borderBottomWidth: 1,
    borderBottomColor: "#F0EDE5",
  },

  iconoCirculo: {
    width: 42,
    height: 42,
    borderRadius: 30,
    backgroundColor: colores.PrimarioClaro,
    justifyContent: "center",
    alignItems: "center",
  },

  icono: {
    fontSize: tamanos.cuerpoL,
    color: colores.Primario,
  },

  textoOpcion: {
    flex: 1,
    fontSize: tamanos.apoyo,
    fontWeight: pesos.semibold,
    color: colores.texto,
    marginLeft: 14,
  },

  flecha: {
    fontSize: 26,
    color: colores.placeholder,
  },

  cerrarSesion: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginTop: 20,
    backgroundColor: colores.ErrorClaro,
    borderRadius: radios.botonSecundario,
  },

  iconoCerrar: {
    fontSize: 23,
    color: colores.Error,
    marginRight: 15,
  },

  textoCerrar: {
    fontSize: tamanos.etiqueta,
    fontWeight: pesos.bold,
    color: colores.Error,
  },
});

// Filtro
export const filtro = {
  contenedor: remediosCaseros.chipFiltro,
  activo: remediosCaseros.chipActivo,
  texto: remediosCaseros.textoChip,
  textoActivo: remediosCaseros.textoChipActivo,
};

// Tarjetas de categoria 
export const categoria = StyleSheet.create({
  card: {
    width: "47%",
    height: 180,
    borderRadius: 24,
    padding: 16,
    justifyContent: "space-between",
  },
  imagenVacia: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e3b2e",
    marginBottom: 2,
  },
  subtitulo: {
    fontSize: 13,
    color: "#556b55",
  },
});