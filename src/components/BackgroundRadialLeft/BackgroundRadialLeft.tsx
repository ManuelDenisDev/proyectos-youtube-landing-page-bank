import Image from "next/image";

import backgroundFloatedLeft from "../../../public/assets/background-floated-left.png";

export function BackgroundRadialLeft() {
  return (
    <div className="left-0 absolute -z-50 top-0">
      <Image src={backgroundFloatedLeft} alt="Circle Right" width={850} />
    </div>
  );
}
