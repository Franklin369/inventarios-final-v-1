import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../moleculas/Spinner";
import { useCategoriasStore } from "../../store/CategoriasStore";
export function Buscador({setBuscador,onFocus}) {
  function buscar(e) {
    setBuscador(e.target.value);
  }

  return (
    <Container > 
      <article className="content" >
        <FaSearch className="icono" />
        <input onFocus={onFocus} onChange={buscar} placeholder="...buscar" />
      </article>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props)=>props.theme.bg};
  border-radius: 10px;
  height: 60px;
  align-items: center;
  display: flex;
  color: ${(props)=>props.theme.text};
  border: 1px solid #414244;
  .content {
    padding: 15px;
    gap: 10px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    .icono {
      font-size: 18px;
    }
    input {
      font-size: 18px;
      width: 100%;
      outline: none;
      background: none;
      border: 0;
      color: ${(props)=>props.theme.text};
    }
  }
`;
