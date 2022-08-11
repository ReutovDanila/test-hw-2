import React from 'react';
import { Card, CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    image: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  }
};

export const Default = (props: CardProps) => (
  <Card {...props} />
);