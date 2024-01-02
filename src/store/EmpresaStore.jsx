import { create } from "zustand";
import { MostrarCuentas } from "../index";
import {
  ContarUsuariosXempresa,
  MostrarEmpresa,
} from "../supabase/crudEmpresa";
export const useEmpresaStore = create((set, get) => ({
  contadorusuarios: [],
  dataempresa: [],
  mostrarEmpresa: async (p) => {
    const response = await MostrarEmpresa(p);
    set({ dataempresa: response });
    return response;
  },
  contarusuariosXempresa: async (p) => {
    const response = await ContarUsuariosXempresa(p);
    set({ contadorusuarios: response });
    return response;
  },
}));
