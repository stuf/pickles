import * as React from 'karet';
import * as U from 'karet.util';

const IconGrid = ({ elements }) =>
  <div className="icon-grid">
    {U.thru(
      elements,
      U.mapElems((el, i) =>
        <div key={i}
            className="icon-grid__element">
          {el}
        </div>)
    )}
  </div>;

export default IconGrid;
