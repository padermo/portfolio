import { PROFILE } from "@/lib/constants/profile";
import Image from "next/image";

export default function HeroAvatar() {
  return (
    <Image
      src={PROFILE.avatar}
      alt="Fabio Estevez"
      width={250}
      height={250}
      priority
      className="aspect-square m-auto rounded-full object-cover shadow-lg shadow-background/50 w-62.5 h-62.5"
    />
  )
}
