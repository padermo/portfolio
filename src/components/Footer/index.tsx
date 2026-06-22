import { Contact } from "../Banners/Contact";
import { Network } from "../Banners/Network";

export default function Footer() {
  return (
    <footer className="py-5 md:py-10 px-4 lg:px-0">
      <div className="w-full lg:w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <Contact />
          <Network />
        </div>
      </div>
    </footer>
  )
}
