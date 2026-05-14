import UploadBox from "@/components/UploadBox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "WEBP to JPG Converter",
  description:
    "Convert WEBP images to JPG online for free.",
};

export default function WEBPToJPGPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 pt-24">
        <h1 className="text-5xl font-bold text-center mb-10">
          WEBP to JPG Converter
        </h1>

        <UploadBox
          endpoint="/api/convert/jpg"
          outputFileName="converted.jpg"
          label="Drag & Drop WEBP File"
        />

        <section className="mt-20 space-y-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Convert WEBP to JPG Online
            </h2>

            <p className="text-gray-400 leading-8">
              Easily convert WEBP images
              into JPG format for better
              compatibility across
              devices and applications.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Convert WEBP to JPG?
            </h2>

            <p className="text-gray-400 leading-8">
              JPG is supported almost
              everywhere, making it ideal
              for sharing, editing and
              uploading images.
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
                Will image quality reduce?
              </h3>

              <p className="text-gray-400 mt-2">
                JPG compression may reduce
                image quality slightly,
                depending on the image.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Is this converter secure?
              </h3>

              <p className="text-gray-400 mt-2">
                Yes, uploaded images are
                processed instantly and
                not stored permanently.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}