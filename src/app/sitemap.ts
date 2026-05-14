import type { MetadataRoute } from "next";

import { tools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((tool) => ({
    url:
      `https://converter-gold-psi.vercel.app/tools/${tool.slug}`,

    lastModified: new Date(),
  }));

  return [
    {
      url:
        "https://converter-gold-psi.vercel.app",

      lastModified: new Date(),
    },

    ...toolPages,
  ];
}