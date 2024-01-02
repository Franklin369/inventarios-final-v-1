import { supabase } from "../index";
export async function MostrarModulos() {
  
    const { data } = await supabase.from("modulos").select();
    return data;
 
}
