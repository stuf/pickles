import * as React from 'karet';

const Section = ({ title, collapsible = false, children }) =>
  <section className="group-section">
    <header className="group-section__header">
      {title}
    </header>

    <div className="group-section__content">
      {children}
    </div>
  </section>;

export default Section;
