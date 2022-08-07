import React from 'react';
import { Loader, LoaderSize } from '../Loader/Loader';
import cn from 'classnames';
import styles from './Button.module.scss';

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary'
}
 
export type ButtonProps = React.PropsWithChildren<{
    loading?: boolean;
    type?: ButtonType;
    onClick?: React.MouseEventHandler;
}>;

export const Button = React.memo<ButtonProps>(({
    onClick = () => null,
    type = ButtonType.primary,
    loading = false,
    children = null
}: ButtonProps) => {
    return (
        <button className={cn(styles.button, styles[`button_type-${type}`])} onClick={onClick}>
            {loading && <Loader size={LoaderSize.s}/>}
            {children}
        </button>
    )
});
