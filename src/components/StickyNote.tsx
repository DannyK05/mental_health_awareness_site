import SunFlower from "@/assets/svgs/Sunflower";
export default function StickyNote({
  children,
  header,
}: Readonly<{ children: React.ReactNode; header: number | string }>) {
  return (
    <div className="sticky-note">
      <div className="sticky-note__content">
        <div className="sticky-note__header">
          <span className="sunflower">
            <SunFlower />
          </span>

          <h1>#{header}</h1>
        </div>
        <div className="sticky-note__text">{children}</div>
      </div>
    </div>
  );
}
