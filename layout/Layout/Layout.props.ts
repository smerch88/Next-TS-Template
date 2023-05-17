import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface LayoutProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}
