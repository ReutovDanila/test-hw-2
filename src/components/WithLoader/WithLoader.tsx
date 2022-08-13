import React from 'react';
import { Loader } from '../Loader/Loader';
import styles from './WithLoader.module.scss';

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader = React.memo<WithLoaderProps>(({ loading, children }: WithLoaderProps) => {
    return (
        <>
            {loading && <Loader className={styles['loader']} />}
            {children}
        </>
    );
});
