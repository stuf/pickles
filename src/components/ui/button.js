import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

const Button = ({ children, className, secondary, action = R.identity, size, disabled }) =>
  <button className={U.cns(
            'button',
            className,
            U.when(secondary, 'button--secondary'),
            U.when(size, U.string`button--${size}`),
          )}
          onClick={action}
          disabled={disabled}>
    {children}
  </button>;

export default Button;
