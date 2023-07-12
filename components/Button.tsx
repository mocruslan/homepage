"use client";

import React from "react";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  onClickAction?: () => void;
}

const Button: React.FC<ButtonProps> = ({title, type, onClickAction}) => {
    return (
        <button type={type} onClick={onClickAction ? onClickAction : () => {
        }}>
            {title}
        </button>
    );
}

export default Button;
