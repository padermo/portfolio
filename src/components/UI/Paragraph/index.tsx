import * as React from 'react';
import { clsx } from 'clsx';

const paragraphStyle = 'text-paragraph font-serif leading-relaxed break-words';

export interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ className, text, ...props }) => {
  return <p className={clsx(paragraphStyle, className)} {...props}>{text}</p>
}

Paragraph.displayName = "Paragraph";

export default Paragraph;
