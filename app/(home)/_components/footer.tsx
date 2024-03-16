import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 z-10 w-full p-1 bg-slate-900">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo width={32} height={32} />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full text-slate-100">
          <Button size="sm" variant="ghost">
            <Link href="/">Privacy Policy</Link>
          </Button>
          <Button size="sm" variant="ghost">
            <Link href="/">Terms of Service</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
