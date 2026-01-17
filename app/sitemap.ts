import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gemhog.org/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://gemhog.org/about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://gemhog.org/give",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://gemhog.org/media",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://gemhog.org/prayer",
      lastModified: new Date().toISOString(),
    },
  ];
}
