import { useQuery } from "@tanstack/react-query";
import { useEmpresaStore } from "../store/EmpresaStore";
import { SpinnerLoader } from "../components/moleculas/SpinnerLoader";
import { MarcaTemplate } from "../components/templates/MarcaTemplate";
import { useMarcaStore } from "../store/MarcaStore";
import { PersonalTemplate } from "../components/templates/PersonalTemplate";
import { useGlobalStore } from "../store/GlobalStore";
import { useUsuariosStore } from "../store/UsuariosStore";
import { usePermisosStore } from "../store/PermisosStore";
import { BloqueoPagina } from "../components/moleculas/BloqueoPagina";

export function Personal() {
  const { datapermisos } = usePermisosStore();
  const statePermiso = datapermisos.some((objeto) =>
  objeto.modulos.nombre.includes("Personal")
);

  const { mostrarUsuariosTodos, datausuariosTodos } = useUsuariosStore();
  const { buscador } = useMarcaStore();
  const { dataempresa } = useEmpresaStore();
  const { mostrarModulos } = useGlobalStore();

  //mostrar data
  const { data, isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios todos", dataempresa.id],
    queryFn: () => mostrarUsuariosTodos({ _id_empresa: dataempresa.id }),
    enabled: dataempresa.id != null,
  });
  //modulos
  const { data: modulos } = useQuery({
    queryKey: ["mostrar modulos"],
    queryFn: mostrarModulos,
  });
  if (statePermiso == false) return <BloqueoPagina state={statePermiso}/>;
  //respuestas
  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <span>Error...</span>;
  }
 
  return (
    <>
      <PersonalTemplate data={datausuariosTodos} />
    </>
  );
}
