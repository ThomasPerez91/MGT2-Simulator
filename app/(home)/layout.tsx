import { Footer } from "./_components/footer";
import { Navbar } from "@/components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen bg-slate-100">
      <Navbar />
      <main
        className="relative bg-cover bg-center h-full flex justify-center align-center"
        style={{ backgroundImage: `url('/bg.jpeg')` }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
