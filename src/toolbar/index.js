import * as React from 'karet';
import * as U from 'karet.util';

const Toolbar = ({ children }) =>
  <div className="application__toolbar">
    <ul className="toolbar__icon-grid">
      {U.thru(
        children,
        U.mapElems((child, i) =>
          <li key={i}
              className="toolbar__icon">
            {child}
          </li>)
      )}
    </ul>
  </div>;

export default Toolbar;
