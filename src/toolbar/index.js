import * as React from 'karet';
import * as U from 'karet.util';

const Toolbar = ({ children }) =>
  <div className="application__toolbar">
    <div className="toolbar__icon-grid">
      {U.thru(
        children,
        U.mapElems((child, i) =>
          <div key={i}
              className="toolbar__icon">
            {child}
          </div>)
      )}
    </div>
  </div>;

export default Toolbar;
