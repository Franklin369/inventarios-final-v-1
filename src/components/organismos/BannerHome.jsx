import styled from "styled-components";
import fondocuadros from "../../assets/fondocuadros.svg";
import { Btnsave } from "../moleculas/Btnsave";
import { Device } from "../../styles/breakpoints";
import { BsFire } from "react-icons/bs";
import logo from "../../assets/inventarioslogo.png";
import { useEmpresaStore } from "../../store/EmpresaStore";
import { v } from "../../styles/variables";
import { ShapeSBig, ShapeSmall } from "../atomos/Shapes";
import { CardDatosEmpresa } from "../moleculas/CarddatosEmpresa";
export function BannerHome() {
  const { dataempresa } = useEmpresaStore();
  return (
    <>
      <Container>
        <div className="content-wrapper-context">
          <span className="titulo">
            {<v.iconoempresa />}
            Bienvenido a StockPRO
          </span>
          <div className="content-text">
            StockPRO te ayuda a tener un control de tus inventarios desde
            cualquier dispositivo.
          </div>

          <ContentSocial>
            <CardDatosEmpresa
              titulo="PC"
              img="https://i.ibb.co/m6W7qdH/ordenador-personal.png"
            />
            <CardDatosEmpresa titulo="Celular" img="https://i.ibb.co/VMyZzy6/telefono-inteligente-2.png"/>
            <CardDatosEmpresa titulo="Laptop" img="https://i.ibb.co/kJ6dYm6/ordenador-portatil.png"/>
          </ContentSocial>
        </div>

        <div className="contentsvg">
          <svg
            class="opacity-0 group-hover:opacity-100 transform-gpu transition-all will-change-auto duration-600 ease-in-out"
            viewBox="0 0 492 253"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_934_1718)">
              <path
                d="M436.631 215.884C513.562 314.19 490.786 459.853 385.76 541.232C280.733 622.611 133.227 608.889 56.2961 510.583C-20.6352 412.277 2.14047 266.613 107.167 185.234C212.193 103.855 359.699 117.578 436.631 215.884Z"
                fill="#C300E2"
              ></path>
              <path
                d="M436.631 285.2C513.562 383.506 490.786 529.169 385.76 610.548C280.733 691.927 133.227 678.205 56.2961 579.899C-20.6352 481.593 2.14047 335.93 107.167 254.551C212.193 173.172 359.699 186.894 436.631 285.2Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_f_934_1718"
                x="-120.728"
                y="0.703659"
                width="734.383"
                height="794.376"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="65.7243"
                  result="effect1_foregroundBlur_934_1718"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>

        <svg
          className="cuadros"
          viewBox="0 0 492 317"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.40"
            d="M526 1L-34 1.00005M526 27.25L-34 27.2501M526 53.5L-34 53.5001M526 79.75L-34 79.7501M526 106L-34 106M526 132.25L-34 132.25M526 158.5L-34 158.5M526 184.75L-34 184.75M526 211L-34 211M526 237.25L-34 237.25M526 263.5L-34 263.5M526 289.75L-34 289.75M526 316L-34 316M-29.625 1V316M-3.375 1V316M22.875 1V316M49.125 1V316M75.375 1V316M101.625 1V316M127.875 1V316M154.125 1V316M180.375 1V316M206.625 1V316M232.875 1V316M259.125 1V316M285.375 1V316M311.625 1V316M337.875 1V316M364.125 1V316M390.375 1V316M416.625 1V316M442.875 1V316M469.125 1V316M495.375 1V316M521.625 1V316"
            stroke="url(#paint0_radial_932_3040)"
            stroke-width="0.5"
          />
          <defs>
            <radialGradient
              id="paint0_radial_932_3040"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(246 158.5) rotate(90) scale(212.625 212.625)"
            >
              <stop offset="0.343728" stop-color="white" />
              <stop offset="1" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </Container>
    </>
  );
}
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 solid #6b6b6b;
  /* background-image: url(${fondocuadros}); */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat, repeat;

  overflow: hidden;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
  .cuadros {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: 0.6s;
  }
  .contentsvg {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: -500px;
    opacity: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    border: 1px solid #4d4d4d;
    .contentsvg {
      bottom: -100px;
      opacity: 1;
    }
    .cuadros {
      transform: rotate(37deg) rotateX(5deg) rotateY(12deg) rotate(3deg)
        skew(2deg) skewY(1deg) scaleX(1.2) scaleY(1.2);
      color: red;
    }
  }

  /* &::before {
    content: "";
    transition: 0.6s ease-in-out;
    position: absolute;
    background: rgb(255, 64, 219);
    background: linear-gradient(
      180deg,
      rgba(255, 64, 219, 1) 0%,
      rgba(225, 40, 205, 0.4318102240896359) 0%,
      rgba(120, 42, 253, 1) 59%
    );
    border-radius: 50%;
    filter: blur(96px);
    
    z-index: 0;
    width: 0;
    height:0;
    bottom: 0;
    left: 0;
    transform: translate(100%, 150%);
  }
  &:hover {
    &::before {
      width: 360px;
      height: 150px;
      bottom: 50%;
    left: 50%;
    transform: translate(-50%, 200%);
    }
  } */
  @media ${Device.laptop} {
    width: 100%;
  }
  .content-wrapper-context {
    padding: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    .titulo {
      font-size: 30px;
      font-weight: 700;
      gap: 10px;
      display: flex;
      align-items: center;
    }
    .content-text {
      font-weight: 400;
      font-size: 14px;

      line-height: 1.7em;
     
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .content-wrapper-img {
    padding: 20px;
    width: 90px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -25px;
    object-position: center;
    animation: flotar 1.8s ease-in-out infinite alternate;
    margin-left: 10px;
    @media ${Device.tablet} {
      width: 80px;
    }
    @media ${Device.laptop} {
      width: 80px;
    }
    @media ${Device.desktop} {
      width: 120px;
    }
  }
  @keyframes flotar {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(15px);
    }
  }
`;
const ContentSocial = styled.section`
  display: flex;
  gap: 10px;
  padding-top: 15px;
  flex-wrap:wrap;
  cursor: pointer;

  a {
    transition: 0.3s;
    color: #fff;
    font-size: 18px;
  }

  a {
    &:hover {
      transform: translateY(-8px);
    }
  }
`;
const Frase = styled.span`
  display: none;
  font-weight: 650;
  @media ${Device.desktop} {
    font-size: 20px;
    display: block;
  }
`;
