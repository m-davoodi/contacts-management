import * as React from 'react';

/**
 * keep boolean state
 * @param initialState
 * @return:
 *  0: current state
 *  1: toggle function
 *    toggle(false) set current value to false
 *    toggle(true)  set current value to true
 *    toggle()      toggle value
 */
export const useBooleanState = (initialState: boolean): [boolean, (value?: boolean) => void] => {
  const [state, setState] = React.useState(initialState);

  const toggleValue = (value: boolean | undefined) => {
    if (value === undefined) {
      setState((s) => !s);
    } else {
      setState(value);
    }
  };

  return [state, toggleValue];
};
