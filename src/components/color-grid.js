import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

const ColorGrid = ({ colors, selected }) =>
  <div className="color-grid">
    <ul className="color-grid__content">
      {U.thru(
        colors,
        U.mapElems((it, i) =>
          <li key={i}
              className="color-grid__item">
            <div className={U.cns(
                   'color-grid__palette-item',
                   U.when(R.identical(selected, it), 'palette-item--selected'),
                 )}
                 style={{
                   height: '100%',
                   backgroundColor: it.toString(),
                 }}
                 onClick={() => selected.set(it)} />
          </li>)
      )}
    </ul>
  </div>;

export default ColorGrid;
