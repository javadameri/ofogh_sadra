"use client";

interface SinglePromoProps {
  icon: any;
  title: string;
  subtitle: string;
}

export const SinglePromo3 = ({
  icon: Icon,
  title,
  subtitle,
}: SinglePromoProps) => {
  return (
    <div className="card single-promo-card single-promo-hover text-center shadow-sm">
      <div className="card-body py-5">
        <div className="pb-2">
          <Icon size={28} className="color-secondary" />
        </div>
        <div>
          <h5 className="mb-0">{title}</h5>
          <p className="text-muted mb-0">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
