import React from "react";
import style from "./style.module.scss";

export const Loader = () => {
  return (
    <div className={style.skeleton_loader}>
      <div className={style.skeleton_avatar}></div>
    </div>
  );
};

export const Spiner = ({
  width,
  height,
  minWidth,
  borderTop = "3px solid #FFF",
}: {
  width: string;
  height: string;
  minWidth?: string;
  borderTop?: string;
}) => {
  return (
    <span
      className={style.loader}
      style={{ width, height, minWidth, borderTop: borderTop }}
    ></span>
  );
};

export const Spinner2 = () => {
  return (
    <p className={`${style.c_spinner} spinner2`} style={{margin: 'auto'}}>
      <strong className={style.c_spinner__text}>Loading…</strong>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </p>
  );
};
export const DotsLoader = ({width='48'}:{width?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 24 24"
    >
      <circle cx="18" cy="12" r="0" fill="#000">
        <animate
          attributeName="r"
          begin=".67"
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
      <circle cx="12" cy="12" r="0" fill="#000">
        <animate
          attributeName="r"
          begin=".33"
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
      <circle cx="6" cy="12" r="0" fill="#000">
        <animate
          attributeName="r"
          begin="0"
          calcMode="spline"
          dur="1.5s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        />
      </circle>
    </svg>
  );
};