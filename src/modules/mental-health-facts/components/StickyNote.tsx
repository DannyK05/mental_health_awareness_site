import Bud from "@/assets/svgs/sunflower-head.svg";
import Image from "next/image";
export default function StickyNote({
  children,
  no,
}: Readonly<{ children: React.ReactNode; no: number }>) {
  return (
    <div className="sticky-note">
      <div className="sticky-note__content">
        <div className="sticky-note__header">
          <Image src={Bud} alt="Sunflower-bud" width={20} height={20} />
          <h1>#{no}</h1>
        </div>
        <div className="sticky-note__text">{children}</div>
      </div>
    </div>
  );
}
