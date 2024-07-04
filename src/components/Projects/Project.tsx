import { CldImage } from "next-cloudinary";
import { Carousel } from "antd";
import type { PropsProject } from "@/types/generals";

export default function Project({
  images,
  title,
  paragraph,
  technologies,
  url,
}: PropsProject) {
  return (
    <article className="rounded-md bg-[#e8e8e8] shadow-lg shadow-black/20 flex flex-col overflow-hidden w-80 dark:bg-[#333] md:w-[28rem] lg:w-[28rem]">
      <Carousel
        dots={false}
        easing="ease-in-out"
        autoplay
        autoplaySpeed={4000}
        effect="fade"
        speed={1000}
      >
        {images.map((img, index) => (
          <CldImage
            key={index}
            src={img}
            alt={title}
            width={1280}
            height={720}
            loading="lazy"
            className="aspect-video object-cover"
          />
        ))}
      </Carousel>
      <header className="flex flex-col items-center gap-3 p-3">
        <h3
          onClick={url ? () => window.open(url, "_blank") : undefined}
          className={`text-center font-semibold tracking-wide text-lg text-[#222] dark:text-white ${url && "cursor-pointer hover:underline"}`}
        >
          {title}
        </h3>
        <p className="font-light text-wrap tracking-wide text-base font-serif text-[#222] dark:text-gray-100">
          {paragraph}
        </p>
        <div className="flex items-center gap-2 flex-wrap mt-1">
          {technologies.map((value, index) => (
            <p
              key={index}
              className="font-light text-sm text-[#222] rounded-md py-[1px] px-1 bg-[#d9d9d9] dark:text-gray-100 dark:bg-[#555]"
            >
              {value}
            </p>
          ))}
        </div>
      </header>
    </article>
  );
}
