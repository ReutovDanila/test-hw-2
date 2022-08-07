import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button/Button';

const BUTTON_TEXT = 'BUTTON_TEST_TEXT';
const BUTTON_CHILDREN_TEST_ID = 'button-inner-element'

describe('Тестирование компонента Button', () => {
    test('Текстовый children пробрасывается корректно', () => {
        render(<Button>{BUTTON_TEXT}</Button>);
      
        const buttonElement = screen.getByText(BUTTON_TEXT);
      
        expect(buttonElement).toBeInTheDocument();
    });
      
    test('Элемент children пробрасывается корректно', () => {
        render(<Button><span data-testid={BUTTON_CHILDREN_TEST_ID}>{BUTTON_TEXT}</span></Button>);
    
        const buttonElement = screen.getByText(BUTTON_TEXT);
        const innerElement = screen.getByTestId(BUTTON_CHILDREN_TEST_ID);
    
        expect(buttonElement).toContainElement(innerElement);
    });
});
