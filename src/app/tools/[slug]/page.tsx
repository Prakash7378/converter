import type { Metadata } from "next";

import { notFound } from "next/navigation";

import UploadBox from "@/components/UploadBox";
import AdBanner from "@/components/AdBanner";

import { tools } from "@/data/tools";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const tool = tools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: tool.name,

    description: tool.description,

    keywords: [
      tool.name,
      "image converter",
      "file converter",
      "online tools",
      "free converter",
    ],
  };
}

export default async function ToolPage({
  params,
}: Props) {
  const { slug } = await params;

  const tool = tools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    notFound();
  }

  const uploadTools = [
    "png",
    "jpg",
    "webp",
    "compress",
    "resize",
    "crop",
    "rotate",
    "blur",
    "grayscale",
    "ico",
    "pdf",
    "pngpdf",
  ];

  const isUploadTool =
    uploadTools.includes(tool.type);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            {tool.name}
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            {tool.description}
          </p>
        </div>

        <AdBanner slot="1234567890" />

        {isUploadTool ? (
          <div className="mt-14">
            <UploadBox
              endpoint={`/api/convert/${tool.type}`}
              outputFileName={`converted.${tool.type}`}
              label={`Drag & Drop File for ${tool.name}`}
            />
          </div>
        ) : (
          <div className="mt-14 bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Coming Soon
            </h2>

            <p className="text-gray-400 leading-8">
              This tool is currently under
              development and will be added
              soon.
            </p>
          </div>
        )}

        <div className="mt-20 bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6">
            About {tool.name}
          </h2>

          <p className="text-gray-400 leading-8">
            ConvertFast provides free online
            tools for image conversion, PDF
            conversion and productivity tasks.
            Our platform is optimized for
            speed, security and ease of use.
          </p>
        </div>

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-6">
            Why Use ConvertFast?
          </h2>

          <ul className="space-y-4 text-gray-400">
            <li>
              ✅ Free online tools
            </li>

            <li>
              ✅ Fast processing
            </li>

            <li>
              ✅ Mobile friendly
            </li>

            <li>
              ✅ No registration required
            </li>

            <li>
              ✅ Secure file handling
            </li>
          </ul>
        </div>

        <AdBanner slot="9876543210" />
      </section>
    </main>
  );
}