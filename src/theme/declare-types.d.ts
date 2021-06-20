declare module '*.css';
declare module '*.scss';

import { NextComponentType, NextPage } from 'next';
import { LayoutProps } from '@layout/index';

declare global {
  interface Data<PO> {
    LayoutProps?: LayoutProps | ((ctx: PO) => LayoutProps);
  }

  type Page<P = {}, IP = P> = NextPage<IP> & Data<P>;
}
