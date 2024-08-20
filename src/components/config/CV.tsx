"use client";
import { Tooltip } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { CV as cvUrl } from "@/utils/functions";

export default function CV() {
  return (
    <Tooltip placement="left" title="CV">
      <button
        className="border-none rounded-full flex items-center p-3 fixed z-10 bottom-5 right-5 shadow-lg cursor-pointer bg-white dark:bg-[#444] hover:bg-[#f5f5f5] dark:hover:bg-[#555]"
        onClick={() => window.open(cvUrl, "_blank")}
      >
        <FileTextOutlined className="text-[#333] dark:text-white" />
      </button>
    </Tooltip>
  );
}
