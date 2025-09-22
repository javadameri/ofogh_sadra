"use client";

interface CounterItemProps {
  count: number;
  label: string;
}

export const CounterItem = ({ count, label }: CounterItemProps) => {
  return (
    <div className="counter-single">
      <h2 className="mb-0 color-secondary">{count}</h2>
      <strong>{label}</strong>
    </div>
  );
};
