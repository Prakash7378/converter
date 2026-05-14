import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 pt-24">
        <h1 className="text-5xl font-bold mb-10">
          Terms & Conditions
        </h1>

        <p className="text-gray-400 leading-8">
          By using this website, you
          agree to use our tools
          responsibly and legally.
        </p>
      </div>
      <Footer />
    </main>
  );
}