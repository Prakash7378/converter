import { notFound } from "next/navigation";

import UploadBox from "@/components/UploadBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

import { tools } from "@/data/tools";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const tool = tools.find(
    (t) => t.slug === slug
  );

  if (!tool) {
    return {};
  }

  return {
    title: tool.title,

    description: tool.description,
  };
}

export default async function ToolPage({
  params,
}: Props) {
  const { slug } = await params;

  const tool = tools.find(
    (t) => t.slug === slug
  );

  if (!tool) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 pt-24">
        <h1 className="text-5xl font-bold text-center mb-10">
          {tool.title}
        </h1>

        <UploadBox
          endpoint={tool.endpoint}
          outputFileName={tool.output}
          label={tool.label}
        />

        <AdBanner slot="1234567890" />

        <section className="mt-20 space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {tool.title}
            </h2>

            <p className="text-gray-400 leading-8">
              {tool.description}
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}