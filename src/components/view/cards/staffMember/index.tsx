import { TeamMember } from "@/library";
import Image from "next/image";

interface StaffMemberProps {
  member: TeamMember;
}

export const StaffMember = ({ member }: StaffMemberProps) => {
  return (
    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
      <div className="card text-center border-0 shadow-sm">
        <Image
          src={member.image.src}
          alt={member.image.alt}
          width={120}
          height={120}
          className="img-fluid m-auto pt-4 rounded-circle"
          sizes="(max-width: 768px) 100vw, 360px"
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="teacher mb-0">{member.name}</h5>
          <span>{member.role}</span>
          <p className="teacher-quote text-left pt-3">{member.quote}</p>
        </div>
      </div>
    </div>
  );
};
