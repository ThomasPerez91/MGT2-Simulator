import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const Logo = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="hover:opacity-85 transition items-center gap-x-2 hidden md:flex">
      <Image src="/logo.png" alt="Logo" width={width} height={height} />
      <p
        className={cn(
          `${width === 64 ? "text-lg" : "text-sm"} text-neutral-700`,
          headingFont.className
        )}
      >
        {" "}
        Mad Games Tycoon 2 - Simulator
      </p>
    </div>
  );
};

export default Logo;
