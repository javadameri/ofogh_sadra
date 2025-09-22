import dynamic from "next/dynamic";
const Layout = dynamic(
  () => import("@/components").then((module) => module.Layout),
  { ssr: false }
);
const ServicesDetails = dynamic(
  () => import("@/components").then((module) => module.ServicesDetails),
  { ssr: false }
);


export default function ServicesDetailsPage() {
  return (
    <div>
      <Layout>
        <ServicesDetails/>
      </Layout>
    </div>
  );
}