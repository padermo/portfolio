import {
  GithubFilled,
  GlobalOutlined,
  MailFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import type { ButtonReusableProps, IconsKeys } from "@/types/generals";

const icons: Record<
  IconsKeys,
  | typeof GithubFilled
  | typeof GlobalOutlined
  | typeof MailFilled
  | typeof LinkedinFilled
> = {
  github: GithubFilled,
  global: GlobalOutlined,
  mail: MailFilled,
  linkedin: LinkedinFilled,
};

export default function ButtonReusable({
  tooltip,
  icon,
  handleClick,
}: ButtonReusableProps) {
  const GetIcon = (icon: IconsKeys) => {
    const IconComponent = icons[icon];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <Tooltip title={tooltip} placement="bottom">
      <button
        onClick={handleClick}
        className="rounded-full flex items-center p-2 text-xl transition-colors duration-300 ease-in-out text-[#222] dark:text-white hover:bg-[#f5f5f5] dark:hover:bg-[#555] hover:shadow-lg hover:text-[#CFB53B]"
      >
        {!!icon && GetIcon(icon)}
      </button>
    </Tooltip>
  );
}
