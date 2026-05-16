import { NextRequest } from "next/server";
import sharp from "sharp";

export async function POST(
  req: NextRequest,
  context: {
    params: Promise<{
      type: string;
    }>;
  }
) {
  try {
    const { type } = await context.params;

    const formData = await req.formData();

    const file = formData.get(
      "file"
    ) as File;

    if (!file) {
      return Response.json(
        {
          error: "No file uploaded",
        },
        {
          status: 400,
        }
      );
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    let converted: Buffer;
    let contentType = "image/png";
    let extension = "png";

    switch (type) {
      case "png":
        converted = await sharp(buffer)
          .png()
          .toBuffer();

        contentType = "image/png";
        extension = "png";
        break;

      case "jpg":
        converted = await sharp(buffer)
          .jpeg()
          .toBuffer();

        contentType = "image/jpeg";
        extension = "jpg";
        break;

      case "webp":
        converted = await sharp(buffer)
          .webp()
          .toBuffer();

        contentType = "image/webp";
        extension = "webp";
        break;

      case "compress":
        converted = await sharp(buffer)
          .jpeg({
            quality: 60,
          })
          .toBuffer();

        contentType = "image/jpeg";
        extension = "jpg";
        break;

      case "resize":
        converted = await sharp(buffer)
          .resize(800)
          .png()
          .toBuffer();

        contentType = "image/png";
        extension = "png";
        break;

      case "rotate":
        converted = await sharp(buffer)
          .rotate(90)
          .png()
          .toBuffer();

        contentType = "image/png";
        extension = "png";
        break;

      case "grayscale":
        converted = await sharp(buffer)
          .grayscale()
          .png()
          .toBuffer();

        contentType = "image/png";
        extension = "png";
        break;

      case "blur":
        converted = await sharp(buffer)
          .blur(5)
          .png()
          .toBuffer();

        contentType = "image/png";
        extension = "png";
        break;

      default:
        return Response.json(
          {
            error: "Invalid type",
          },
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

          "Content-Disposition": `attachment; filename="converted.${extension}"`,
        },
      }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed",
      },
      {
        status: 500,
      }
    );
  }
}