// src/app/tools/blur-image/page.tsx

import UploadBox from "@/components/UploadBox";
import AdBanner from "@/components/AdBanner";

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-4">
        Blur Image
      </h1>

      <p className="text-gray-400 mb-10">
        Blur images online instantly.
      </p>

      <AdBanner slot="1234567890" />

      <UploadBox
        endpoint="/api/convert/blur"
        outputFileName="blurred.png"
        label="Blur Image"
      />
    </main>
  );
}