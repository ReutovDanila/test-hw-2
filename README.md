# Начинающий React разработчик. Домашнее задание №2

В данном домашнем задании вам необходимо реализовать некоторые React-компоненты для вашего будущего проекта. 

## 1. Loader
Реализуйте компонент Лоадер

**Макеты:**

**Требования:**
```typescript
/** Возможные значения размера лоадера */
enum LoaderSize {
    s = 's',
    m = 'm',
    l = 'l'
}

/** Пропсы, которые принимает компонент Loader */
type LoaderProps = {
    /**
     * Идет ли загрузка.
     * По умолчанию - true, для удобства использования
     * Если false, то лоадер не должен отображаться
     */
    loading?: boolean;
    /**
     * Размер лоадера.
     * По умолчанию - LoaderSize.m
     */
    size?: LoaderSize;
};
```

**Примеры использования:**
```typescript
<Loader />  // стандартный лоадер

<Loader size={LoaderSize.l} />  // лоадер размера L

<Loader loading={isLoading} />  // лоадер, который отображается только при isLoading=false
```

## 2. Button
Реализуйте компонент Кнопка.

**Макеты кнопки:**

**Требования:**
1. Кнопка принимает пропсы ButtonProps и удовлетворяет их требованиям, описанным ниже
1. Текст кнопки/дочерний элемент передается в качестве children
1. При передаче дополнительного className не должны сбрасываться внутренние (описанные вами в стилях) классы кнопки
1. Компонент должен быть реактивным, то есть реагировать на изменение любых пропсов

```typescript
/** Возможные раскраски кнопки */
enum ButtonColor {
    /** Основная, акцентная кнопка */
    primary = 'primary',
    /** Второстепенная кнопка */
    secondary = 'secondary'
}
 
 /** Пропсы, который принимает компонент Button */
export type ButtonProps = React.PropsWithChildren<{
    /**
     * Если true, то внутри кнопки вместе с children отображается компонент Loader
     * Также кнопка должна переходить в состояние disabled
     */
    loading?: boolean;
    /** Задает один из возможных вариантов раскраски кнопки */
    color?: ButtonColor;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;
```

**Примеры использования:**
```typescript
// Кнопка с текстом "Отправить", логирующая в консоль "Письмо отправлено" при клике 
<Button onClick={() => console.log('Письмо отправлено')}>
  Отправить
</Button>

// Второстепенная кнопка, отображающая лоадер при загрузке каких-то данных
<Button
  color={ButtonColor.secondary}
  loading={isLoading}
>
  Отправить
</Button>

// Кнопка с элементом в качестве содержимого
<Button>
  <span>Модная кнопка</span>
</Button>

// Заблокированная кнопка с дополнительным классом
<Button className="some-outer-class" disabled>
  Отправить
</Button>

// Кнопка с пропсом нативной кнопки
<Button onMouseOver={() => console.log('Убери от меня курсор!')}>
  Отправить
</Button>
```

## 3. Card
Реализуйте компонент Карточка (Элемент списка).

**Макеты карточки:**
[GitHub](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=1%3A63),
[E-commerce](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=1%3A2224),
[Food](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=7%3A814),
[Crypto](https://www.figma.com/file/xS1HZPihGT3NpSigyxSAm8/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B?node-id=9%3A823)

**Требования:**
```typescript
/** Пропсы, которые принимает компонент Card */
type CardProps = {
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
```

**Примеры использования:**
```typescript
// Простая карточка 
<Card
    image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
    title="Мандарин"
    subtitle="Марокко"
    onClick={() => console.log('Мандарин куплен!')}
/>

// Карточка с доп.контентом и подзаголовком-ссылкой
<Card
    image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
    title="Мандарин"
    subtitle={<a href="/morocco">Марокко</a>}
    content={<span><b>299р</b><i>5 отзывов</i><span>}
/>
```

## 4. Input
Реализуйте компонент Поле ввода.

**Требования:**
```typescript
/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};
```

**Примеры использования:**
```typescript
// Простое поле 
<Input
    value="Кто такой биткоин?"
    onChange={(value: string) => console.log(value)}
/>

// Заблокированное поле с плейсхолдером
<Input
    value=""
    onChange={(value: string) => console.log(value)}
    placeholder="Начните набирать свой вопрос"
    disabled
/>
```

## 5. MultiDropdown
Реализуйте компонент Выпадающий список с множественным выбором (Фильтр).

**Требования:**
```typescript
/** Вариант для выбора в фильтре */
type Option = {
    /** Ключ варианта, используется для отправки на бек/использования в коде */
    key: string;
    /** Значение варианта, отображается пользователю */
    value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
type MultiDropdownProps = {
    /** Массив возможных вариантов для выбора */
    options: Option[];
    /** Текущие выбранные значения поля, может быть пустым */
    value: Option[];
    /** Callback, вызываемый при выборе варианта */
    onChange: (value: Option[]) => void;
    /** Заблокирован ли дропдаун */
    disabled?: boolean;
    /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
    pluralizeOptions: (value: Option[]) => string;
}
```

**Примеры использования:**
```typescript
// Простой фильтр 
<MultiDropdown
    options={[
        { key: 'msk', value: 'Москва' },
        { key: 'spb', value: 'Санкт-Петербург' },
        { key: 'ekb', value: 'Екатеринбург' }
    ]}
    value={[{ key: 'msk', value: 'Москва' }]}
    onChange={({ key, value }: Option) => console.log('Выбрано:', key, value)}
    pluralizeOptions={() => ''}
/>

// Заблокированный фильтр
<MultiDropdown
    disabled
    options={someOptions}
    value={currentValue}
    onChange={onChange}
    pluralizeOptions={(values: Option[]) => values.length === 0 ? 'Выберите город' : `Выбрано: ${values.length}`}
/>

// Фильтр, отображающий количество выбранных вариантов
<MultiDropdown
    options={someOptions}
    value={currentValue}
    onChange={onChange}
    pluralizeOptions={(values: Option[]) => `Выбрано: ${values.length}`}
/>
```

## 6. CheckBox
Реализуйте компонент Чекбокс.

**Требования:**
```typescript
/** Пропсы, которые принимает компонент CheckBox */
type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
    /** Текущее значение (отмечен или нет)*/
    value: boolean;
    /** Вызывается при клике на чекбокс */
    onChange: (value: boolean) => void;
};
```

**Примеры использования:**
```typescript
// Простой чекбокс 
<CheckBox
  value={checked}
  onChange={setChecked}
/>

// Заблокированный чекбокс 
<CheckBox
  disabled
  value={checked}
  onChange={setChecked}
/>
```