import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonColor } from '../components/Button/Button';
import { BUTTON_TEXT, Locators } from './constants';
import userEvent from '@testing-library/user-event';

jest.mock('../components/Loader/Loader.tsx', () => require('./MockLoader'));

describe('Тестирование компонента Button', () => {
    test('Текстовый children пробрасывается корректно', () => {
        render(<Button>{BUTTON_TEXT}</Button>);
      
        const buttonElement = screen.getByText(BUTTON_TEXT);
      
        expect(buttonElement).toBeInTheDocument();
    });
      
    test('Элемент children пробрасывается корректно', () => {
        render(<Button><span data-testid={Locators.BUTTON_CHILDREN}>{BUTTON_TEXT}</span></Button>);
    
        const buttonElement = screen.getByText(BUTTON_TEXT);
        const innerElement = screen.getByTestId(Locators.BUTTON_CHILDREN);
    
        expect(buttonElement).toContainElement(innerElement);
    });

    test('При передаче loading=true внутри кнопки отображается компонент Loader', () => {
        const { rerender } = render(<Button loading>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);
        const loader = screen.getByTestId(Locators.LOADER);
    
        expect(buttonElement).toContainElement(loader);

        rerender(<Button>{BUTTON_TEXT}</Button>);
        expect(buttonElement).not.toContainElement(loader);
    });


    test('При передаче loading=true кнопка задизейбленная', () => {
        const { rerender } = render(<Button loading>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);
    
        expect(buttonElement).toBeDisabled();

        rerender(<Button>{BUTTON_TEXT}</Button>);
        expect(buttonElement).not.toBeDisabled();
    });

    test('При передаче loading=true при клике на кнопку onClick не вызывается', () => {
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick} loading>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);
        userEvent.click(buttonElement);
    
        expect(mockOnClick).not.toBeCalled();
    });

    test('При передаче loading=true добавляется класс button_disabled', () => {
        const { rerender } = render(<Button loading>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);

        expect(buttonElement).toBeDisabled();

        rerender(<Button>{BUTTON_TEXT}</Button>);

        expect(buttonElement).not.toBeDisabled();
    });

    test('Переданный onClick вызывается при клике', () => {
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick}>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);
        userEvent.click(buttonElement);
    
        expect(mockOnClick).toBeCalledTimes(1);
    });

    test('Пропс color учавствует в формировании класса на кнопке', () => {
        const { rerender } = render(<Button color={ButtonColor.primary}>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);

        expect(buttonElement).toHaveClass('button_color-primary');

        rerender(<Button color={ButtonColor.secondary}>{BUTTON_TEXT}</Button>);

        expect(buttonElement).toHaveClass('button_color-secondary');
    });

    test('При disabled=true не вызывается onClick', () => {
        const mockOnClick = jest.fn();
        const { rerender } = render(<Button onClick={mockOnClick} disabled>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);
        userEvent.click(buttonElement);
    
        expect(mockOnClick).not.toBeCalled();

        rerender(<Button onClick={mockOnClick}>{BUTTON_TEXT}</Button>);
        userEvent.click(buttonElement);

        expect(mockOnClick).toBeCalledTimes(1);
    });

    test('При disabled=true добавляется класс button_disabled', () => {
        const { rerender } = render(<Button disabled>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);

        expect(buttonElement).toHaveClass('button_disabled');

        rerender(<Button>{BUTTON_TEXT}</Button>);

        expect(buttonElement).not.toHaveClass('button_disabled');
    });

    test('При disabled=true проставляется атрибут disabled=true у кнопки', () => {
        const { rerender } = render(<Button disabled>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);

        expect(buttonElement).toBeDisabled();

        rerender(<Button>{BUTTON_TEXT}</Button>);

        expect(buttonElement).not.toBeDisabled();
    });

    test('Можно передать дополнительный className, не влияющий на остальные классы кнопки', () => {
        const testClassName = 'test-class';
        render(<Button className={testClassName} disabled>{BUTTON_TEXT}</Button>);

        const buttonElement = screen.getByText(BUTTON_TEXT);

        expect(buttonElement).toHaveClass(testClassName, 'button_disabled');
    });

    test('Пробрасываются все пропсы, которые принимает нативная кнопка', () => {
        const onHover = jest.fn();
        const onUnHover = jest.fn();
        const onFocus = jest.fn();
        const onBlur = jest.fn();
        const id = 'BUTTON_ID';
        const name = 'BUTTON_NAME';
        const width = '132px';

        render(
            <Button
                onMouseOver={onHover}
                onFocus={onFocus}
                onBlur={onBlur}
                onMouseOut={onUnHover}
                id={id}
                name={name}
                style={{ width }}
            >
                {BUTTON_TEXT}
            </Button>
        );

        const buttonElement = screen.getByText(BUTTON_TEXT);

        userEvent.hover(buttonElement);
        expect(onHover).toBeCalledTimes(1);

        userEvent.unhover(buttonElement);
        expect(onUnHover).toBeCalledTimes(1);

        userEvent.tab();
        expect(onFocus).toBeCalledTimes(1);

        userEvent.tab();
        expect(onBlur).toBeCalledTimes(1);

        expect(buttonElement).toHaveAttribute('id', id);
        expect(buttonElement).toHaveAttribute('name', name);
        expect(buttonElement).toHaveStyle({ width });
    });
});
