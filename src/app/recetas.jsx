import { useLocalSearchParams } from "expo-router";
import ExplorarRecetas from "../../assets/componentes/ExplorarRecetas";

export default function Recetas() {
  const { q, filtro } = useLocalSearchParams();

  const busquedaInicial = typeof q === "string" ? q : "";
  
  const filtroInicial = filtro === "Guardadas" ? "Guardadas" : "Todas";

  return (
    <ExplorarRecetas
      key={`${busquedaInicial}-${filtroInicial}`}
      titulo="Recetas"
      subtitulo="Explora lo que puedes preparar con tu cosecha."
      busquedaInicial={busquedaInicial}
      filtroInicial={filtroInicial}
    />
  );
}