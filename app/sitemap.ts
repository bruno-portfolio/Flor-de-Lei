import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0 },
    { path: "/guia", priority: 0.9 },
    { path: "/sus", priority: 0.8 },
    { path: "/importacao", priority: 0.8 },
    { path: "/associacoes", priority: 0.8 },
    { path: "/seus-direitos", priority: 0.7 },
    { path: "/regulamentacao", priority: 0.7 },
    { path: "/uso-seguro", priority: 0.7 },
    { path: "/veterinario", priority: 0.6 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
