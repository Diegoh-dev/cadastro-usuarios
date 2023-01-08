import styled from "styled-components";
import Background from "../../assets/background1.svg";
// import { Link } from "react-router-dom";


export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

// export const ContainerItens = styled.div`
//   background: linear-gradient(
//     157.44deg,
//     rgba(255, 255, 255, 0.6) 0.84%,
//     rgba(255, 255, 255, 0.6) 0.85%,
//     rgba(255, 255, 255, 0.15) 100%
//   );
//   border-radius: 61px 61px 0px 0px;
//   padding: 50px 36px;

//   display: flex;
//   flex-direction: column;
//   height: 100vh;
// `;



export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #eee;
  padding-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  width: 342px;
  height: 58px;
  outline: none;
  padding-left: 25px;

  color: #fff;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 34px;
`;

//dessa forma o botão passa a ser um link, devido ao react route-dom
// export const Button = styled(Link)
// export const Button = styled.button`
//   width: 100%;
//   height: 74px;
//   background: rgba(0, 0, 0, 0.8);
//   border-radius: 14px;
//   border: none;
//   margin-top: 130px;

//   color: #fff;
//   font-size: 17px;
//   line-height: 28px;
//   cursor: pointer;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 20px;

//   &:hover {
//     opacity: 0.8;
//   }

//   &:active {
//     opacity: 0.5;
//   }
// `;

