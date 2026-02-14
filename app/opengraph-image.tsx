import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Flor de Lei — Guia gratuito de acesso à cannabis medicinal no Brasil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FEFAE0",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <span style={{ fontSize: "120px", lineHeight: 1 }}>🌿</span>

          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#2D5016",
              lineHeight: 1.1,
            }}
          >
            Flor de Lei
          </span>

          <span
            style={{
              fontSize: "32px",
              color: "#4A3728",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Guia gratuito de acesso à cannabis medicinal no Brasil
          </span>

          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "16px",
              fontSize: "20px",
              color: "#6B5344",
            }}
          >
            <span>100% gratuito</span>
            <span>•</span>
            <span>Sem coleta de dados</span>
            <span>•</span>
            <span>Código aberto</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
