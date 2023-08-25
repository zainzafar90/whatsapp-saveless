import { ImageResponse } from "next/server";
export const runtime = "edge";

export async function GET() {
  const image = await fetch(
    new URL("./opengraph-image.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  // Convert the ArrayBuffer to a base64 string
  const base64Image = Buffer.from(image).toString("base64");

  // Create a data URL for the image
  const imageData = `data:image/png;base64,${base64Image}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width="1200"
          height="630"
          src={imageData}
          alt="Saveless Whatsapp"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
