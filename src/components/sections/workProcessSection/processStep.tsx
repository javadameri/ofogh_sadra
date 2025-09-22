"use client";

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  isLeft: boolean;
  isLast?: boolean;
}

export const ProcessStep = ({
  stepNumber,
  title,
  description,
  isLeft,
  isLast = false,
}: ProcessStepProps) => {
  return (
    <div className={`col-md-12 col-lg-5 process-width`}>
      <div
        className={`process-box ${isLeft ? "process-left" : "process-right"}`}
      >
        <div className="row">
          <div className="col-md-5">
            <div className="process-step-number">
              <strong>گام</strong>
              <h2 className="m-0">{stepNumber}</h2>
            </div>
          </div>
          <div className="col-md-7">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </div>
        <div
          className={`process-line-${isLeft ? "l" : "r"} ${
            isLast && isLeft ? "line-5" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};
