import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 pt-24">
        <h1 className="text-5xl font-bold mb-10">
          Privacy Policy
        </h1>

        <p className="text-gray-400 leading-8">
          We do not permanently store
          uploaded files. Images are
          processed securely and deleted
          automatically.
        </p>
      </div>
      <Footer />
    </main>
  );
}