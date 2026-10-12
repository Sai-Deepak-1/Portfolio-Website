import { ImageResponse } from "next/og";

export const alt = "[PLACEHOLDER] Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#e5eaff", color: "#101936", padding: "70px", fontFamily: "sans-serif" }}>
        <div style={{ position: "absolute", inset: "0", opacity: 0.45, backgroundImage: "linear-gradient(#cbd4fb 1px, transparent 1px), linear-gradient(90deg, #cbd4fb 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", width: "100%" }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: -2, fontWeight: 700 }}>P/01</div>
          <div style={{ display: "flex", maxWidth: 860, fontSize: 88, lineHeight: 0.9, letterSpacing: -7, fontWeight: 700 }}>[PLACEHOLDER] PORTFOLIO</div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 2, color: "#13266e" }}>ORIGINAL WORK / CLEAR SIGNALS</div>
        </div>
        <div style={{ position: "absolute", right: 90, top: 88, width: 180, height: 180, borderRadius: 90, border: "2px solid #101936", background: "#ffdcd5" }} />
        <div style={{ position: "absolute", right: 180, bottom: 82, width: 130, height: 130, border: "2px solid #101936", background: "#fff0b8", transform: "rotate(13deg)" }} />
      </div>
    ),
    size,
  );
}
