import { ReactNode } from 'react';

export interface ParagraphProps {
  color?: 'dark' | 'white';
  size?: 'big' | 'small' | 'extrasmall';
  className?: string;
  children: ReactNode;
}
