"use client";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function Alert() {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.querySelector('html')?.className || 'light';
      setTheme(currentTheme);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      observer.observe(htmlElement, { attributes: true, attributeFilter: ['class'] });
    }

    return () => observer.disconnect();
  }, [])
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  )
}
