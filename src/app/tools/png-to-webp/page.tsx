// src/app/tools/png-to-webp/page.tsx

import UploadBox from "@/components/UploadBox";
import AdBanner from "@/components/AdBanner";

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-4">
        PNG to WEBP
      </h1>

      <p className="text-gray-400 mb-10">
        Convert PNG images into WEBP instantly.
      </p>

      <AdBanner slot="1234567890" />

      <UploadBox
        endpoint="/api/convert/webp"
        outputFileName="converted.webp"
        label="PNG to WEBP"
      />
    </main>
  );
}