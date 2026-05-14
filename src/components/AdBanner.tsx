"use client";

import { useEffect } from "react";

interface Props {
  slot: string;
}

export default function AdBanner({
  slot,
}: Props) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle =
        (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="my-10 overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5837904009035101"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}