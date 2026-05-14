import Link from "next/link";

import { tools } from "@/data/tools";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl md:text-7xl font-black leading-tight">
          Free Online
          <span className="text-blue-500">
            {" "}
            File Tools
          </span>
        </h1>

        <p className="text-gray-400 mt-8 text-xl max-w-3xl mx-auto leading-8">
          ConvertFast provides free online image,
          PDF and utility tools for creators,
          developers and businesses.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition"
            >
              <h2 className="text-2xl font-bold mb-4">
                {tool.name}
              </h2>

              <p className="text-gray-400 leading-7">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}