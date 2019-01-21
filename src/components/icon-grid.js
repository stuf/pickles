import * as React from 'karet';
import * as U from 'karet.util';

const IconGrid = ({ elements }) =>
  <ul className="icon-grid">
    {U.thru(
      elements,
      U.mapElems((el, i) =>
        <li key={i}
            className="icon-grid__element">
          {el}
        </li>)
    )}
  </ul>;

export default IconGrid;
