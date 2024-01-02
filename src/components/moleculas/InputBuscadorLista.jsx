import styled from "styled-components";
export function InputBuscadorLista({ onChange, placeholder }) {
  return (<Container>
<input onChange={onChange} placeholder={placeholder} type="text"></input>
  </Container>);
}
const Container =styled.div`
   position: relative;
   input{
    background: ${({ theme }) => theme.body};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: solid 1px grey;
    color: ${({ theme }) => theme.text};
    outline: none;
    
    &:focus {
      border-bottom: none;
    }
    &::placeholder {
      color: #c8c8c8;
    }

   }
`