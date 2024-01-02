import styled from "styled-components";
import { useGlobalStore } from "../../store/GlobalStore";
import { useEffect, useState } from "react";
import { usePermisosStore } from "../../store/PermisosStore";
export function ListaModulos({ setCheckboxs, checkboxs,accion }) {
  const { datamodulos } = useGlobalStore();
  const { datapermisosEdit } = usePermisosStore();
  const [isChecked, setisChecked] = useState(true);
  const [select, setSelect] = useState([]);
  const [nuevadata, setnuevadata] = useState([]);
  
  console.log(select);
  useEffect(() => {
    if (accion=="Editar"){
       let allDocs = [];
    datamodulos.map((element) => {
      const statePermiso = datapermisosEdit?.some((objeto) =>
        objeto.modulos.nombre.includes(element.nombre)
      );
      if (statePermiso) {
        allDocs.push({ ...element, check: true  });
      } else {
        allDocs.push({ ...element, check: false });
      }
    });
    console.log("nueva",datapermisosEdit)
    setCheckboxs(allDocs)

    }
    else{
      setCheckboxs(datamodulos)
    }
   
    // setCheckboxs(datapermisosEdit)
    // console.log(checkboxs)
    // let allDocs = [];
    // datamodulos.map((element) => {
    //   const statePermiso = datapermisosEdit.some((objeto) =>
    //     objeto.modulos.nombre.includes(element.nombre)
    //   );
    //   if (statePermiso) {
    //     allDocs.push({ ...element, check: true });
    //   } else {
    //     allDocs.push({ ...element, check: false });
    //   }
    // });
    // setnuevadata(allDocs)
    // console.log("nuevas", allDocs);
  }, [datapermisosEdit]);
  function handlecheckbox(id) {
    setCheckboxs((prev) => {
      return prev?.map((item) => {
        if (item.id === id) {
          return { ...item, check: !item.check };
        } else {
          return { ...item };
        }
      });
    });

     console.log("checkboxes",checkboxs);
  }
  const seleccionar = (e) => {
    let check = e.target.checked;
    setisChecked(check);
  };

  return (
    <Container>
      {checkboxs?.map((item, index) => {
        return (
          <div key={index} className="content" onClick={() => handlecheckbox(item.id)}>
            <input
              onChange={(e) => seleccionar(e)}
              id={item.id}            
              type="checkbox"
              class="checkbox"
              checked={item.check}
            />
            <span>{item.nombre}</span>
          </div>
        );
      })}
      {/* {checkboxs.map((item, index) => {
        if (item.check) {
          return <span>{item.nombre}</span>;
        } else {
          return null;
        }
      })} */}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dashed #414244;
  border-radius: 15px;
  padding: 20px;
  gap: 15px;
  .content {
    display: flex;
    gap: 20px;
  }
  .checkbox {
    appearance: none;
    overflow: hidden;
    min-width: 30px;
    aspect-ratio: 1/1;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    border: 2px solid rgb(255, 102, 0);
    position: relative;
    transition: all 0.2s ease-in-out;
    &::before {
      position: absolute;
      inset: 0;
      content: "";
      font-size: 35px;
      transition: all 0.2s ease-in-out;
    }
    &:checked {
      border: 2px solid rgb(255, 212, 59);
      background: linear-gradient(
        135deg,
        rgb(255, 212, 59) 0%,
        rgb(255, 102, 0) 100%
      );
      box-shadow: -5px -5px 30px rgba(255, 212, 59, 1),
        5px 5px 30px rgba(255, 102, 0, 1);
      &::before {
        background: linear-gradient(
          135deg,
          rgb(255, 212, 59) 0%,
          rgb(255, 102, 0) 100%
        );
      }
    }
  }
`;
