import React from "react";
import { useNavigate } from "react-router-dom";
import StyledPlusButton from "styles/homePage/StyledPlusButton";

const PlusButton = () => {
  const navigate = useNavigate();

  return (
    <StyledPlusButton width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="circle"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.3335 20.0005C1.33414 11.0951 7.62535 3.43035 16.3597 1.69359C25.0941 -0.0431732 33.8389 4.63178 37.2464 12.8595C40.6538 21.0871 37.7747 30.576 30.3699 35.5232C22.9651 40.4703 13.0969 39.4978 6.80016 33.2005C3.29957 29.6995 1.33314 24.9513 1.3335 20.0005Z"
        fill="#F9F9F9"
        stroke="#2F70AF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => navigate("/create")}
      />
      <path
        id="cross"
        d="M13 19.2505C12.5858 19.2505 12.25 19.5863 12.25 20.0005C12.25 20.4147 12.5858 20.7505 13 20.7505V19.2505ZM20 20.7505C20.4142 20.7505 20.75 20.4147 20.75 20.0005C20.75 19.5863 20.4142 19.2505 20 19.2505V20.7505ZM20 19.2505C19.5858 19.2505 19.25 19.5863 19.25 20.0005C19.25 20.4147 19.5858 20.7505 20 20.7505V19.2505ZM27 20.7505C27.4142 20.7505 27.75 20.4147 27.75 20.0005C27.75 19.5863 27.4142 19.2505 27 19.2505V20.7505ZM20.75 20.0005C20.75 19.5863 20.4142 19.2505 20 19.2505C19.5858 19.2505 19.25 19.5863 19.25 20.0005H20.75ZM19.25 27.0005C19.25 27.4147 19.5858 27.7505 20 27.7505C20.4142 27.7505 20.75 27.4147 20.75 27.0005H19.25ZM19.25 20.0005C19.25 20.4147 19.5858 20.7505 20 20.7505C20.4142 20.7505 20.75 20.4147 20.75 20.0005H19.25ZM20.75 13.0005C20.75 12.5863 20.4142 12.2505 20 12.2505C19.5858 12.2505 19.25 12.5863 19.25 13.0005H20.75ZM13 20.7505H20V19.2505H13V20.7505ZM20 20.7505H27V19.2505H20V20.7505ZM19.25 20.0005V27.0005H20.75V20.0005H19.25ZM20.75 20.0005V13.0005H19.25V20.0005H20.75Z"
        fill="#2F70AF"
      />
    </StyledPlusButton>
  );
};

export default PlusButton;
