"use client";
import { Menu } from "antd";
import type { MenuReusableProps } from "@/types/generals";

export default function MenuReusable({ items, mode }: MenuReusableProps) {
  return (
    <Menu
      items={items}
      mode={mode}
      className={`flex ${mode === "inline" ? "w-full flex-col" : "min-w-56 max-w-full"}`}
    />
  );
}
