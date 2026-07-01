import SocialCV from "./SocialCV";
import SocialEmail from "./SocialEmail";
import SocialLinks from "./SocialLinks";

interface Props {
  isHero: boolean;
}

export default function Social({ isHero }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <SocialLinks />
      {isHero && (
        <>
          <SocialEmail />
          <SocialCV />
        </>
      )}
    </div>
  )
}
