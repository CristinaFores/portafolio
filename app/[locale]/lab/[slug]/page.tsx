import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { LabDetailContent } from "@/components/sections/LabDetailContent/lab-detail-content";
import { toLocale } from "@/i18n/locale";
import { getLabProject, LAB_PROJECTS } from "@/lib/data/lab-projects";
import { ROUTES } from "@/lib/routes";
import { localeAlternates } from "@/lib/seo";
import { PROFILE } from "@/lib/site-config";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return LAB_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = toLocale(rawLocale);
  const project = getLabProject(slug);
  const t = await getTranslations({ locale, namespace: "lab" });

  if (!project) return {};

  return {
    title: `${project.name} — Lab — ${PROFILE.name}`,
    description: t(`projects.${slug}.tagline`),
    alternates: localeAlternates(locale, ROUTES.labProject(slug)),
  };
}

export default async function LabProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getLabProject(slug);

  if (!project) notFound();

  return <LabDetailContent slug={slug} />;
}
