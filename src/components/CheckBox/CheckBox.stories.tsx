import React from 'react';
import { CheckBox, CheckBoxProps } from './CheckBox';

export default {
  title: 'CheckBox',
  component: CheckBox
};

export const Default = (props: CheckBoxProps) => (
  <CheckBox {...props} />
);