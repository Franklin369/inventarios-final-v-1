import { useState } from "react";
import { v } from "../../styles/variables";
import styled from "styled-components";
import { LinksArray, SecondarylinksArray } from "../../index";
import { NavLink } from "react-router-dom";
export function Menuambur() {
  const [click, setClick] = useState(false);
  return (
    <Container>
      <NavBar>
        <HamburgerMenu
          $click={click.toString()}
          onClick={() => setClick(!click)}
        >
          {/* <div className="contentLogo active">
            <img src={v.logo} />
          </div> */}

          {/* <input type="checkbox" id="checkbox" onClick={() => setClick(!click)}/> */}
          <label for="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </HamburgerMenu>
        <Menu $click={click.toString()}>
          {LinksArray.map(({ icon, label, to }) => (
            <div
              key={label}
              className="LinkContainer"
              onClick={() => setClick(!click)}
            >
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <Divider />
          {SecondarylinksArray.map(({ icon, label, to }) => (
            <div
              key={label}
              className="LinkContainer"
              onClick={() => setClick(!click)}
            >
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
        </Menu>
      </NavBar>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  cursor: pointer;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;
const HamburgerMenu = styled.div`
  width: ${(props) => (props.$click == "true" ? "4rem" : "3.5rem")};
  height: ${(props) => (props.$click == "true" ? "2px" : "5px")};
  border-radius: 3px;
  z-index: 101;
  position: fixed;
  top: 3rem;
  left: 10px;
  transform: ${(props) =>
    props.$click == "true" ? "translateX(80vw)" : " translateX(0)"};

  display: none;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (max-width: 64em) {
    display: flex;
  }
  .contentLogo {
    margin-left: 12px;
    width: 100%;
    img {
      width: 100%;
    }
  }

  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition-duration: 0.5s;
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: rgb(247, 244, 249);
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: 0.8s;
  }

  #bar1,
  #bar3 {
    width: 70%;
  }

  #checkbox:checked + .toggle .bars {
    
    position: absolute;
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle {
    transition-duration: 0.5s;
    transform: rotate(180deg);
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  z-index: 100;
  @media (max-width: 64em) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: 100;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(3px);
    transform: ${(props) =>
      props.$click == "true" ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
  }
  .LinkContainer {
    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }
    .Links {
      width: 100vw;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${(props) => props.theme.text};
      height: 80px;
      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        &::before {
          position: relative;
          content: "";
          height: 100%;
          left: 0;
          width: 4px;
          bottom: 0;
          border-radius: 10px;
          background: ${(props) => props.theme.bg5};
          transition: 0.3s ease;
        }
        .Linkicon {
          color: ${(props) => props.theme.bg5};
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${v.lgSpacing} 0;
`;
