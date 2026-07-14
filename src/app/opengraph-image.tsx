import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Luiz Gabriel | Software Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "#FAFAFA",
          position: "relative",
          padding: "80px",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "30%",
            width: "600px",
            height: "600px",
            background: "rgba(37, 99, 235, 0.12)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />

        {/* Decorative Grid Lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.8,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "900px",
          }}
        >
          {/* Header indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: "#2563EB",
                boxShadow: "0 0 10px rgba(37, 99, 235, 0.5)",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#2563EB",
                letterSpacing: "4px",
              }}
            >
              PORTFÓLIO PROFISSIONAL
            </span>
          </div>

          {/* Luiz Gabriel Name */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-3px",
              color: "#FAFAFA",
            }}
          >
            Luiz Gabriel
          </h1>
          
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 400,
              margin: "5px 0 24px 0",
              color: "#A1A1AA",
              letterSpacing: "-1px",
            }}
          >
            do Amor Divino Souza
          </h1>

          {/* Headline */}
          <h2
            style={{
              fontSize: "32px",
              color: "#38BDF8",
              fontWeight: 600,
              margin: "0 0 32px 0",
              fontFamily: "monospace",
            }}
          >
            const role = &quot;Software Developer&quot;
          </h2>

          {/* Brief Bio */}
          <p
            style={{
              fontSize: "22px",
              color: "#A1A1AA",
              margin: 0,
              maxWidth: "720px",
              lineHeight: 1.5,
            }}
          >
            Especialista em APIs seguras com NestJS/TypeScript, bancos de dados PostgreSQL, ambientes conteinerizados em Docker e interfaces dinâmicas com Next.js.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
