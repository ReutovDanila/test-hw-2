import React from 'react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = ({children = 'Кнопка', ...props}: ButtonProps) => (
  <Button {...props}>{children}</Button>
);