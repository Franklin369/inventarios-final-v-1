import styled from "styled-components";
import { MdOutlineNavigateNext, MdArrowBackIos } from "react-icons/md";
import { useEffect } from "react";
import { useOperaciones } from "../../index";
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
export function CalendarioLineal({
  value,
  setValue,
  setFormatoFecha
 
}) {
  const { colorCategoria,setMes ,setAño} = useOperaciones();
  function IniciarCalendario() {
    setValue(months[currMonth] + currYear);
    let mes = "";
    if (currMonth + 1 < 10) {
      mes = "0" + (currMonth + 1);
    } else {
      mes = currMonth + 1;
    }
    let formatofecha = mes + "/" + currYear;
    setMes(mes);
    setAño(currYear);
    setFormatoFecha(formatofecha);
  }
  function adelante() {
    currMonth += 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    IniciarCalendario();
  }
  function atras() {
    currMonth -= 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    IniciarCalendario();
  }

  useEffect(() => {
    IniciarCalendario();
  }, []);
  return (
    <Container className="wrapper" $colortext={colorCategoria}>
      <header>
       
        <div className="subcontainer">
          <span onClick={atras} className="atras">
            <MdArrowBackIos />
          </span>
          <section className="contentValue">
            <p>{value.toString()}</p>
          </section>

          <span onClick={adelante} className="adelante">
            <MdOutlineNavigateNext />
          </span>
        </div>
      </header>
    </Container>
  );
}
const Container = styled.div`
  width: 450px;
  border-radius: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  header {
    display: flex;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: space-between;
    height: 100%;

    .subcontainer {
     
      display: flex;
      color: ${(props) => props.$colortext};
      align-items: center;
      justify-content: center;
     
      .contentValue {
        border: 2px solid ${(props) => props.$colortext};
        border-radius: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        padding: 10px;
      }
      .atras {
        cursor: pointer;
        margin-left: 20px;
        svg {
          width: 30px;
          height: 30px;
        }
      }
      .adelante {
        cursor: pointer;
          margin-right:20px;
        svg {
          width: 45px;
          height: 45px;
        }
      }
    }
    .current-date {
      font-size: 1.45rem;
      font-weight: 500;
    }
  }
`;
