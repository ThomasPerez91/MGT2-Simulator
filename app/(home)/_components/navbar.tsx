import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Link href="/">
          <Logo width={64} height={64} />
        </Link>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="primary" asChild>
            <Link href="/sign-in">Par genre</Link>
          </Button>
          <Button size="sm" variant="primary" asChild>
            <Link href="/sign-up">Par thème</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
