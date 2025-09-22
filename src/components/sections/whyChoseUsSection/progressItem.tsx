"use client";

interface ProgressItemProps {
  title: string;
  percentage: number;
}

export const ProgressItem = ({ title, percentage }: ProgressItemProps) => {
  return (
    <div className="progress-item">
      <div className="progress-title">
        <h6>
          {title}{" "}
          <span className="float-right">
            <span className="progress-number">{percentage}</span> ٪
          </span>
        </h6>
      </div>
      <div className="progress">
        <span style={{ width: `${percentage}%` }}>
          <span className="progress-line"></span>
        </span>
      </div>
    </div>
  );
};
