import Image from "next/image";
import React from "react";

export const Logo: React.FC = () => {
  return (
    <Image
      data-test="icon"
      src="/icons/pagatodo.png"
      alt="nextjs"
      width="58"
      height="58"
    />
  );
};
