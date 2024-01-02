import Swal from "sweetalert2";
import { supabase } from "../index";

export const MostrarEmpresa = async (p) => {
  const { data } = await supabase.rpc("mostrarempresaasignaciones", {
    _id_usuario: p.idusuario,
  }).maybeSingle();
  if (data) {
    return data;
  }
};
export const ContarUsuariosXempresa = async (p) => {
  const { data,error } = await supabase.rpc("contarusuariosxempresa", {
    _id_empresa: p.id_empresa,
  }).maybeSingle();
 
  if (data) {
    return data;
  }
};
