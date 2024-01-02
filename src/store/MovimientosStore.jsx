import { create } from "zustand";
import {
  MostrarMovimientosPorMesAño,
  InsertarMovimientos,
  EliminarMovimientos,
  RptMovimientosPorMesAño,
} from "../index";
export const useMovimientosStore = create((set, get) => ({
  datamovimientos: [],
  dataRptMovimientosAñoMes: [],
  totalMesAño: 0,
  totalMesAñoPagados: 0,
  totalMesAñoPendientes: 0,
  parametros: {},
  mostrarMovimientos: async (p) => {
    const response = await MostrarMovimientosPorMesAño(p);
    set({ parametros: p });
    const { calcularTotales } = get();
    calcularTotales(response);
    set({ datamovimientos: response });
    return response;
  },
  calcularTotales: (response) => {
    const dtPagados = response?.filter((item) => item.estado == 1);
    const dtPendientes = response?.filter((item) => item.estado == 0);
    let total = 0;
    let tpagados = 0;
    let tpendientes = 0;
    response?.forEach((item) => {
      const array = Object.values(item);
      total += array[2];
    });
    dtPagados?.forEach((item) => {
      const array = Object.values(item);
      tpagados += array[2];
    });
    dtPendientes?.forEach((item) => {
      const array = Object.values(item);
      tpendientes += array[2];
    });
    set({ totalMesAño: total });
    set({ totalMesAñoPagados: tpagados });
    set({ totalMesAñoPendientes: tpendientes });
  },
  insertarMovimientos: async (p) => {
    await InsertarMovimientos(p);

    const { mostrarMovimientos } = get();
    const { parametros } = get();
    set(mostrarMovimientos(parametros));
  },
  eliminarMovimiento: async (p) => {
    await EliminarMovimientos(p);
    const { parametros } = get();
    const { mostrarMovimientos } = get();
    set(mostrarMovimientos(parametros));
  },
  rptMovimientosAñoMes: async (p) => {
    const response = await RptMovimientosPorMesAño(p);
    set({ dataRptMovimientosAñoMes: response });
    return response;
  },
}));
