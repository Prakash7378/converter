import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-slate-800">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        ConvertFast
      </Link>

      <div className="flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">
          Privacy
        </Link>
        <Link href="/terms">Terms</Link>
      </div>
    </nav>
  );
}