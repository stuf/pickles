import * as React from 'karet';
import * as U from 'karet.util';

const StatusBar = ({ children }) =>
  <footer className="application__status-bar">
    <ul className="application__status-bar__content">
      {U.thru(
        children,
        U.mapElems((child, idx) =>
          <li key={idx}>
            {child}
          </li>)
      )}
    </ul>
  </footer>;

export default StatusBar;
