import * as React from 'karet';
import * as R from 'kefir.ramda';

const Button = ({ children, action = R.identity, disabled }) =>
  <button className="button"
          onClick={action}
          disabled={disabled}>
    {children}
  </button>;

export default Button;
