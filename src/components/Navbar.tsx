import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* LOGO */}

        <Link
          href="/"
          className="text-3xl font-bold text-blue-500"
        >
          ConvertFast
        </Link>

        {/* NAV LINKS */}

        <div className="flex gap-6 text-gray-300 text-sm md:text-base">
          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/tools/jpg-to-png"
            className="hover:text-white transition"
          >
            JPG → PNG
          </Link>

          <Link
            href="/tools/png-to-webp"
            className="hover:text-white transition"
          >
            PNG → WEBP
          </Link>

          <Link
            href="/tools/webp-to-jpg"
            className="hover:text-white transition"
          >
            WEBP → JPG
          </Link>

          <Link
            href="/tools/compress-image"
            className="hover:text-white transition"
          >
            Compress
          </Link>
        </div>
      </div>
    </nav>
  );
}