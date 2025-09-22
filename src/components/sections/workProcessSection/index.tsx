"use client";

import { ProcessStep } from "./processStep";

interface Process {
  stepNumber: number;
  title: string;
  description: string;
}

interface WorkProcessSectionProps {
  subtitle: string;
  title: string;
  description: string;
  processes: Process[];
}

export const WorkProcessSection = ({
  subtitle,
  title,
  description,
  processes,
}: WorkProcessSectionProps) => {
  return (
    <section className="work-process-section ptb-100 gray-light-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <strong className="color-secondary">{subtitle}</strong>
              <h2>{title}</h2>
              <span className="animate-border mx-auto mb-4"></span>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {processes.map((process, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === processes.length - 1;
            return (
              <div className="row" key={index}>
                {isLeft ? (
                  <>
                    <ProcessStep
                      stepNumber={process.stepNumber}
                      title={process.title}
                      description={process.description}
                      isLeft={true}
                      isLast={isLast}
                    />
                    <div className="col-md-2 process-none"></div>
                    <div className="col-md-5 col-lg-5 process-none position-relative">
                      <div
                        className={`process-point-${
                          isLast ? "right process-last" : "right"
                        }`}
                      ></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-5 col-lg-5 process-none position-relative">
                      <div className="process-point-left"></div>
                    </div>
                    <div className="col-md-2 process-none"></div>
                    <ProcessStep
                      stepNumber={process.stepNumber}
                      title={process.title}
                      description={process.description}
                      isLeft={false}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
