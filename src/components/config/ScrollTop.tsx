"use client";
import { useState, useEffect } from "react";
import { Tooltip } from "antd";
import { CaretUpFilled } from "@ant-design/icons";
import { useTranslations } from "next-intl";

export default function ScrollTop() {
  const [isView, setIsView] = useState<boolean>(false);
  const t = useTranslations("ScrollTop");

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const ButtonIsVisible = () => {
    const valueScrollY = window.scrollY;
    if (valueScrollY >= 550) {
      setIsView(true);
    } else {
      setIsView(false);
    }
  };

  useEffect(() => {
    ButtonIsVisible();

    window.addEventListener("scroll", ButtonIsVisible);

    return () => {
      window.removeEventListener("scroll", ButtonIsVisible);
    };
  }, []);

  if (isView) {
    return (
      <Tooltip placement="left" title={t("tooltip")}>
        <button
          className="border-none rounded-full flex items-center p-3 fixed z-10 bottom-20 right-5 shadow-lg cursor-pointer bg-white dark:bg-[#444] hover:bg-[#f5f5f5] dark:hover:bg-[#555]"
          onClick={handleScrollTop}
        >
          <CaretUpFilled className="text-[#333] dark:text-white" />
        </button>
      </Tooltip>
    );
  }

  return null;
}
