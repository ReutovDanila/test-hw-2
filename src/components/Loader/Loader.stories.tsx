import React from 'react';

import { Loader, LoaderProps } from './Loader';

export default {
  title: 'Loader',
  component: Loader,
};

export const Default = (props: LoaderProps) => (
  <Loader {...props}/>
);