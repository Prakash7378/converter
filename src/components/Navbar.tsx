import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-black text-blue-500"
        >
          ConvertFast
        </Link>

        <div className="flex gap-6 text-sm md:text-base text-gray-300 overflow-x-auto">
          <Link href="/">Home</Link>
          <Link href="/tools/jpg-to-png">JPG</Link>
          <Link href="/tools/png-to-webp">WEBP</Link>
          <Link href="/tools/compress-image">Compress</Link>
          <Link href="/tools/qr-generator">QR</Link>
        </div>
      </div>
    </nav>
  );
}