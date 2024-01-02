import React, { useState } from "react";
import { v } from "../../../styles/variables";
import styled from "styled-components";
import { useOperaciones } from "../../../index";
export const Paginacion = ({ table }) => {
  const { bgCategoria, colorCategoria } = useOperaciones();

  return (
    <Container $bgCategoria={bgCategoria} $colorCategoria={colorCategoria}>
      <button onClick={() => table.setPageIndex(0)}  disabled={!table.getCanPreviousPage()}>
        <span>{<v.iconotodos />}</span>
      </button>
      <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
        <span className="iconoIzquierda">{<v.iconoflechaderecha />}</span>
      </button>
      <span>{table.getState().pagination.pageIndex + 1}</span>
      <p> de {table.getPageCount()} </p>
      <button
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        <span>{<v.iconoflechaderecha />}</span>
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  button {
    background-color: ${(props) => props.$colorCategoria};
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 10px 15px -3px ${(props) => props.$colorCategoria};
    }
    .iconoIzquierda {
      transform: rotate(-180deg);
    }
    span {
      color: #fff;
      display: flex;
      svg {
        font-size: 15px;
        font-weight: 800;
      }
    }
  }

  button[disabled] {
    background-color: #646464;
    cursor: no-drop;
    box-shadow: none;
  }
`;
