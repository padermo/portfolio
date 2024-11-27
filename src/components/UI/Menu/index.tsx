import * as React from 'react';
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const menuStyle = cva(
  'w-full flex gap-4 text-base',
  {
    variants: {
      direction: {
        vertical: 'flex-col bg-cards px-4 py-2 rounded-md shadow-black/20 shadow-lg',
        horizont: 'flex-row items-center'
      }
    },
    defaultVariants: {
      direction: 'horizont'
    }
  }
)

const itemStyle = cva('cursor-pointer font-medium list-none text-paragraph py-2 hover:text-primary');

export interface MenuItems {
  label: string;
  key: string;
}

export interface MenuProps extends React.HTMLProps<HTMLUListElement>, VariantProps<typeof menuStyle> {
  children: React.ReactNode;
}

export interface ItemProps extends React.HTMLProps<HTMLLIElement> {
  items: MenuItems[];
}

const MenuBase: React.FC<MenuProps> = ({ className, direction, children }) => {
  return (
    <ul className={clsx(menuStyle({ direction }), className)}>
      {children}
    </ul>
  )
}

const Item: React.FC<ItemProps> = ({ className, items }) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return items.map((item: MenuItems) => (
    <li key={item.key} className={clsx(itemStyle(), className)} onClick={() => handleScroll(item.key)}>{item.label}</li>
  ))
}

type MenuWithItem = React.FC<MenuProps> & {
  Item: React.FC<ItemProps>;
};

const Menu = MenuBase as MenuWithItem;

Menu.Item = Item;

export default Menu;
