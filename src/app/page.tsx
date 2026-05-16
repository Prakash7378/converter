import Link from "next/link";

import { tools } from "@/data/tools";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <section className="text-center mb-20">
        <h1 className="text-6xl font-bold mb-6">
          Free Online Image Tools
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto">
          Convert, compress, resize and edit
          images instantly using ConvertFast.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">
              {tool.name}
            </h2>

            <p className="text-gray-400">
              Use this tool instantly online.
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}