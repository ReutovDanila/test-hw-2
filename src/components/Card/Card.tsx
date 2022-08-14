import React from 'react';

export type CardProps = {
    /** URL изображения */
    image: string;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Подзаголовок карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    content?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
};

export const Card = React.memo<CardProps>(({ 
    image,
    title,
    subtitle,
    content,
    onClick
}: CardProps) => {
    return (
        <div onClick={onClick}>
            <img src={image} alt="card"/>
            <span>{title}</span>
            <span>{subtitle}</span>
            {content}
        </div>
    );
});