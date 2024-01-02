import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Login,
  Home,
  ProtectedRoute,
  UserAuth,
  Configuracion,
  Categorias,
  Productos,
  Marca,
  Personal,
  Empresa,
  Kardex,
  useUsuariosStore,
  useEmpresaStore,
  SpinnerLoader,
  usePermisosStore,
  Reportes,
} from "../index";
import { useQuery } from "@tanstack/react-query";
export function MyRoutes() {
  const { user } = UserAuth();
  const { mostrarUsuarios, datausuarios, idusuario } = useUsuariosStore();
  const { mostrarEmpresa, contarusuariosXempresa } = useEmpresaStore();
  const {mostrarPermisos} = usePermisosStore();
  const {
    data: usuarios,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: () => mostrarUsuarios(),
  });

  const { data: empresa } = useQuery({
    queryKey: ["mostrar empresa", { idusuarios: datausuarios?.id }],
    queryFn: () => mostrarEmpresa({ idusuario: datausuarios?.id }),
    enabled: !!usuarios,
  });
  const { data: permisos } = useQuery({
    queryKey: ["mostrar permisos", { id_usuario: datausuarios?.id }],
    queryFn: () => mostrarPermisos({ id_usuario: datausuarios?.id }),
    enabled: !!usuarios,
  });
  if (isLoading==true) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <h1>Error..</h1>;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/configurar/usuarios" element={<Personal />} />
        <Route path="/configurar" element={<Configuracion />}></Route>
        <Route path="/configurar/categorias" element={<Categorias />} />
        <Route path="/configurar/productos" element={<Productos />} />
        <Route path="/configurar/marca" element={<Marca />} />
        <Route path="/configurar/empresa" element={<Empresa />} />
        <Route path="/kardex" element={<Kardex />}></Route>
        <Route path="/reportes" element={<Reportes />}></Route>
      </Route>
    </Routes>
  );
}
