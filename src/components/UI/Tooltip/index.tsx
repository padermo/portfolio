import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const tooltipStyle = cva(
  'bg-black absolute px-2 py-1 rounded-md text-white opacity-0 pointer-events-none whitespace-nowrap transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto',
  {
    variants: {
      variant: {
        bottom: '-bottom-10 left-1/2 transform -translate-x-1/2 mt-2',
        left: 'left-auto right-full top-1/2 transform -translate-y-1/2 mr-2',
      }
    },
    defaultVariants: {
      variant: 'bottom',
    }
  }
);

export interface TooltipProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof tooltipStyle> {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ className, text, variant, children }) => {
  return (
    <div className='relative group'>
      <span className={clsx(tooltipStyle({ variant }), className)}>{text}</span>
      {children}
    </div>
  )
}

Tooltip.displayName = "Tooltip";

export default Tooltip;
