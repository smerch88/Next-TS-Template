import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface SectionProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}
