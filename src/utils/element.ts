import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"

//sooner.tsx
export type Theme = 'system' | 'light' | 'dark';

//navigation-menu.tsx
export interface NavigationMenuProps extends NavigationMenuPrimitive.NavigationMenuProps {
  viewport?: React.ReactNode;
}

//input.tsx
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

//button.tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  className?: string;
}

//alert.tsx
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive';
  className?: string;
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface AlertDescriptionProps extends AlertTitleProps{}