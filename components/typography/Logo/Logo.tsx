import LogoImg from '@/public/images/logo.svg';
import { routes } from '@/utils/routes';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { LogoProps } from './Logo.props';

export const Logo: FC<LogoProps> = ({
  sticky,
  width = 176,
  height = 22,
  className,
}) => {
  return (
    <Link
      href={routes.HOME}
      className={cn(
        'block hover:outline-primary focus:outline-primary',
        { ['py-4']: sticky },
        className,
      )}
    >
      <LogoImg width={width} height={height} aria-label="Логотип сайту" />
    </Link>
  );
};
