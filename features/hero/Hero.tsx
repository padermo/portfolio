import Social from "../social/Social";
import HeroAvatar from "./HeroAvatar";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="flex gap-8 flex-col lg:flex-row pt-4 pb-20">
      <HeroAvatar />
      <div className="flex flex-col gap-3">
        <HeroContent />
        <Social isHero />
      </div>
    </section>
  )
}
