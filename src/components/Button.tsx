import { useState } from "react";

interface Props {
  children: string;
  color: string;
  OnSelectButton: () => void;
}

const Button = ({ children, color,OnSelectButton }: Props) => {
  return (
    <button className={"btn btn-"+color} onClick={OnSelectButton}>
      {children}
    </button>
  );
};

export default Button;
