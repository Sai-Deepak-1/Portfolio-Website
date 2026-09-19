import Content from "./Content";

export default function Footer() {
  return (
    <div className="relative h-[700px] md:h-[575px]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
      <div className="fixed bottom-0 h-[700px] w-full md:h-[575px]">
        <Content />
      </div>
    </div>
  );
}
