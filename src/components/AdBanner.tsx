"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface Props {
  slot: string;
}

export default function AdBanner({
  slot,
}: Props) {
  const adRef = useRef<HTMLModElement | null>(
    null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (
          adRef.current &&
          !adRef.current.getAttribute(
            "data-adsbygoogle-status"
          )
        ) {
          (
            window.adsbygoogle =
              window.adsbygoogle || []
          ).push({});
        }
      } catch (err) {
        console.error(err);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-10 w-full flex justify-center">
      <div className="w-full max-w-4xl min-h-[120px]">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: "block",
            width: "100%",
            minHeight: "120px",
          }}
          data-ad-client="ca-pub-5837904009035101"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}