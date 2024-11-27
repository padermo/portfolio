import * as React from 'react';
import { clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import Button from '../Button';
import Label from '../Label';

const dropdownStyle = cva('inline-block cursor-pointer relative');

const dropdownMenuStyle = cva(
  'flex-col ',
  {
    variants: {
      device: {
        desktop: 'absolute right-0 top-full mt-2 p-2 bg-cards gap-2 rounded-md shadow-black/30 shadow-md',
        mobile: '',
      }
    },
    defaultVariants: {
      device: 'desktop',
    }
  }
);

export interface Content {
  label: string;
  key: string;
}

export interface DropdownMenuProps extends VariantProps<typeof dropdownStyle> {
  isOpen: Boolean;
  content: Content[];
  onSelect: (item: Content) => void;
  device: 'mobile' | 'desktop';
}

export interface DropdownProps
  extends React.HTMLProps<HTMLDivElement> {
  text: string;
  items: Content[];
  callback: (item: Content) => void;
  device: 'mobile' | 'desktop';
}

const Dropdown: React.FC<DropdownProps> = ({ className, text, device = 'desktop', items, callback }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!dropdownRef.current?.contains(event.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };
  return (
    <div ref={dropdownRef} tabIndex={0} onBlur={handleBlur} className={clsx(dropdownStyle(), className)} onClick={() => setIsOpen(!isOpen)}>
      <Button variant={'default'} size={'normal'} className={clsx('w-full lg:w-auto flex items-center justify-between !px-0')}>
        {text}
        {device === 'mobile' && <ChevronDown className={clsx('transition-transform duration-200 ease-in-out', { 'rotate-180': isOpen })} />}
      </Button>
      <DropdownMenu isOpen={isOpen} content={items} onSelect={callback} device={device} />
    </div>
  )
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ content, isOpen, device, onSelect }) => {
  return (
    <div className={clsx(dropdownMenuStyle({ device }), { 'flex': isOpen, 'hidden': !isOpen })}>
      {content.map((item: Content) => (
        <Label
          key={item.key}
          text={item.label}
          size={'normal'}
          onClick={() => onSelect(item)}
          className='cursor-pointer px-4 py-2 hover:bg-gray-hover hover:rounded-md'
        />
      ))}
    </div>
  );
};

export default Dropdown;
