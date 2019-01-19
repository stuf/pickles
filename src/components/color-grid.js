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
            <div className="color-grid__palette-item"
                 style={{
                   height: '100%',
                   backgroundColor: it.toString(),
                 }} />
          </li>)
      )}
    </ul>
  </div>;

export default ColorGrid;
