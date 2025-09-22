"use client"

import React, { useState, ReactNode, forwardRef } from "react";
import styles from './style.module.scss';

export interface TextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  name?: string;
  title: string;
  defaultValue?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, TextProps>(({ type = "text", name, title, ...props }, ref) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleClick = () => {
    setIsReadOnly(false); 
  };

  return (
    <div >
      <input
        name={name} 
        placeholder={title}
        dir="rtl"
        id={name}
        type={type}
        // className={styles.peer}
        autoComplete="off"
        readOnly={isReadOnly} 
        onClick={handleClick}
        ref={ref} 
        {...props}
      />
      {/* <label htmlFor={name} className={styles.label_peer}>
        <span>{title}</span>
      </label> */}
    </div>
  );
});

Input.displayName = "Input";
