declare module '*.css';
declare module '*.scss';

import { NextComponentType, NextPage } from 'next';
import { LayoutProps } from '@layout/index';

declare global {
  interface Data<PO> {
    layoutProps?: LayoutProps | ((ctx: PO) => LayoutProps);
  }

  type Page<P = {}> = NextPage<P> & Data<P>;
}
