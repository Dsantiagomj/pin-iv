import React from "react";

const Logo = ({ type, height }) => {
  const handleLogoRender = () => {
    switch (type) {
      case "black":
        return (
          <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96.56 148"
            height={height || "90px"}
          >
            <path
              class="cls-1"
              d="M351.59,470h-69a2.69,2.69,0,0,1-2.69-2.69V324.69a2.69,2.69,0,0,1,2.69-2.69h69a2.69,2.69,0,0,1,2.35,4l-27.71,66.26a7.75,7.75,0,0,0,0,7.5L353.94,466A2.69,2.69,0,0,1,351.59,470Z"
              transform="translate(-257.72 -322)"
              fill="#1d1d1b"
            />
            <rect class="cls-1" width="13.33" height="148" rx="2.69" />
          </svg>
        );
      case "white":
        return (
          <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96.56 148"
            height={height || "90px"}
          >
            <path
              class="cls-1"
              d="M351.59,470h-69a2.69,2.69,0,0,1-2.69-2.69V324.69a2.69,2.69,0,0,1,2.69-2.69h69a2.69,2.69,0,0,1,2.35,4l-27.71,66.26a7.75,7.75,0,0,0,0,7.5L353.94,466A2.69,2.69,0,0,1,351.59,470Z"
              transform="translate(-257.72 -322)"
            />
            <rect class="cls-1" width="13.33" height="148" rx="2.69" />
          </svg>
        );
      default:
        return (
          <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96.56 148"
            height={height || "90px"}
          >
            <defs></defs>
            <title>logo 1</title>
            <path
              class="cls-1"
              d="M351.59,470h-69a2.69,2.69,0,0,1-2.69-2.69V324.69a2.69,2.69,0,0,1,2.69-2.69h69a2.69,2.69,0,0,1,2.35,4l-27.71,66.26a7.75,7.75,0,0,0,0,7.5L353.94,466A2.69,2.69,0,0,1,351.59,470Z"
              transform="translate(-257.72 -322)"
              fill="#1d1d1b"
            />
            <rect class="cls-1" width="13.33" height="148" rx="2.69" />
          </svg>
        );
    }
  };
  return handleLogoRender();
};

export default Logo;
