import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollTop from "../config/ScrollTop";
import ConfigThemeAnt from "./ConfigThemeAnt";
import type { Children } from "@/types/generals";

export default function PageLayout({ children }: Children) {
  return (
    <ConfigThemeAnt>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
      <ScrollTop />
    </ConfigThemeAnt>
  );
}
