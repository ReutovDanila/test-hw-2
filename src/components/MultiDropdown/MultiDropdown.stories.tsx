import React from 'react';
import { MultiDropdown, MultiDropdownProps, Option } from './MultiDropdown';

export default {
  title: 'MultiDropdown',
  component: MultiDropdown,
};

const Wrapper = (props: Pick<MultiDropdownProps, 'disabled'>) => {
  const [value, setValue] = React.useState<Option[]>([]);
  return (
    <>
      <h3>{JSON.stringify(value)}</h3>
      <MultiDropdown
        disabled={props.disabled}
        options={[
          { key: 'msk', value: 'Москва' },
          { key: 'spb', value: 'Санкт-Петербург' },
          { key: 'ekb', value: 'Екатеринбург' },
        ]}
        onChange={setValue}
        value={value}
        pluralizeOptions={(values: Option[]) => `Выбрано: ${values.length}`}
      />
    </>
  );
};

export const Default = (props: Pick<MultiDropdownProps, 'disabled'>) => (
  <Wrapper {...props} />
);
