import * as React from 'react';
import NumberFormat from 'react-number-format';

type Props = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

export const CurrencyTextField = React.forwardRef<NumberFormat<{}>, Props>((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
});
