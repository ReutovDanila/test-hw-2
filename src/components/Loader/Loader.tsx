import React from 'react';
import cn from 'classnames';
import styles from './Loader.module.scss';

export enum LoaderSize {
    s = 's',
    m = 'm',
    l = 'l'
}

export type LoaderProps = {
    loading?: boolean;
    size?: LoaderSize;
};

export const Loader = React.memo<LoaderProps>(({
    loading = true,
    size = LoaderSize.m
}: LoaderProps) => {
    if (!loading) {
        return null;
    }

    return (
        <div className={cn(styles.loader, styles[`loader_size-${size}`])}/>
    )
});