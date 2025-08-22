import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(t => (
          <li
            data-cy="Tab"
            key={t.id}
            className={classNames({ 'is-active': t.id === activeTabId })}
          >
            {t.id !== activeTabId ? (
              <a
                data-cy="TabLink"
                href={`#${t.id}`} onClick={() => onTabSelected(t.id)}>
                {t.title}
              </a>
            ) : (
              <a
                data-cy="TabLink"
                href={`#${t.id}`}>
                  {t.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
