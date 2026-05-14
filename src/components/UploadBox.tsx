"use client";

import { useState } from "react";

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

  const [success, setSuccess] =
    useState(false);

  const [fileName, setFileName] =
    useState("");

  const [preview, setPreview] =
    useState("");

  const onDrop = async (
    acceptedFiles: File[]
  ) => {
    try {
      setLoading(true);

      setSuccess(false);

      const file = acceptedFiles[0];

      if (!file.type.startsWith("image/")) {
        alert("Please upload an image");

        setLoading(false);

        return;
      }

      const MAX_SIZE =
        5 * 1024 * 1024;

      if (file.size > MAX_SIZE) {
        alert(
          "File size must be under 5MB"
        );

        setLoading(false);

        return;
      }

      setFileName(file.name);

      setPreview(
        URL.createObjectURL(file)
      );

      const formData = new FormData();

      formData.append("file", file);

      const response = await fetch(
        endpoint,
        {
          method: "POST",
          body: formData,
        }
      );

      const blob =
        await response.blob();

      const url =
        window.URL.createObjectURL(
          blob
        );

      const a =
        document.createElement("a");

      a.href = url;

      a.download = outputFileName;

      a.click();

      URL.revokeObjectURL(url);

      setSuccess(true);
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong while converting the image."
      );
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps } =
    useDropzone({
      onDrop,

      accept: {
        "image/*": [],
      },

      multiple: false,
    });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-blue-500 p-20 rounded-3xl text-center cursor-pointer hover:bg-slate-900 transition bg-slate-950"
    >
      <input {...getInputProps()} />

      {preview && !loading && (
        <img
          src={preview}
          alt="preview"
          className="max-h-64 mx-auto rounded-2xl mb-6"
        />
      )}

      {!loading && (
        <>
          <p className="text-2xl font-bold">
            {label}
          </p>

          <p className="text-gray-400 mt-4">
            or click to browse
          </p>
        </>
      )}

      {fileName && !loading && (
        <p className="mt-6 text-blue-400">
          Selected: {fileName}
        </p>
      )}

      {loading && (
        <div>
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>

          <p className="mt-6">
            Processing image...
          </p>
        </div>
      )}

      {success && !loading && (
        <p className="mt-6 text-green-500">
          Image converted successfully!
        </p>
      )}
    </div>
  );
}