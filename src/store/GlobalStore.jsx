import { create } from "zustand";
import {
  MostrarModulosTodos,
} from "../index";
export const useGlobalStore = create((set, get) => ({
  datamoduloscheck:[],
  setdatamodulosCheck:(p)=>{
        set({datamoduloscheck:p})
  },
  datamodulos: [],
  mostrarModulos: async () => {
    const response = await MostrarModulosTodos();
    set({ datamodulos: response });
    return response;
  },
  
}));
