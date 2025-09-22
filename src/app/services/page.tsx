import dynamic from "next/dynamic";
const Layout = dynamic(
  () => import("@/components").then((module) => module.Layout),
  { ssr: false }
);
const Services = dynamic(
  () => import("@/components").then((module) => module.Services),
  { ssr: false }
);


export default function ServicesPage() {
  return (
    <div>
      <Layout>
        <Services/>
      </Layout>
    </div>
  );
}