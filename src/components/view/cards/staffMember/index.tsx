import { TeamMember } from "@/library";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandDribbble,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface StaffMemberProps {
  member: TeamMember;
}

export const StaffMember = ({ member }: StaffMemberProps) => {
  const getSocialIcon = (platform: keyof TeamMember["socialLinks"]) => {
    switch (platform) {
      case "facebook":
        return <IconBrandFacebook size={18} aria-hidden="true" />;
      case "linkedin":
        return <IconBrandLinkedin size={18} aria-hidden="true" />;
      case "dribbble":
        return <IconBrandDribbble size={18} aria-hidden="true" />;
      case "instagram":
        return <IconBrandInstagram size={18} aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <div className="staff-member my-md-3 my-lg-3 my-sm-0">
      <div className="card text-center border-0 shadow-sm">
        <Image
          src={member.image.src}
          alt={member.image.alt}
          width="120"
          height="120"
          className="img-fluid m-auto pt-4 rounded-circle"
          sizes="(max-width: 768px) 100vw, 360px"
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="teacher mb-0">{member.name}</h5>
          <span>{member.role}</span>
          <p className="teacher-quote pt-3">{member.quote}</p>
          <ul className="list-inline pt-2 social">
            {Object.entries(member.socialLinks).map(([platform, url]) =>
              url ? (
                <li key={platform} className="list-inline-item">
                  <Link
                    href={url}
                    target="_blank"
                    aria-label={`${platform} ${member.name}`}
                  >
                    {getSocialIcon(platform as keyof TeamMember["socialLinks"])}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
      <div className="overlay d-flex align-items-center justify-content-center">
        <div className="overlay-inner text-center">
          <p className="teacher-quote">{member.quote}</p>
          <Link href={`/team/${member.id}`} className="teacher-name">
            <h5 className="mb-0 teacher text-white">{member.name}</h5>
          </Link>
          <span className="teacher-field text-white">{member.role}</span>
          <ul className="list-inline py-4 social">
            {Object.entries(member.socialLinks).map(([platform, url]) =>
              url ? (
                <li key={platform} className="list-inline-item">
                  <Link
                    href={url}
                    target="_blank"
                    aria-label={`${platform} ${member.name}`}
                  >
                    {getSocialIcon(platform as keyof TeamMember["socialLinks"])}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
          <p className="teacher-see-profile">
            <Link href={`/team/${member.id}`} className="btn outline-white-btn">
              نمایه من را مشاهده کنید
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
