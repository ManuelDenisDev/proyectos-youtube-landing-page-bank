import Image from "next/image";

import backgroundFloatedRight from "../../../public/assets/background-floated-right.png";

export function BackgroundRadialRight() {
  return (
    <div className="right-0 absolute -z-50 top-0">
      <Image src={backgroundFloatedRight} alt="Circle Right" width={850} />
    </div>
  );
}
