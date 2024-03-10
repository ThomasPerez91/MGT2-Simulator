import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import styles from "./styles/layout.module.scss";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className={styles["input-field"]}>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
