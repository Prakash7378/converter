import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://convertfast.vercel.app",
      lastModified: new Date(),
    },

    {
      url:
        "https://convertfast.vercel.app/jpg-to-png",
      lastModified: new Date(),
    },
  ];
}