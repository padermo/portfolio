import Image from "next/image";
import { Carousel } from "antd";
import ButtonReusable from "../Reusables/ButtonReusable";
import type { PropsProject } from "@/types/generals";

export default function Project({
  images,
  title,
  paragraph,
  technologies,
  section,
  url,
  repository,
  tooltips,
}: PropsProject) {
  return (
    <section className="bg-[#e8e8e8] flex flex-wrap justify-between gap-3 w-full py-6 px-4 md:px-8 lg:px-10 dark:bg-[#333] lg:odd:flex-row-reverse">
      <div className="w-full lg:w-1/2">
        <Carousel
          dots={false}
          easing="ease-in-out"
          autoplay
          autoplaySpeed={4000}
          effect="fade"
          speed={1000}
          className="w-full"
        >
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={title}
              width={1280}
              height={720}
              loading="lazy"
              className="aspect-video object-cover object-center rounded-md"
            />
          ))}
        </Carousel>
      </div>
      <article className="w-full flex flex-1 flex-col items-center gap-3 lg:px-6">
        <h3 className="text-center font-semibold tracking-wide text-lg text-[#222] dark:text-white">
          {title}
        </h3>
        <p className="font-light text-wrap tracking-wide text-base font-serif text-[#222] dark:text-gray-100">
          {paragraph}
        </p>
        <div className="w-full mt-2">
          <h4 className="font-semibold text-[#222] dark:text-white">
            {section}
          </h4>
          <div className="flex flex-wrap gap-3 mt-1">
            {technologies.map((value, index) => (
              <p
                key={index}
                className="font-light text-sm text-[#222] rounded-md py-1 px-2 bg-[#d9d9d9] dark:text-gray-100 dark:bg-[#555]"
              >
                {value}
              </p>
            ))}
          </div>
        </div>
        <footer className="w-full flex gap-1 mt-3">
          {!!repository && (
            <ButtonReusable
              tooltip={tooltips?.repository as string}
              icon="github"
              handleClick={() => window.open(repository, "_blank")}
            />
          )}
          {!!url && (
            <ButtonReusable
              tooltip={tooltips?.demo as string}
              icon="global"
              handleClick={() => window.open(url, "_blank")}
            />
          )}
        </footer>
      </article>
    </section>
  );
}
