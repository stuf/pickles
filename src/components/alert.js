import * as React from 'karet';
import * as U from 'karet.util';

/**
 * Alert type constants
 */
export const AlertType = Object.freeze({
  NORMAL: 'normal',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
});

const Alert = ({ title, type = AlertType.NORMAL, children }) =>
  <aside className="alert">
    <header className="alert__header">
      {title}
    </header>

    <div className="alert__body">
      {children}
    </div>
  </aside>;

export default Alert;
