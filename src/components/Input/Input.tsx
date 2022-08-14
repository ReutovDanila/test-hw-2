import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};

export const Input = React.memo<InputProps>(
  ({ value, onChange, ...props }: InputProps) => {
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
      },
      [onChange]
    );

    return (
      <input
        {...props}
        type="text"
        value={value}
        onChange={handleChange}
        className={cn(
          styles['input'],
          props.disabled && styles['input_disabled'],
          props.className
        )}
      />
    );
  }
);
