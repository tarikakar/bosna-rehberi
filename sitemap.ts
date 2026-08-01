import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://bosna-rehberi.vercel.app",
      lastModified: new Date(),
    },


    {
      url: "https://bosna-rehberi.vercel.app/rezervasyon",
      lastModified: new Date(),
    },

  ];

}