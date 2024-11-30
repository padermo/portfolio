import { Footer } from "../Banners";
import { CV, ScrollToTop } from "../Config";
import Navbar from "../Navbar";
import Alert from "../Config/Alert";
import type { Children } from "@/types/global.types";

export default function PageLayout({ children }: Children) {
  return (
    <div className="w-full flex flex-nowrap">
      <section className="shrink-0 w-full grid min-h-screen auto-cols-auto grid-content">
        <Navbar />
        <main className="row-start-2 row-end-3 relative">
          {children}
          <ScrollToTop />
          <CV />
          <Alert />
        </main>
        <Footer />
      </section>
    </div>
  )
}
