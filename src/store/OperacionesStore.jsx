import { create } from "zustand";
import { v } from "../styles/variables";
export const useOperaciones = create((set, get) => ({
  tipo: "i",
  tituloBtnDes: "Categorias ingresos",
  tituloBtnDesMovimientos: "Ingresos",
  colorCategoria:  v.colorIngresos,
  bgCategoria:  v.colorbgingresos,
  año: (new Date).getFullYear(),
  mes: (new Date).getMonth()+1,
  setMes: (p) => {
    set({ mes: p });
  },
  setAño: (p) => {
    set({ año: p });
  },
  setTipoMovimientos:(p) => {
    set({tipo:p.tipo})
    set({
      tituloBtnDesMovimientos:p.text
    });
    set({
      colorCategoria: p.color,
    });
    set({
      bgCategoria: p.bgcolor,
    });
  },
  setTipo: (p) => {
    set({tipo:p.tipo})
    set({
      tituloBtnDes: p.text
    });
    set({
      colorCategoria: p.color,
    });
    set({
      bgCategoria: p.bgcolor,
    });
  },
}));
