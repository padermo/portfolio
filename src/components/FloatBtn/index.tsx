"use client";
import { useEffect, useState } from "react";

export default function FloatBtn() {
  const [isView, setIsView] = useState<boolean>(false);

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
      <button
        aria-label="scroll to top"
        className="float-btn"
        onClick={handleScrollTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M18 11l-6 -6" />
          <path d="M6 11l6 -6" />
        </svg>
      </button>
    );
  }

  return null;
}
