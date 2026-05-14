import Link from "next/link";

const tools = [
  {
    title: "JPG to PNG",
    href: "/tools/jpg-to-png",
  },

  {
    title: "PNG to WEBP",
    href: "/tools/png-to-webp",
  },

  {
    title: "WEBP to JPG",
    href: "/tools/webp-to-jpg",
  },

  {
    title: "Compress Image",
    href: "/tools/compress-image",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}

      <section className="text-center py-28 px-6">
        <h1 className="text-6xl font-bold leading-tight">
          Free Online File Converter
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Convert JPG, PNG, WEBP and more
          instantly online for free.
        </p>
      </section>

      {/* TOOL GRID */}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="
                bg-slate-900
                hover:bg-slate-800
                border border-slate-800
                p-8
                rounded-3xl
                transition
                hover:scale-105
              "
            >
              <h2 className="text-2xl font-bold">
                {tool.title}
              </h2>

              <p className="mt-4 text-gray-400">
                Free online converter
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="max-w-4xl mx-auto px-6 pb-32">
        <h2 className="text-4xl font-bold mb-8">
          Fast & Free Image Conversion
        </h2>

        <p className="text-gray-400 leading-8 text-lg">
          Convert image files online instantly
          without installing software. Our
          free converter supports JPG, PNG,
          WEBP and image compression tools.
        </p>
      </section>
    </main>
  );
}