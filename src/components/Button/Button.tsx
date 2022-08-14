import React from 'react';
import { Loader, LoaderSize } from '../Loader/Loader';
import cn from 'classnames';
import styles from './Button.module.scss';

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
}

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.memo<ButtonProps>(
  ({
    onClick = () => null,
    color = ButtonColor.primary,
    loading = false,
    children = null,
    ...props
  }: ButtonProps) => {
    const disabled = props.disabled || loading;

    return (
      <button
        {...props}
        className={cn(
          props.className,
          styles.button,
          styles[`button_color-${color}`],
          disabled && styles['button_disabled']
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {loading && <Loader size={LoaderSize.s} />}
        {children}
      </button>
    );
  }
);
