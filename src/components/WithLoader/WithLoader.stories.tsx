import React from 'react';

import { WithLoader, WithLoaderProps } from './WithLoader';

export default {
  title: 'WithLoader',
  component: WithLoader,
};

export const Default = (props: WithLoaderProps) => (
  <WithLoader {...props}>
    <div style={{ overflowWrap: 'break-word' }}>{'abcd'.repeat(1000)}</div>
  </WithLoader>
);
