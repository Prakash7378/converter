import UploadBox from "@/components/UploadBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Compress Image Online",
  description:
    "Compress image size online for free.",
};

export default function CompressPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 pt-24">
        <h1 className="text-5xl font-bold text-center mb-10">
          Compress Image
        </h1>

        <UploadBox
          endpoint="/api/convert/compress"
          outputFileName="compressed.jpg"
          label="Drag & Drop Image"
        />

        <section className="mt-20 space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Compress Images Online
            </h2>

            <p className="text-gray-400 leading-8">
              Reduce image file size
              instantly online without
              losing too much quality.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Compress Images?
            </h2>

            <p className="text-gray-400 leading-8">
              Smaller images improve
              website speed, SEO rankings
              and reduce bandwidth usage.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-4xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">
                Does compression reduce
                quality?
              </h3>

              <p className="text-gray-400 mt-2">
                Slightly, but we optimize
                compression to maintain
                good visual quality.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Is this tool free?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, image compression is
                completely free.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}