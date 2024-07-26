import React from "react";

function FormImageS({ formSImage }) {
  return (
    <nav className="form-s-container">
      <div className="form-image-content">
        <img
          className="form-s-image"
          src={formSImage}
          alt="Main topic of section"
        />
      </div>
    </nav>
  );
}

export default FormImageS;
