import { StaffMember } from "@/components/view";
import { TeamMember } from "@/library";

interface TeamTwoSectionProps {
  subtitle: string;
  title: string;
  description: string;
  members: TeamMember[];
}

export const TeamTwoSection = ({
  subtitle,
  title,
  description,
  members,
}: TeamTwoSectionProps) => {
  return (
    <section className="team-two-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8">
            <div className="section-heading text-center mb-5">
              <strong className="color-secondary">{subtitle}</strong>
              <h2>{title}</h2>
              <span className="animate-border mx-auto mb-4"></span>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {members.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-3 col-sm-6">
              <StaffMember member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
