"use client";

import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

type Props = {
  header?: boolean;
  footer?: boolean;
  children: React.ReactNode;
};

export const Layout = ({ children, footer = true, header = true }: Props) => {
  return (
    <React.Fragment>
      {header ? <Header /> : null}
      {children}
      {footer ? <Footer /> : null}
      <ToastContainer />
    </React.Fragment>
  );
};
