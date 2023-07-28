import { FC } from 'react';
import cn from 'classnames';

import { IconLinkProps } from './IconLink.props';

export const IconLink: FC<IconLinkProps> = ({
  href,
  className,
  label,
  children,
}) => {
  return (
    <a
      className={cn('h-8 w-8', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
};
