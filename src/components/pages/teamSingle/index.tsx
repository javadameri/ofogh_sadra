import { TeamMember } from "@/library";
import {
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCaretLeft,
} from "@tabler/icons-react";
import Image from "next/image";

interface TeamSingleProps {
  member: TeamMember;
}

export const TeamSingle = ({ member }: TeamSingleProps) => {
  return (
    <main className="main">
      {/* Team Single Section */}
      <section className="team-single-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-12 col-lg-5">
              <div className="team-single-img">
                <Image
                  width="530"
                  height="530"
                  src={member.image.src}
                  alt={member.image.alt}
                  className="img-fluid rounded shadow-sm"
                  sizes="(max-width: 768px) 100vw, 530px"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-6">
              <div className="team-single-text">
                <div className="team-name mb-4">
                  <h4 className="mb-1">{member.name}</h4>
                  <span>{member.role}</span>
                </div>
                <ul className="team-single-info">
                  <li>
                    <strong>تلفن: </strong>
                    <span dir="ltr">{member.phone}</span>
                  </li>
                  <li>
                    <strong>ایمیل: </strong>
                    <a href={`mailto:${member.email}`} dir="ltr">
                      {member.email}
                    </a>
                  </li>
                </ul>
                <div className="text-content mt-20">
                  {member.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <ul className="team-social-list list-inline mt-4">
                  {member.socialLinks.facebook && (
                    <li className="list-inline-item">
                      <a
                        href={member.socialLinks.facebook}
                        className="color-primary"
                        aria-label={`فیسبوک ${member.name}`}
                      >
                        <IconBrandFacebook size={24} aria-hidden="true" />
                      </a>
                    </li>
                  )}
                  {member.socialLinks.instagram && (
                    <li className="list-inline-item">
                      <a
                        href={member.socialLinks.instagram}
                        className="color-primary"
                        aria-label={`اینستاگرام ${member.name}`}
                      >
                        <IconBrandInstagram size={24} aria-hidden="true" />
                      </a>
                    </li>
                  )}
                  {member.socialLinks.dribbble && (
                    <li className="list-inline-item">
                      <a
                        href={member.socialLinks.dribbble}
                        className="color-primary"
                        aria-label={`دریبل ${member.name}`}
                      >
                        <IconBrandDribbble size={24} aria-hidden="true" />
                      </a>
                    </li>
                  )}
                  {member.socialLinks.linkedin && (
                    <li className="list-inline-item">
                      <a
                        href={member.socialLinks.linkedin}
                        className="color-primary"
                        aria-label={`لینکدین ${member.name}`}
                      >
                        <IconBrandLinkedin size={24} aria-hidden="true" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-6 col-12">
              <div className="section-heading">
                <h5>فعالیت‌ها و مهارت‌ها</h5>
                <div className="section-heading-line-left"></div>
              </div>
              <ul className="list-unstyled tech-feature-list">
                {member.activities.length > 0 ? (
                  member.activities.map((activity, index) => (
                    <li key={index} className="py-1">
                      <span className="me-2 color-secondary">
                        <IconCaretLeft size={18} aria-hidden="true" />
                      </span>
                      {activity}
                    </li>
                  ))
                ) : (
                  <li className="py-1">فعالیتی ثبت نشده است.</li>
                )}
              </ul>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
              <div className="section-heading mt-40">
                <h5>مهارت‌های حرفه‌ای</h5>
                <div className="section-heading-line-left"></div>
              </div>
              <div className="skill-content-wrap">
                <p>
                  {member.description[0] ||
                    "متخصص در ارائه راه‌حل‌های نوآورانه برای رشد کسب‌وکار."}
                </p>
                {member.skills.length > 0 ? (
                  member.skills.map((skill, index) => (
                    <div key={index} className="progress-item">
                      <div className="progress-title">
                        <h6>
                          {skill.name}{" "}
                          <span className="float-left">
                            <span className="progress-number">
                              {skill.percentage}
                            </span>{" "}
                            %
                          </span>
                        </h6>
                      </div>
                      <div className="progress">
                        <span style={{ width: `${skill.percentage}%` }}>
                          <span className="progress-line"></span>
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>مهارتی ثبت نشده است.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Section */}
      <div className="customer-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="client-section-wrap d-flex flex-row align-items-center">
                <p className="lead mr-5 mb-0">مورد اعتماد شرکت‌هایی مانند:</p>
                <ul className="list-inline justify-content-between">
                  {[
                    "/img/clients-logo-01.png",
                    "/img/clients-logo-02.png",
                    "/img/clients-logo-03.png",
                    "/img/clients-logo-04.png",
                    "/img/clients-logo-05.png",
                    "/img/clients-logo-06.png",
                  ].map((src, index) => (
                    <li key={index} className="list-inline-item">
                      <Image
                        src={src}
                        width={85}
                        height={85}
                        alt={`لوگوی مشتری ${index + 1}`}
                        className="img-fluid"
                        sizes="85px"
                        loading="lazy"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
