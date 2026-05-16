"use client";

import { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

interface Props {
  endpoint: string;
  outputFileName: string;
  label: string;
}

export default function UploadBox({
  endpoint,
  outputFileName,
  label,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (!file) return;

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      try {
        const response = await fetch(
          endpoint,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(
            "Conversion failed"
          );
        }

        const blob =
          await response.blob();

        const url =
          window.URL.createObjectURL(
            blob
          );

        const a =
          document.createElement("a");

        a.href = url;

        const disposition =
          response.headers.get(
            "Content-Disposition"
          );

        let filename =
          outputFileName;

        if (disposition) {
          const match =
            disposition.match(
              /filename="(.+)"/
            );

          if (match?.[1]) {
            filename =
              match[1];
          }
        }

        a.download = filename;

        document.body.appendChild(a);

        a.click();

        a.remove();

        window.URL.revokeObjectURL(
          url
        );
      } catch (error) {
        console.error(error);

        alert(
          "Conversion failed"
        );
      } finally {
        setLoading(false);
      }
    },
    [endpoint, outputFileName]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed p-16 rounded-3xl text-center cursor-pointer transition-all duration-300 ${
        isDragActive
          ? "border-blue-500 bg-blue-500/10"
          : "border-slate-700"
      }`}
    >
      <input {...getInputProps()} />

      {loading ? (
        <p className="text-lg">
          Converting...
        </p>
      ) : (
        <div>
          <p className="text-2xl font-bold mb-4">
            {label}
          </p>

          <p className="text-gray-400">
            Click or drag files here
          </p>
        </div>
      )}
    </div>
  );
}