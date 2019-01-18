import * as React from 'karet';
import * as U from 'karet.util';

const BASE = 'pane';

const Pane = ({ children, direction = 'vertical' }) =>
  <div className={U.cns(
    U.string`${BASE}-element`,
    direction ? U.string`${BASE}-element--${direction}` : `${BASE}-element--vertical`
  )}>
    <div className="pane-element__content">
      {children}
    </div>
  </div>;

export default Pane;
