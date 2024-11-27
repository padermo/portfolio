import * as React from 'react';
import { clsx } from 'clsx';

const tagStyle = 'inline-block bg-background rounded-md px-2 py-1 text-center text-paragraph capitalize';

export interface TagProps extends React.HTMLProps<HTMLDivElement> {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text, className, ...props }) => {
  return (
    <div className={clsx(tagStyle, className)} {...props}>{text}</div>
  )
}

Tag.displayName = 'Div';

export default Tag;
