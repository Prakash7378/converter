export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
        <p>
          © 2026 ConvertFast. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <a href="/terms-and-conditions">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}