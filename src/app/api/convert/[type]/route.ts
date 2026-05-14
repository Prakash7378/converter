import {
  compressImage,
  convertToJPG,
  convertToPNG,
  convertToWEBP,
} from "@/lib/converter";

export async function POST(
  req: Request,
  context: {
    params: Promise<{
      type: string;
    }>;
  }
) {
  try {
    const { type } = await context.params;

    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return new Response(
        "No file uploaded",
        {
          status: 400,
        }
      );
    }

    const bytes =
      await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    let converted: Buffer;

    let contentType = "";

    let fileName = "";

    switch (type) {
      case "png":
        converted =
          await convertToPNG(buffer);

        contentType = "image/png";

        fileName = "converted.png";

        break;

      case "webp":
        converted =
          await convertToWEBP(buffer);

        contentType = "image/webp";

        fileName = "converted.webp";

        break;

      case "jpg":
        converted =
          await convertToJPG(buffer);

        contentType = "image/jpeg";

        fileName = "converted.jpg";

        break;

      case "compress":
        converted =
          await compressImage(buffer);

        contentType = "image/jpeg";

        fileName = "compressed.jpg";

        break;

      default:
        return new Response(
          "Invalid conversion type",
          {
            status: 400,
          }
        );
    }

    return new Response(
      new Uint8Array(converted),
      {
        headers: {
          "Content-Type":
            contentType,

          "Content-Disposition":
            `attachment; filename=${fileName}`,
        },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      "Conversion failed",
      {
        status: 500,
      }
    );
  }
}