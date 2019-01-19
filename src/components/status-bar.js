import * as React from 'karet';

const StatusBar = ({ children }) =>
  <footer className="application__status-bar">
    <div className="application__status-bar__content">
      {children}
    </div>
  </footer>;

export default StatusBar;
