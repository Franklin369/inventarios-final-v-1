import { useQuery } from "@tanstack/react-query";

import { useCategoriasStore } from "../store/CategoriasStore";
import { useEmpresaStore } from "../store/EmpresaStore";
import { SpinnerLoader } from "../components/moleculas/SpinnerLoader";
import { ProductosTemplate } from "../components/templates/ProductosTemplate";
import { useProductosStore } from "../store/ProductosStore";
import { useMarcaStore } from "../store/MarcaStore";
import { KardexTemplate } from "../components/templates/KardexTemplate";
import { useKardexStore } from "../store/KardexStore";
import { usePermisosStore, BloqueoPagina } from "../index";
export function Kardex() {
  const { datapermisos } = usePermisosStore();
  const statePermiso = datapermisos.some((objeto) =>
    objeto.modulos.nombre.includes("Kardex")
  );


  const { mostrarProductos, dataproductos, buscador, buscarProductos } =
    useProductosStore();
  const {
    mostrarKardex,
    buscarKardex,
    buscador: buscadorkardex,
  } = useKardexStore();
  const { mostrarMarca } = useMarcaStore();
  const { dataempresa } = useEmpresaStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ["mostrar productos", dataempresa.id],
    queryFn: () => mostrarProductos({ _id_empresa: dataempresa.id }),
    enabled: dataempresa.id != null,
  });
  //buscador productos
  const { data: buscar } = useQuery({
    queryKey: ["buscar productos", buscador],
    queryFn: () =>
      buscarProductos({ descripcion: buscador, id_empresa: dataempresa.id }),
    enabled: dataempresa.id != null,
  });

  //mostrar kardex
  const { data: datakardex } = useQuery({
    queryKey: ["mostrar kardex", dataempresa.id],
    queryFn: () => mostrarKardex({ id_empresa: dataempresa.id }),
    enabled: dataempresa.id != null,
  });
  //buscador kardex
  const { data: buscarkardex } = useQuery({
    queryKey: ["buscar kardex", buscadorkardex],
    queryFn: () =>
      buscarKardex({ buscador: buscadorkardex, id_empresa: dataempresa.id }),
    enabled: dataempresa.id != null,
  });
  //respuestas
  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <span>Error...</span>;
  }
  if (statePermiso == false) return <BloqueoPagina state={statePermiso}/>;
  return <KardexTemplate data={dataproductos} />;
}
