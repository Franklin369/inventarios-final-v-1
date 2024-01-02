import { supabase } from "../index";
import Swal from "sweetalert2";
export async function InsertarKardex(p) {
  const { error } = await supabase.from("kardex").insert(p);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      footer: '<a href="">...</a>',
    });
  }
}

export async function MostrarKardex(p) {
  const { data } = await supabase
    .rpc("mostrarkardexempresa", {
      _id_empresa: p.id_empresa,
    })
    .order("id", { ascending: false });
  return data;
}
export async function BuscarKardex(p) {
  const { data } = await supabase
    .rpc("buscarkardexempresa", {
      _id_empresa: p.id_empresa,
      buscador: p.buscador,
    })
    .order("id", { ascending: false });
  return data;
}
