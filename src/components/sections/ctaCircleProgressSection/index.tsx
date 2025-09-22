"use client";

import { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Stat = {
  percent: number;
  label: string;
  description: string;
};

type Props = {
  stats: Stat[];
  backgroundImage: string;
};

export const CTACircleProgressSection: FC<Props> = ({
  stats,
  backgroundImage,
}) => {
  return (
    <section
      className="call-to-action ptb-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          {stats.map((item, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="circle-box w-50 mx-auto">
                <CircularProgressbar
                  value={item.percent}
                  text={`${item.percent}%`}
                  styles={buildStyles({
                    textSize: "16px",
                    pathColor: "#007bff",
                    textColor: "#343a40",
                    trailColor: "#eee",
                  })}
                />
              </div>
              <div className="progress-info text-center mt-3">
                <strong className="color-secondary">{item.label}</strong>
                <h5 className="text-white">{item.description}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
