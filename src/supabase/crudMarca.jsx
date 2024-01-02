import { supabase } from "../index";
import Swal from "sweetalert2";
export async function InsertarMarca(p) {
     const { error } = await supabase.rpc("insertarmarca", p);
     if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya existe un registro con " + p._descripcion,
        footer: '<a href="">Agregue una nueva descripcion</a>',
      });
    }
 
 
}
export async function MostrarMarca(p) {
 
    const { data } = await supabase
      .from("marca")
      .select()
      .eq("id_empresa", p.id_empresa)
      .order("id", { ascending: true });
    return data;
  
}
export async function EliminarMarca(p) {
 
    const { error } = await supabase
      .from("marca")
      .delete()
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error);
    }

}
export async function EditarMarca(p) {
  
    const { error } = await supabase
      .from("marca")
      .update(p)
      .eq("id", p.id);
    if (error) {
      alert("Error al editar marca", error);
    }

}
export async function EliminarMarcaTodas(p) {

    const { error } = await supabase
      .from("marca")
      .delete()
      .eq("idusuario", p.idusuario);
    if (error) {
      alert("Error al eliminar", error);
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Datos reseteados",
      showConfirmButton: false,
      timer: 1000,
    });
 
}
export async function BuscarMarca(p) {
  try {
    const { data } = await supabase
      .from("marca")
      .select()
      .eq("id_empresa", p.id_empresa)
      .ilike("descripcion","%"+ p.descripcion+"%")
      
    return data;
  } catch (error) {}
}
