import React from 'react';
import cn from 'classnames';
import styles from './CheckBox.module.scss';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

export const CheckBox = React.memo<CheckBoxProps>(
  ({ checked, onChange, ...props }: CheckBoxProps) => {
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.checked);
      },
      [onChange]
    );

    return (
      <input
        {...props}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={cn(
          styles['checkbox'],
          props.disabled && styles['checkbox_disabled'],
          props.className
        )}
      />
    );
  }
);
