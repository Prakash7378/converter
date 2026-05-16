export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400">
          © 2026 ConvertFast. All rights
          reserved.
        </p>

        <div className="flex gap-6 text-gray-400">
          <a href="/about">
            About
          </a>

          <a href="/contact">
            Contact
          </a>

          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <a href="/terms">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}