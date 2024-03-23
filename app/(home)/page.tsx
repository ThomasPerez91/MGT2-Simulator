import Link from "next/link";
import LocalFont from "next/font/local";
import { Poppins } from "next/font/google";
import styles from "@/components/styles/logo.module.css";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = LocalFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col backdrop-blur-xs">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-3xl md:text-6xl text-center text-slate-100 mb-6">
          Welcome to <span className={styles.redTextStroke}>M</span>
          <span className={styles.blueTextStroke}>GT</span>
          <span className={styles.redTextStroke}>2</span> - Simulator, your
          ultimate companion
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-indigo-800 to-purple-200 text-white px-4 p-2 rounded-md pb-4 w-fit">
          for optimizing game setups
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-100 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Whether you're fine-tuning graphics, balancing gameplay mechanics, or
        optimizing performance, our simulator equips game developers with the
        insights and tools needed to create exceptional gaming experiences.
      </div>
      <div className="gap-6 mt-6 flex justify-between align-center">
        <Button size="lg" asChild>
          <Link href="/genre">Create by genre</Link>
        </Button>
        <Button size="lg" asChild>
          <Link href="/theme">Create by theme</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
