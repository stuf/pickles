import * as React from 'karet';
import * as R from 'kefir.ramda';
import Button from './button';
import Icon from '../icon';

const IconButton = ({ children, name, action = R.identity }) =>
  <Button action={action}>
    <Icon name={name} />
    {children}
  </Button>;

export default IconButton;
