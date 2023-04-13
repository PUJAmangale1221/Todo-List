import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
  };

  return (
    <footer
      className="bg-dark text-light text-center my-5  py-3"
      style={footerStyle}
    >
      Copyright &copy; Todo-List | Puja Mangale
    </footer>
  );
};
