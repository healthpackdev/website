declare module '*.css';
declare module '*.scss';

import {NextPage} from "next";
import {} from "layu"
declare global {
    interface Page extends NextPage {
        LayoutProps: 
    }
}