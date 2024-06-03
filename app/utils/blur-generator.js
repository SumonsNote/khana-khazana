import { getPlaiceholder } from "plaiceholder";

async function getBlurData(src) {
  try {
    // Fetch the image data from the source URL
    const response = await fetch(src);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch image from source: ${response.statusText}`
      );
    }

    // Convert the response to an ArrayBuffer and then to a Buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Get the placeholder data
    const { base64, img } = await getPlaiceholder(buffer);

    return { base64, img };
  } catch (error) {
    throw new Error("Error generating placeholder");
  }
}

export { getBlurData };
