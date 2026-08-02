import Image from "next/image";

export default function PlaneSVG() {
  return (
    <Image
      src="/images/plane.svg"
      alt="Bosna Pusulası Uçağı"
      width={160}
      height={160}
      priority
      draggable={false}
      className="pointer-events-none select-none"
    />
  );
}