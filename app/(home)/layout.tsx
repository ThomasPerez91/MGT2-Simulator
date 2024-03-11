import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen bg-slate-100">
      <Navbar />
      <main
        id="pouet"
        className="relative bg-cover bg-center filter blur-xs h-full"
        style={{ backgroundImage: `url('/bg.jpeg')` }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
