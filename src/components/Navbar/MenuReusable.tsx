"use client";
import { Menu } from "antd";
import type { MenuReusableProps } from "@/types/generals";

export default function MenuReusable({ items, mode }: MenuReusableProps) {
  return (
    <Menu
      items={items}
      mode={mode}
      className={`w-full flex ${mode === "inline" ? "flex-col" : "justify-end"}`}
    />
  );
}
