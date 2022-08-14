import React from 'react';
import { Input, InputProps } from './Input';

export default {
  title: 'Input',
  component: Input
};

export const Default = (props: InputProps) => (
  <Input {...props} />
);