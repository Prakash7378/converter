import sharp from "sharp";

export async function convertToPNG(
  buffer: Buffer
) {
  return sharp(buffer)
    .png()
    .toBuffer();
}

export async function convertToWEBP(
  buffer: Buffer
) {
  return sharp(buffer)
    .webp()
    .toBuffer();
}

export async function convertToJPG(
  buffer: Buffer
) {
  return sharp(buffer)
    .jpeg()
    .toBuffer();
}

export async function compressImage(
  buffer: Buffer
) {
  return sharp(buffer)
    .jpeg({
      quality: 50,
    })
    .toBuffer();
}