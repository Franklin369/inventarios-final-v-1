import styled from "styled-components";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import {
  Header,
  Btnfiltro,
  v,
  RegistrarCategorias,
  Title,
  Lottieanimacion,
  TablaCategorias,
  Buscador,
  RegistrarProductos,
  useProductosStore,
  TablaProductos,
  DocuPDF,
  Btnsave,
  useEmpresaStore,
  useKardexStore,
  SpinnerLoader,
} from "../../index";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export function ReportesTemplate() {
   const [state, setState] = useState(false);
  const [openRegistro, SetopenRegistro] = useState(false);
  const [accion, setAccion] = useState("");
  const [dataSelect, setdataSelect] = useState([]);
  const [poema, setPoema] = useState([]);
  const { dataempresa } = useEmpresaStore();
  const { datakardex, mostrarKardex } = useKardexStore();
  const {data, isLoading, error } = useQuery({
    queryKey: ["Reportemostrarkardextodo", { id_empresa: dataempresa.id }],
    queryFn: () => mostrarKardex({ id_empresa: dataempresa.id }),
  });
  if (isLoading){
    return <SpinnerLoader/>
  }
  if (error){
    return(<span>Error</span>)
  }
 



  return (
    <Container>
      {openRegistro && (
        <RegistrarProductos
          dataSelect={dataSelect}
          onClose={() => SetopenRegistro(!openRegistro)}
          accion={accion}
        />
      )}
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>Reportes</Title>
        </ContentFiltro>
      </section>
      <section className="area2">
        <Btnsave bgcolor="#fff" titulo="Reporte Todos los movimientos"/>
        {/* <Btnsave titulo="Reporte Ingresos"/>
        <Btnsave titulo="Reporte Salidas"/> */}
      {/* <PDFDownloadLink
        document={<DocuPDF  />}
        fileName="reporte_movimientos.pdf"
      >
        <button variant="info">Descargar PDF</button>
      </PDFDownloadLink> */}
        {/* <Buscador setBuscador={setBuscador}/> */}
      </section>
      <section className="main">
     
      <PDFViewer style={{ width: "100%", height: "90vh" }}>
              <DocuPDF data={data}/>
            </PDFViewer>
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 100px
    "main" auto;

  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .main {
    grid-area: main;
    /* background-color: rgba(179, 46, 241, 0.14); */
  }
`;
const ContentFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  width: 100%;
  gap: 15px;
`;
