import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function OldPhasePage({ params }: PageProps) {
  const { id } = await params;
  redirect(`/stages/${id}`);
}
