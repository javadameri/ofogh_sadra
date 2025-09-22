import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout, TeamSingle } from "@/components";
import { teamMembers } from "@/constants/teamTwo";

interface TeamSinglePageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: TeamSinglePageProps): Promise<Metadata> {
  const member = teamMembers.find((m) => m.id === params.id);
  if (!member) {
    return {
      title: "عضو تیم یافت نشد",
      description: "عضو تیم با این شناسه وجود ندارد.",
    };
  }

  return {
    title: `${member.name} | داده پردازان افق آینده صدرا`,
    description: `با ${member.name}، ${member.role} ما آشنا شوید. ${member.description[0]}`,
    openGraph: {
      title: `${member.name} | داده پردازان افق آینده صدرا`,
      description: `با ${member.name}، ${member.role} ما آشنا شوید. ${member.description[0]}`,
      images: [member.image.src],
    },
  };
}

export const revalidate = 60;

export default function TeamSinglePage({ params }: TeamSinglePageProps) {
  const member = teamMembers.find((m) => m.id === params.id);
  if (!member) {
    notFound();
  }

  return (
    <Layout>
      <TeamSingle member={member} />
    </Layout>
  );
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}
