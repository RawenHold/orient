import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { PhaseDetail } from "@/components/PhaseDetail";
import { TopNav } from "@/components/TopNav";
import { phases } from "@/data/phases";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return phases.map((phase) => ({ id: String(phase.id) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const phase = phases.find((item) => item.id === Number(id));

  if (!phase) {
    return { title: "Этап не найден — Orient UBook" };
  }

  return {
    title: `Этап ${phase.id}: ${phase.title} — Orient UBook`,
    description: phase.summary,
  };
}

export default async function StagePage({ params }: PageProps) {
  const { id } = await params;
  const phase = phases.find((item) => item.id === Number(id));

  if (!phase) notFound();

  return (
    <main>
      <TopNav active="phases" />
      <PhaseDetail phase={phase} />
      <Footer />
    </main>
  );
}
