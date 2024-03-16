import Image from "next/image";
import localFont from "next/font/local";
import styles from "./styles/logo.module.css";

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
          `${width === 64 ? "text-lg" : "text-sm"}`,
          headingFont.className
        )}
      >
        <span className={styles.redTextStroke}>MAD </span>
        <span className={styles.blueTextStroke}>GAMES TYCOON </span>
        <span className={styles.redTextStroke}>2 </span>
        <span className="text-slate-200"> - SIMULATOR </span>
      </p>
    </div>
  );
};

export default Logo;
