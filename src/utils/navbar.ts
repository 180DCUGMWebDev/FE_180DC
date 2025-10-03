import { ReactNode } from "react";

export interface Button180Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string,
  text: string | ReactNode,
  action?: Function | null,
  addClass?: string,
  disableForm?: boolean,
  href?: string,
}