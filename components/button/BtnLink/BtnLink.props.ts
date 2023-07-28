import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BtnLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'secondary' | 'simple';
  disabled?: boolean;
  href?: string;
  arrow?: boolean;
  scroll?: boolean;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined,
  ) => void;
}
