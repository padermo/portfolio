import { Footer } from "../Banners";
import { CV, ScrollToTop } from "../Config";
import Navbar from "../Navbar";
import Alert from "../Config/Alert";
import type { Children } from "@/types/global.types";

export default function PageLayout({ children }: Children) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto relative">
        {children}
        <ScrollToTop />
        <CV />
        <Alert />
      </main>
      <Footer />
    </>
  )
}
