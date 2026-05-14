import UploadBox from "@/components/UploadBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

export const metadata = {
  title: "JPG to PNG Converter",
  description:
    "Convert JPG images to PNG online for free.",
};

export default function JPGToPNGPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 pt-24">
        {/* PAGE TITLE */}

        <h1 className="text-5xl font-bold text-center mb-10">
          JPG to PNG Converter
        </h1>

        {/* UPLOAD BOX */}

        <UploadBox
          endpoint="/api/convert/png"
          outputFileName="converted.png"
          label="Drag & Drop JPG File"
        />

        {/* AD BANNER */}

        <AdBanner slot="1234567890" />

        {/* SEO CONTENT */}

        <section className="mt-20 space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Convert JPG to PNG Online
            </h2>

            <p className="text-gray-400 leading-8">
              Use our free JPG to PNG
              converter to transform
              images instantly online
              without installing any
              software.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Use PNG Format?
            </h2>

            <p className="text-gray-400 leading-8">
              PNG images support
              transparency and high
              quality compression,
              making them ideal for
              logos and graphics.
            </p>
          </div>
        </section>

        {/* FAQ */}

        <section className="mt-20">
          <h2 className="text-4xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">
                Is this converter free?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, it is completely
                free to use.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Are uploaded files stored?
              </h3>

              <p className="text-gray-400 mt-2">
                No, files are processed
                instantly and not stored.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}