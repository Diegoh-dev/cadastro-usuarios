import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 74px;
  background: ${props => props.isReturn ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
  border-radius: 14px;
  border:${ props => props.isReturn ? '1px solid #fff' : 'none'} ;
  margin-top: 130px;

  color: #fff;
  font-size: 17px;
  line-height: 28px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img{
    transform: ${props => props.isReturn && 'rotateY(180deg)'};
  }

  /* ${props => props.isReturn && `
   background: transparent;
   border: 1px solid #fff;
   margin-top: 120px;
   img {
    transform: rotateY(180deg);
  }
  `
} */
`;