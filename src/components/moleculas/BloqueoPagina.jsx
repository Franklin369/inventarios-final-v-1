import styled from "styled-components";
export function BloqueoPagina({state}) {
  if (state) return
  return (
    <Container>
      <span className="icono">💀</span>
      <span className="texto">No tienes permisos a este modulo</span>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  z-index: 10;
  background: rgba(26, 9, 9, 0.9);
  border: 1px solid rgba(248, 42, 45, 0.5);

  padding: 15px;
  display: flex;
  gap: 15px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 1;
  color: ${(props) => props.theme.text};
  .icono {
    font-size: 30px;
  }

`;
