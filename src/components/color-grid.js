import * as React from 'karet';
import * as U from 'karet.util';

const ColorGrid = ({ colors }) =>
  <div className="color-grid">
    <ul className="color-grid__content">
      {U.thru(
        colors,
        U.mapElems((it, i) =>
          <li key={i}
              className="color-grid__item">
            <div style={{ border: 'dashed 1px #f00', height: '100%' }}>
              {i}
            </div>
          </li>)
      )}
    </ul>
  </div>;

export default ColorGrid;
