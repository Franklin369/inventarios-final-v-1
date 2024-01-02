import styled from "styled-components";

export const ShapeSmall = styled.div`
  position: absolute;
  background-color:${(props)=>props.$bgcolor};
  border-radius: 50%;
  filter: blur(96px);
  z-index: 0;
  width: 150px;
  height: 150px;
  top: ${(props)=>props.$top};
  left: ${(props)=>props.$left};
  bottom:${(props)=>props.$bottom};
  right: ${(props)=>props.$right};
`;
export const ShapeSBig = styled.div`
  position: absolute;
  background-color:${(props)=>props.$bgcolor};
  border-radius: 50%;
  filter: blur(96px);
  z-index: 0;
  width: 250px;
  height: 250px;
  opacity: 0.8;
  top: ${(props)=>props.$top};
  left: ${(props)=>props.$left};
  bottom:${(props)=>props.$bottom};
  right: ${(props)=>props.$right};
`;