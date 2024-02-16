import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  from {
    outline: transparent;
  }
  to {
    outline: #2f70af 2px solid;
    padding: 1rem;
  }
  `;

const StyledInput = styled.input`
  resize: none;
  border: transparent;
  background-color: transparent;
  border-bottom: 1px solid #393939;
  width: 100%;
  height: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
    border: none;
    border-radius: 4px;
    animation: ${Animation} 0.2s forwards ease-in-out;
  }

  &::placeholder {
    font-size: 1rem;
    color: #b9b9b9;
    font-family: "Body2";
  }
`;

export default StyledInput;
