import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-32 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500">
          © 2026 ConvertFast
        </p>

        <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/terms">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}