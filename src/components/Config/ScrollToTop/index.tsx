"use client"
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl"
import { Button, Tooltip } from "@/components/UI"
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isView, setIsView] = useState<boolean>(false);
  const t = useTranslations('ScrollTop');

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
      <div className="fixed right-3 bottom-24 z-20">
        <Tooltip variant={'left'} text={t('tooltip')}>
          <Button variant={'icon'} onClick={handleScrollTop}>
            <ArrowUp />
          </Button>
        </Tooltip>
      </div>
    )
  }
  return null;
}
