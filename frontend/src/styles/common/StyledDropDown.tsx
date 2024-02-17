import { css, keyframes, styled } from "styled-components";

const SelectAnimation = keyframes`
  from {
    border: transparent;
  }
  to {
    border: #2f70af 2px solid;
    padding: 1rem;
    font-size: 18px;
  }
  `;

const DropAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
  `;

export const StyledUl = styled.ul`
  position: absolute;
  border: 1px #393939 solid;
  border-radius: 4px;
  animation: ${DropAnimation} 0.2s forwards ease-in;
  z-index: 1;
`;

export const StyledLi = styled.li`
  background-color: #f9f9f9;
  cursor: pointer;
  text-align: center;
  width: 5rem;
  padding: 0.5rem 0.3rem;
  font-size: 18px;
  &:hover {
    outline: none;
    border: none;
    animation: ${SelectAnimation} 0.2s forwards ease-in-out;
  }
  border-radius: 4px;
`;

export const StyledSelect = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f9f9f9;
  cursor: pointer;
  text-align: center;
  width: 5rem;
  margin-top: 0.7rem;
  padding: 0.3rem;
  font-family: "SuiteLight";
  font-size: 18px;
  &:hover {
  }
`;
