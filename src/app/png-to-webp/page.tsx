import UploadBox from "@/components/UploadBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "PNG to WEBP Converter",
  description:
    "Convert PNG images to WEBP online for free.",
};

export default function PNGToWEBPPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 pt-24">
        <h1 className="text-5xl font-bold text-center mb-10">
          PNG to WEBP Converter
        </h1>

        <UploadBox
          endpoint="/api/convert/webp"
          outputFileName="converted.webp"
          label="Drag & Drop PNG File"
        />

        <section className="mt-20 space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Convert PNG to WEBP Online
            </h2>

            <p className="text-gray-400 leading-8">
              Convert PNG images into
              WEBP format instantly for
              faster websites and smaller
              file sizes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Use WEBP?
            </h2>

            <p className="text-gray-400 leading-8">
              WEBP images provide high
              quality while reducing file
              sizes significantly,
              improving website loading
              speed and SEO performance.
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
                Is WEBP better than PNG?
              </h3>

              <p className="text-gray-400 mt-2">
                WEBP often provides much
                smaller file sizes while
                keeping similar image
                quality.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Is this converter free?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, this converter is
                completely free to use.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}