import React from "react";

const Form = ({ onSubmit, children, title }) => {
  return (
    <form onSubmit={onSubmit}>
      <h3>{title}</h3>
      {children}
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export { Form };
